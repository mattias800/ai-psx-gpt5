import { decodeBlock } from './adpcm';
import { AR_SAMPLES, DR_SAMPLES, RR_SAMPLES, SR_DRIFT } from './adsr-tables';
const SPU_BASE = 0x1f801c00;
export class SPU {
    // Simple 16-bit register space covering 0x200 bytes (0x1f801c00..0x1f801dff)
    regs = new Uint16Array(0x200 / 2);
    // 512 KiB SPU RAM stored as 16-bit halfwords
    ram = new Uint16Array(0x80000 >>> 1);
    // Transfer address in halfwords; register exposes units of 8 bytes (i.e., 4 halfwords)
    xferAddrHW = 0;
    // IRQ support
    irqAddrHW = 0; // compared against low 16 bits of xferAddrHW
    irqEnabled = false;
    irqFlag = false; // reflected in status
    irqHandler;
    masterVolL = 1.0;
    masterVolR = 1.0;
    reverbVolL = 0.0;
    reverbVolR = 0.0;
    voiceStartUnits = new Uint16Array(24); // per-voice start addr in units of 8 bytes
    voices = Array.from({ length: 24 }, () => ({
        volL: 1.0,
        volR: 1.0,
        keyOn: false,
        pending: new Int16Array(0),
        posFP: 0,
        stepFP: 1 << 16,
        loopStart: 0,
        loopEnd: 0,
        loop: false,
        env: 0,
        phase: 'idle',
        atkS: 0,
        decS: 0,
        relS: 0,
        susL: 1,
        adsrSimple: true,
        noise: false,
    }));
    // MMIO (minimal placeholder behavior)
    read16(addr) {
        const off = ((addr >>> 0) - SPU_BASE) >>> 0;
        if (off >= 0x200)
            return 0;
        // Expose minimal RAM transfer address at 0x1f801da6 (offset 0x1a6)
        if (off === 0x1a6) {
            // Return in units of 8 bytes (4 halfwords)
            return ((this.xferAddrHW >>> 2) & 0xffff) >>> 0;
        }
        if (off === 0x1a2) {
            // IRQ address (low 16 bits of halfword address)
            return this.irqAddrHW & 0xffff;
        }
        if (off === 0x1a8) {
            // SPU data port: read and increment
            this.maybeTriggerIRQ();
            const hw = this.ram[this.xferAddrHW] & 0xffff;
            this.xferAddrHW = (this.xferAddrHW + 1) % this.ram.length;
            return hw;
        }
        if (off === 0x1ae) {
            // SPU status, reflect IRQ flag at bit6
            const idx = (off >>> 1) & (this.regs.length - 1);
            const base = this.regs[idx] & 0xffff;
            return (base & ~0x0040) | (this.irqFlag ? 0x0040 : 0);
        }
        return this.regs[(off >>> 1) & (this.regs.length - 1)] & 0xffff;
    }
    write16(addr, v) {
        const off = ((addr >>> 0) - SPU_BASE) >>> 0;
        if (off >= 0x200)
            return;
        v &= 0xffff;
        // Transfer address and data port
        if (off === 0x1a6) {
            const units = v & 0xffff;
            this.xferAddrHW = (units * 4) % this.ram.length;
            return;
        }
        if (off === 0x1a2) {
            this.irqAddrHW = v & 0xffff;
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1a8) {
            this.maybeTriggerIRQ();
            this.ram[this.xferAddrHW] = v & 0xffff;
            this.xferAddrHW = (this.xferAddrHW + 1) % this.ram.length;
            return;
        }
        // Global master volume
        if (off === 0x180) { // MVOL_L
            this.setMasterVolume(v & 0x3fff, Math.floor(this.masterVolR * 0x3fff));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x182) { // MVOL_R
            this.setMasterVolume(Math.floor(this.masterVolL * 0x3fff), v & 0x3fff);
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x184) { // RVB_VOLL
            this.reverbVolL = Math.max(0, Math.min(1, (v & 0x3fff) / 0x3fff));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x186) { // RVB_VOLR
            this.reverbVolR = Math.max(0, Math.min(1, (v & 0x3fff) / 0x3fff));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1aa) { // SPU_CTRL (minimal)
            this.irqEnabled = ((v & 0x0040) !== 0);
            // Use bits 2..6 as noise frequency control (approx)
            this.noiseFreq = ((v >>> 2) & 0x1f) >>> 0;
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1ae) { // SPU_STATUS (allow ack of IRQ flag by clearing bit6)
            if ((v & 0x0040) === 0)
                this.irqFlag = false;
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Key on/off masks
        const applyKeyMask = (mask, on) => {
            for (let i = 0; i < 16; i++)
                if (mask & (1 << i))
                    this.setVoiceKeyOn(i, on);
        };
        if (off === 0x188) { // KEY ON (0..15)
            applyKeyMask(v, true);
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x18c) { // KEY ON (16..23)
            const mask = v & 0x00ff;
            for (let i = 0; i < 8; i++)
                if (mask & (1 << i))
                    this.setVoiceKeyOn(16 + i, true);
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x18a) { // KEY OFF (0..15)
            applyKeyMask(v, false);
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x18e) { // KEY OFF (16..23)
            const mask = v & 0x00ff;
            for (let i = 0; i < 8; i++)
                if (mask & (1 << i))
                    this.setVoiceKeyOn(16 + i, false);
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Pitch modulation masks (no-op for now besides state)
        if (off === 0x190) { // PMON (0..15)
            for (let i = 0; i < 16; i++)
                this.voices[i].pitchMod = !!(v & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x192) { // PMON (16..23)
            const mask = v & 0x00ff;
            for (let i = 0; i < 8; i++)
                this.voices[16 + i].pitchMod = !!(mask & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Noise on masks
        if (off === 0x194) { // NOISE ON (0..15)
            for (let i = 0; i < 16; i++)
                this.voices[i].noise = !!(v & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x196) { // NOISE ON (16..23)
            const mask = v & 0x00ff;
            for (let i = 0; i < 8; i++)
                this.voices[16 + i].noise = !!(mask & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Reverb on masks (no-op mixing for now)
        if (off === 0x198) { // RVB_ON (0..15)
            for (let i = 0; i < 16; i++)
                this.voices[i].reverbOn = !!(v & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x19a) { // RVB_ON (16..23)
            const mask = v & 0x00ff;
            for (let i = 0; i < 8; i++)
                this.voices[16 + i].reverbOn = !!(mask & (1 << i));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Reverb parameter block (simplified mapping)
        if (off === 0x1c0) { // REVERB_DELAY (frames)
            const req = (v & 0x3fff) | 0;
            this.rvbDelay = Math.max(1, Math.min(req, Math.max(1, this.rvbSize - 1)));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1c2) { // REVERB_FEEDBACK (0..0x3fff => 0..0.95)
            const f = Math.max(0, Math.min(0x3fff, v & 0x3fff)) / 0x3fff;
            this.rvbFeedback = Math.max(0, Math.min(0.95, f * 0.95));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1c4) { // REVERB_SEND (0..0x3fff => 0..1.0)
            const g = Math.max(0, Math.min(0x3fff, v & 0x3fff)) / 0x3fff;
            this.rvbSendGain = Math.max(0, Math.min(1.0, g));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1c6) { // REVERB_SIZE (re-initializes ring with nearest pow2)
            let req = (v & 0x7fff) | 0;
            if (req < 512)
                req = 512;
            if (req > 16384)
                req = 16384;
            // nearest power-of-two >= req
            let sz = 1;
            while (sz < req)
                sz <<= 1;
            if (sz > 16384)
                sz = 16384;
            this.rvbSize = sz;
            this.rvbL = new Float32Array(this.rvbSize);
            this.rvbR = new Float32Array(this.rvbSize);
            this.rvbIdx = 0;
            this.rvbDelay = Math.min(this.rvbDelay, this.rvbSize - 1);
            this.rvbLPStateL = 0;
            this.rvbLPStateR = 0;
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        if (off === 0x1c8) { // REVERB_LP_ALPHA (0x1f801dc8)
            // Maps 0..0x3fff -> coefficient in [0..1]. Higher value => stronger low-pass (smoother feedback).
            // Readback via read16 returns the raw 16-bit value that was written.
            const a = Math.max(0, Math.min(0x3fff, v & 0x3fff)) / 0x3fff;
            this.rvbLPAlpha = Math.max(0, Math.min(1.0, a));
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Per-voice regs 0x00..0x17F, 16 bytes stride
        if (off < 0x180) {
            const vi = (off >>> 4) & 0x1f;
            const voff = off & 0x0f;
            switch (voff) {
                case 0x00: // VOL_L
                    this.setVoiceVolume(vi, v & 0x3fff, Math.floor(this.voices[vi].volR * 0x3fff));
                    break;
                case 0x02: // VOL_R
                    this.setVoiceVolume(vi, Math.floor(this.voices[vi].volL * 0x3fff), v & 0x3fff);
                    break;
                case 0x04: { // PITCH
                    // Map 0x1000 -> 1.0 step
                    const step = (v << 4) >>> 0;
                    this.setVoicePitch(vi, step);
                    break;
                }
                case 0x06: // START (accept as alias)
                case 0x0c: // START (our simplified model uses 0x0C)
                    this.voiceStartUnits[vi] = v & 0xffff;
                    break;
                case 0x08: // ADSR1
                    // store then decode to simplified envelope params
                    this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
                    this.updateVoiceADSR(vi);
                    return;
                case 0x0a: // ADSR2
                    this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
                    this.updateVoiceADSR(vi);
                    return;
                default:
                    break;
            }
            this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
            return;
        }
        // Default store
        this.regs[(off >>> 1) & (this.regs.length - 1)] = v;
    }
    // High-level control API for tests and future wiring
    setInterpolationMode(mode) { this.interpMode = mode; }
    quantizeInMix = false;
    setQuantizeInMix(on) { this.quantizeInMix = !!on; }
    setMasterVolume(volL_0_0x3fff, volR_0_0x3fff) {
        this.masterVolL = Math.max(0, Math.min(1, volL_0_0x3fff / 0x3fff));
        this.masterVolR = Math.max(0, Math.min(1, volR_0_0x3fff / 0x3fff));
    }
    setVoiceVolume(voice, volL_0_0x3fff, volR_0_0x3fff) {
        const v = this.voices[voice];
        v.volL = Math.max(0, Math.min(1, volL_0_0x3fff / 0x3fff));
        v.volR = Math.max(0, Math.min(1, volR_0_0x3fff / 0x3fff));
    }
    setVoiceKeyOn(voice, on) {
        const v = this.voices[voice];
        v.keyOn = !!on;
        if (on) {
            v.phase = v.atkS > 0 ? 'attack' : 'decay';
            v.env = v.atkS > 0 ? 0 : 1;
            // reset sample position on key-on
            v.posFP = 0;
            if (v.streamFromRAM) {
                v.blockBuf = undefined;
                v.streamPosFP = 0;
                v.adpcmPrev1 = 0;
                v.adpcmPrev2 = 0;
            }
            else if (v.pending.length === 0) {
                // Auto-start streaming from per-voice start address if configured
                const startUnits = this.voiceStartUnits[voice] & 0xffff;
                if (startUnits !== 0)
                    this.setVoiceStreamFromRAM(voice, startUnits);
            }
        }
        else {
            if (v.env > 0)
                v.phase = v.relS > 0 ? 'release' : 'idle';
            if (v.relS === 0)
                v.env = 0;
        }
    }
    setVoiceADSR(voice, attackSamples, decaySamples, sustainLevel01, releaseSamples) {
        const v = this.voices[voice];
        v.atkS = Math.max(0, Math.floor(attackSamples) | 0);
        v.decS = Math.max(0, Math.floor(decaySamples) | 0);
        v.relS = Math.max(0, Math.floor(releaseSamples) | 0);
        v.susL = Math.max(0, Math.min(1, sustainLevel01));
        v.adsrSimple = true;
        v.attackExp = false;
        v.releaseExp = false;
        v.susK = 0;
    }
    enqueuePCM(voice, samples) {
        // Replace buffer for simplicity in this iteration
        const v = this.voices[voice];
        v.pending = samples.slice();
        v.posFP = 0;
    }
    appendPCM(voice, samples) {
        const v = this.voices[voice];
        if (v.pending.length === 0) {
            v.pending = samples.slice();
            return;
        }
        const merged = new Int16Array(v.pending.length + samples.length);
        merged.set(v.pending, 0);
        merged.set(samples, v.pending.length);
        v.pending = merged;
    }
    // DMA write into SPU RAM at current transfer address; increments with wrap
    dmaWriteToRAM(samplesLE) {
        for (let i = 0; i < samplesLE.length; i++) {
            this.maybeTriggerIRQ();
            this.ram[this.xferAddrHW] = samplesLE[i] & 0xffff;
            this.xferAddrHW = (this.xferAddrHW + 1) % this.ram.length;
        }
    }
    // DMA read halfwords from SPU RAM at current transfer address; increments with wrap
    dmaReadFromRAM(countHalfwords) {
        const n = Math.max(0, countHalfwords | 0);
        const out = new Uint16Array(n);
        for (let i = 0; i < n; i++) {
            this.maybeTriggerIRQ();
            out[i] = this.ram[this.xferAddrHW] & 0xffff;
            this.xferAddrHW = (this.xferAddrHW + 1) % this.ram.length;
        }
        return out;
    }
    // Helper to copy a region from SPU RAM into a voice's PCM buffer
    loadPCMFromRAM(voice, addrUnits8Bytes, halfwords, replace = true) {
        const startHW = ((addrUnits8Bytes & 0xffff) * 4) % this.ram.length;
        const n = Math.max(0, halfwords | 0);
        const pcm = new Int16Array(n);
        let idx = startHW;
        for (let i = 0; i < n; i++) {
            let w = this.ram[idx] & 0xffff;
            if (w & 0x8000)
                w = (w - 0x10000) | 0;
            pcm[i] = w;
            idx = (idx + 1) % this.ram.length;
        }
        if (replace)
            this.enqueuePCM(voice, pcm);
        else
            this.appendPCM(voice, pcm);
    }
    // Enable streaming ADPCM from SPU RAM for the voice
    setVoiceStreamFromRAM(voice, addrUnits8Bytes) {
        const v = this.voices[voice];
        v.streamFromRAM = true;
        v.ramAddrHW = ((addrUnits8Bytes & 0xffff) * 4) % this.ram.length;
        v.adpcmPrev1 = 0;
        v.adpcmPrev2 = 0;
        v.blockBuf = undefined;
        v.streamPosFP = 0;
        v.loopRamAddrHW = undefined;
        v.loopPrev1 = undefined;
        v.loopPrev2 = undefined;
        v.prevBlockLastSample = 0;
    }
    clearVoiceStream(voice) {
        const v = this.voices[voice];
        v.streamFromRAM = false;
    }
    setVoicePitch(voice, stepFP) {
        // stepFP: 16.16 fixed, 1<<16 = normal
        this.voices[voice].stepFP = stepFP >>> 0;
    }
    setVoiceLoop(voice, start, end, enabled) {
        const v = this.voices[voice];
        v.loopStart = Math.max(0, Math.min(start | 0, v.pending.length));
        v.loopEnd = Math.max(v.loopStart, Math.min(end | 0, v.pending.length));
        v.loop = !!enabled;
    }
    updateVoiceADSR(vi) {
        // Read stored ADSR1/ADSR2 from regs for voice vi
        const baseOff = (vi << 4) >>> 0; // 16 bytes per voice
        const adsr1 = this.regs[((baseOff + 0x08) >>> 1) & (this.regs.length - 1)] >>> 0;
        const adsr2 = this.regs[((baseOff + 0x0a) >>> 1) & (this.regs.length - 1)] >>> 0;
        const v = this.voices[vi];
        // Official bitfields (per nocash/psx docs approximation):
        // ADSR1: [15]=AM (0=linear,1=exp), [14:10]=AR (0..31), [7:4]=DR (0..15), [3:0]=SR (0..15)
        // ADSR2: [15]=SM (0=linear sustain,1=exp sustain), [10]=RM (0=linear,1=exp), [9:5]=RR (0..31), [4:0]=SL (0..31)
        const AM = (adsr1 >>> 15) & 0x1;
        const AR = (adsr1 >>> 10) & 0x1f;
        const DR = (adsr1 >>> 4) & 0x0f;
        const SR = adsr1 & 0x0f;
        const SL = adsr2 & 0x1f;
        const RR = (adsr2 >>> 5) & 0x1f;
        const RM = (adsr2 >>> 10) & 0x1;
        const SM = (adsr2 >>> 15) & 0x1;
        // Table-driven durations (frames)
        const atk = AR_SAMPLES[AR & 31] | 0;
        const dec = DR_SAMPLES[DR & 15] | 0;
        const rel = RR_SAMPLES[RR & 31] | 0;
        const sus = Math.max(0, Math.min(1, SL / 31));
        v.atkS = atk | 0;
        v.decS = dec | 0;
        v.relS = rel | 0;
        v.susL = sus;
        v.attackExp = !!AM;
        v.releaseExp = !!RM;
        v.sustainExp = !!SM;
        // Sustain drift factor: larger SR -> faster approach; SR=0 holds
        v.susK = SR_DRIFT[SR & 15];
        v.adsrSimple = false;
    }
    stepEnv(v) {
        switch (v.phase) {
            case 'attack': {
                if (v.atkS <= 0) {
                    v.env = 1;
                    v.phase = 'decay';
                    break;
                }
                if (v.adsrSimple) {
                    v.env += 1 / v.atkS;
                }
                else {
                    if (v.attackExp)
                        v.env += (1 - v.env) * (1 / v.atkS);
                    else
                        v.env += 1 / v.atkS;
                }
                if (v.env >= 1) {
                    v.env = 1;
                    v.phase = 'decay';
                }
                break;
            }
            case 'decay': {
                if (v.decS <= 0) {
                    v.env = v.susL;
                    v.phase = 'sustain';
                    break;
                }
                if (v.adsrSimple) {
                    const step = (1 - v.susL) / v.decS;
                    v.env -= step;
                }
                else {
                    // Exponential-like approach to sustain level
                    v.env += (v.susL - v.env) * (1 / v.decS);
                }
                if (v.env <= v.susL + 1e-6) {
                    v.env = v.susL;
                    v.phase = 'sustain';
                }
                break;
            }
            case 'sustain': {
                if (!v.adsrSimple) {
                    const k = v.susK ?? 0;
                    if (k > 0) {
                        if (v.sustainExp) {
                            // exponential drift toward sustain
                            v.env += (v.susL - v.env) * k;
                        }
                        else {
                            // linear drift toward sustain
                            const diff = v.susL - v.env;
                            const step = Math.sign(diff) * k;
                            if (Math.abs(diff) <= Math.abs(step))
                                v.env = v.susL;
                            else
                                v.env += step;
                        }
                    }
                }
                break;
            }
            case 'release': {
                if (v.relS <= 0) {
                    v.env = 0;
                    v.phase = 'idle';
                    break;
                }
                if (v.adsrSimple) {
                    v.env -= 1 / v.relS;
                }
                else {
                    if (v.releaseExp)
                        v.env += (0 - v.env) * (1 / v.relS);
                    else
                        v.env -= 1 / v.relS;
                }
                if (v.env <= 0) {
                    v.env = 0;
                    v.phase = 'idle';
                }
                break;
            }
            case 'idle':
            default: {
                v.env = 0;
                break;
            }
        }
    }
    mix(frames, raw = false) {
        const out = new Float32Array(frames * 2);
        for (let i = 0; i < frames; i++) {
            let accL = 0;
            let accR = 0;
            let sendL = 0;
            let sendR = 0;
            let noiseSample;
            for (let vi = 0; vi < this.voices.length; vi++) {
                const v = this.voices[vi];
                // advance envelope first
                if (v.phase !== 'idle')
                    this.stepEnv(v);
                if (!v.keyOn && v.phase === 'idle') {
                    this.pmLastEnv[vi] = 0;
                    continue;
                }
                // compute effective step with FM if enabled (modulated by previous voice's last sample)
                const prev = (vi + 23) % 24;
                let effectiveStepFP;
                if (v.pitchMod) {
                    const mod = this.pmLastEnv[prev]; // [-1,1]
                    let factor = 1 + this.pmDepth * mod;
                    if (factor < 0.5)
                        factor = 0.5;
                    else if (factor > 1.5)
                        factor = 1.5;
                    effectiveStepFP = Math.floor(v.stepFP * factor) >>> 0;
                }
                v.effectiveStepFP = effectiveStepFP;
                // sample fetch
                let f = 0;
                if (v.noise) {
                    if (noiseSample === undefined)
                        noiseSample = this.nextNoiseFloat();
                    f = noiseSample * v.env;
                }
                else if (v.streamFromRAM) {
                    // Streaming path with simple linear interpolation and pitch using stepFP
                    const s16 = this.streamInterpolatedSample(v);
                    f = (s16 / 32768.0) * v.env;
                }
                else if (v.pending.length > 0) {
                    // PCM buffer path with interpolation
                    const idx = v.posFP >>> 16;
                    const frac = (v.posFP & 0xffff) / 65536.0;
                    const readPCM = (i) => {
                        const n = v.pending.length;
                        if (n === 0)
                            return 0;
                        if (i >= 0 && i < n)
                            return v.pending[i] | 0;
                        if (v.loop && v.loopEnd > v.loopStart) {
                            const loopLen = Math.max(1, v.loopEnd - v.loopStart);
                            const base = v.loopStart;
                            const wrapped = base + (((i - base) % loopLen) + loopLen) % loopLen;
                            return v.pending[Math.min(Math.max(0, wrapped), n - 1)] | 0;
                        }
                        // clamp at edges when not looping
                        return v.pending[Math.max(0, Math.min(n - 1, i))] | 0;
                    };
                    let sVal;
                    if (this.interpMode === 'gaussian') {
                        this.ensureGaussLUT();
                        const lutIdx = Math.min(this.gaussSteps - 1, Math.floor(frac * this.gaussSteps));
                        const s0 = readPCM(idx - 1);
                        const s1 = readPCM(idx);
                        const s2 = readPCM(idx + 1);
                        const s3 = readPCM(idx + 2);
                        sVal = s0 * this.gaussW0[lutIdx] + s1 * this.gaussW1[lutIdx] + s2 * this.gaussW2[lutIdx] + s3 * this.gaussW3[lutIdx];
                    }
                    else {
                        const a = readPCM(idx);
                        const b = readPCM(idx + 1);
                        sVal = a + (b - a) * frac;
                    }
                    f = (sVal / 32768.0) * v.env;
                    // advance
                    const step = (v.effectiveStepFP ?? v.stepFP) >>> 0;
                    let next = (v.posFP + step) >>> 0;
                    let nextIdx = next >>> 16;
                    if (v.loop && v.loopEnd > v.loopStart) {
                        const loopLen = v.loopEnd - v.loopStart;
                        if (loopLen > 0) {
                            // if crossed end, wrap within loop
                            if (nextIdx >= v.loopEnd) {
                                const over = nextIdx - v.loopStart;
                                nextIdx = v.loopStart + (over % loopLen);
                                const fracPart = next & 0xffff;
                                next = (nextIdx << 16) | fracPart;
                            }
                        }
                    }
                    else if (nextIdx >= v.pending.length) {
                        // stop at end when not looping
                        next = ((v.pending.length - 1) << 16) >>> 0;
                    }
                    v.posFP = next;
                }
                // store for FM use by next frame (pre-volume, post-envelope)
                this.pmLastEnv[vi] = f;
                const dryL = f * v.volL * this.masterVolL;
                const dryR = f * v.volR * this.masterVolR;
                accL += dryL;
                accR += dryR;
                if (v.reverbOn) {
                    sendL += dryL;
                    sendR += dryR;
                }
            }
            // Reverb processing
            if (this.reverbVolL > 0 || this.reverbVolR > 0) {
                if (!this.rvbL || !this.rvbR) {
                    this.rvbL = new Float32Array(this.rvbSize);
                    this.rvbR = new Float32Array(this.rvbSize);
                    this.rvbIdx = 0;
                }
                const rd = (this.rvbIdx - this.rvbDelay + this.rvbSize) % this.rvbSize;
                const prevL = this.rvbL[rd];
                const prevR = this.rvbR[rd];
                const retL = prevL * this.reverbVolL;
                const retR = prevR * this.reverbVolR;
                accL += retL;
                accR += retR;
                // low-pass filter in feedback path (bypass when alpha==0)
                let fbL = prevL, fbR = prevR;
                if (this.rvbLPAlpha > 0) {
                    // One-pole LP: y += k * (x - y), where k = 1 - coeff. Larger coeff => smaller k => more smoothing.
                    const k = 1 - this.rvbLPAlpha; // invert: larger coeff => stronger smoothing
                    this.rvbLPStateL = this.rvbLPStateL + k * (prevL - this.rvbLPStateL);
                    this.rvbLPStateR = this.rvbLPStateR + k * (prevR - this.rvbLPStateR);
                    fbL = this.rvbLPStateL;
                    fbR = this.rvbLPStateR;
                }
                // write new sample with feedback
                const nl = sendL * this.rvbSendGain + fbL * this.rvbFeedback;
                const nr = sendR * this.rvbSendGain + fbR * this.rvbFeedback;
                this.rvbL[this.rvbIdx] = nl;
                this.rvbR[this.rvbIdx] = nr;
                this.rvbIdx = (this.rvbIdx + 1) % this.rvbSize;
            }
            // Optional clamp to [-1,1] when not producing raw mixing output
            if (!raw) {
                if (accL > 1)
                    accL = 1;
                else if (accL < -1)
                    accL = -1;
                if (accR > 1)
                    accR = 1;
                else if (accR < -1)
                    accR = -1;
                if (this.quantizeInMix) {
                    const q = (x) => {
                        let s = Math.round(x * 32767);
                        if (s > 32767)
                            s = 32767;
                        else if (s < -32768)
                            s = -32768;
                        return s / 32768;
                    };
                    accL = q(accL);
                    accR = q(accR);
                }
            }
            out[i * 2] = accL;
            out[i * 2 + 1] = accR;
        }
        return out;
    }
    // Simple interleaved stereo ring buffer for scheduler-driven mixing
    ring = null;
    ringFrames = 0;
    ringRd = 0;
    ringWr = 0;
    // Noise generator state
    noiseLfsr = 0x1ffff; // 17-bit seed (non-zero)
    noiseFreq = 0; // 0..31
    noiseLast = 0; // float [-1,1]
    // Pitch modulation (FM) support: keep last frame pre-volume envelope sample per voice
    pmLastEnv = new Float32Array(24);
    pmDepth = 0.25; // max +/-25% pitch at full-scale modulator
    // Interpolation mode for streaming from RAM
    interpMode = 'linear';
    // Gaussian interpolation LUT (PS1-like 4-tap) for fractional phase [0,1)
    gaussSteps = 512;
    gaussW0 = null;
    gaussW1 = null;
    gaussW2 = null;
    gaussW3 = null;
    ensureGaussLUT() {
        if (this.gaussW0)
            return;
        const steps = this.gaussSteps;
        const w0 = new Float32Array(steps);
        const w1 = new Float32Array(steps);
        const w2 = new Float32Array(steps);
        const w3 = new Float32Array(steps);
        const alpha = 2.0; // tuned smoothing strength; PS1-like shape
        for (let i = 0; i < steps; i++) {
            const frac = i / steps; // [0,1)
            const d0 = 1 + frac, d1 = frac, d2 = 1 - frac, d3 = 2 - frac;
            const g0 = Math.exp(-alpha * d0 * d0);
            const g1 = Math.exp(-alpha * d1 * d1);
            const g2 = Math.exp(-alpha * d2 * d2);
            const g3 = Math.exp(-alpha * d3 * d3);
            const sum = g0 + g1 + g2 + g3 || 1;
            w0[i] = g0 / sum;
            w1[i] = g1 / sum;
            w2[i] = g2 / sum;
            w3[i] = g3 / sum;
        }
        this.gaussW0 = w0;
        this.gaussW1 = w1;
        this.gaussW2 = w2;
        this.gaussW3 = w3;
    }
    // Simple reverb (echo) bus
    rvbL = null;
    rvbR = null;
    rvbSize = 4096;
    rvbIdx = 0;
    rvbDelay = 128; // frames
    rvbFeedback = 0.35; // feedback amount
    rvbSendGain = 0.5; // scale send to avoid clipping
    rvbLPAlpha = 0.0; // low-pass coefficient in feedback path [0..1], 0=bypass (higher => stronger low-pass)
    rvbLPStateL = 0.0;
    rvbLPStateR = 0.0;
    // IRQ wiring
    attachIRQ(handler) { this.irqHandler = handler; }
    maybeTriggerIRQ() {
        if (!this.irqEnabled)
            return;
        if (((this.xferAddrHW & 0xffff) | 0) === (this.irqAddrHW & 0xffff)) {
            this.irqFlag = true;
            this.irqHandler?.();
        }
    }
    configureRing(capacityFrames) {
        this.ringFrames = Math.max(1, capacityFrames | 0);
        this.ring = new Float32Array(this.ringFrames * 2);
        this.ringRd = this.ringWr = 0;
    }
    stepMix(frames) {
        if (!this.ring)
            this.configureRing(4096);
        const chunk = this.mix(frames, true);
        // Quantize to signed 16-bit with symmetric saturation before writing to ring
        const q = (x) => {
            let s = Math.round(x * 32767);
            if (s > 32767)
                s = 32767;
            else if (s < -32768)
                s = -32768;
            return s / 32768;
        };
        for (let i = 0; i < chunk.length; i += 2) {
            const nextWr = (this.ringWr + 1) % this.ringFrames;
            if (nextWr === this.ringRd)
                break; // drop if full
            this.ring[this.ringWr * 2] = q(chunk[i]);
            this.ring[this.ringWr * 2 + 1] = q(chunk[i + 1]);
            this.ringWr = nextWr;
        }
    }
    nextNoiseFloat() {
        // Galois LFSR 17-bit with taps (17,14); primitive poly x^17 + x^14 + 1
        // Step a number of times depending on noiseFreq to vary rough bandwidth
        const steps = 1 + (this.noiseFreq & 0x1f);
        for (let i = 0; i < steps; i++) {
            const lsb = this.noiseLfsr & 1;
            this.noiseLfsr >>>= 1;
            if (lsb)
                this.noiseLfsr ^= (1 << 16) | (1 << 13); // taps at 17,14
            if (this.noiseLfsr === 0)
                this.noiseLfsr = 0x1ffff;
        }
        // Map to [-1,1]
        const val = ((this.noiseLfsr & 0x1ffff) / 0x1ffff) * 2 - 1;
        this.noiseLast = val;
        return val;
    }
    streamInterpolatedSample(v) {
        if (!v.streamFromRAM)
            return 0;
        this.ensureCurrentBlock(v);
        // Get indices
        const pos = v.streamPosFP >>> 0;
        const idx = pos >>> 16;
        const frac = (pos & 0xffff) / 65536.0;
        let sampleVal;
        if (this.interpMode === 'gaussian') {
            // Prepare neighbor samples s0(idx-1), s1(idx), s2(idx+1), s3(idx+2)
            const buf = v.blockBuf;
            let s0, s1, s2, s3;
            // s1
            s1 = buf[Math.min(idx, 27)] | 0;
            // s0
            if (idx > 0)
                s0 = buf[idx - 1] | 0;
            else
                s0 = (v.prevBlockLastSample ?? s1) | 0;
            // Ensure next block cache if we might need it
            if (idx >= 26)
                this.peekNextFirstSample(v, /*prepareCache*/ true);
            const nb = v;
            // s2
            if (idx < 27)
                s2 = buf[idx + 1] | 0;
            else
                s2 = (nb.nextBlockBuf ? (nb.nextBlockBuf[0] | 0) : s1);
            // s3
            if (idx <= 25)
                s3 = buf[idx + 2] | 0;
            else if (idx === 26)
                s3 = (nb.nextBlockBuf ? (nb.nextBlockBuf[0] | 0) : s2);
            else /* idx>=27 */
                s3 = (nb.nextBlockBuf ? (nb.nextBlockBuf[1] | 0) : s2);
            // Gaussian-like 4-tap weights from LUT based on fractional position
            this.ensureGaussLUT();
            const lutIdx = Math.min(this.gaussSteps - 1, Math.floor(frac * this.gaussSteps));
            const y = s0 * this.gaussW0[lutIdx] + s1 * this.gaussW1[lutIdx] + s2 * this.gaussW2[lutIdx] + s3 * this.gaussW3[lutIdx];
            sampleVal = y;
        }
        else {
            // Linear interpolation (original behavior)
            const a = v.blockBuf[Math.min(idx, 27)] | 0;
            let b;
            if (idx >= 27) {
                // cross-block interpolation: peek next block's first sample
                b = this.peekNextFirstSample(v, /*prepareCache*/ true);
            }
            else {
                b = v.blockBuf[idx + 1] | 0;
            }
            sampleVal = a + (b - a) * frac;
        }
        // advance position
        const step = (v.effectiveStepFP ?? v.stepFP) >>> 0;
        let next = (pos + step) >>> 0;
        while ((next >>> 16) >= 28) {
            next = ((next - (28 << 16)) >>> 0);
            if (!this.advanceToNextBlock(v))
                break; // if stopped, break
        }
        v.streamPosFP = next;
        return sampleVal;
    }
    ensureCurrentBlock(v) {
        if (v.blockBuf && v.streamPosFP !== undefined)
            return;
        // If buffer missing, decode at current RAM address
        const bytes = new Uint8Array(16);
        let addr = v.ramAddrHW >>> 0;
        for (let i = 0; i < 8; i++) {
            const hw = this.ram[addr] & 0xffff;
            bytes[i * 2] = hw & 0xff;
            bytes[i * 2 + 1] = (hw >>> 8) & 0xff;
            addr = (addr + 1) % this.ram.length;
        }
        const flags = bytes[1] & 0xff;
        // Capture loop point BEFORE decode if flagged
        const prev1 = v.adpcmPrev1 ?? 0;
        const prev2 = v.adpcmPrev2 ?? 0;
        if (flags & 0x02) {
            v.loopRamAddrHW = v.ramAddrHW;
            v.loopPrev1 = prev1;
            v.loopPrev2 = prev2;
        }
        // Decode
        const st = { prev1, prev2 };
        const decoded = decodeBlock(bytes, st);
        v.adpcmPrev1 = st.prev1;
        v.adpcmPrev2 = st.prev2;
        v.blockBuf = decoded;
        v.currentFlags = flags;
        v.streamPosFP = v.streamPosFP ?? 0;
        v.ramAddrHW = (v.ramAddrHW + 8) % this.ram.length;
        // Initialize prevBlockLastSample conservatively to first sample
        v.prevBlockLastSample = v.prevBlockLastSample ?? (decoded[0] | 0);
    }
    advanceToNextBlock(v) {
        // If current block had END flag
        if ((v.currentFlags ?? 0) & 0x01) {
            // Loop if loop point known
            if (v.loopRamAddrHW !== undefined) {
                v.ramAddrHW = v.loopRamAddrHW;
                v.adpcmPrev1 = v.loopPrev1 ?? 0;
                v.adpcmPrev2 = v.loopPrev2 ?? 0;
            }
            else {
                // stop streaming
                v.streamFromRAM = false;
                v.blockBuf = new Int16Array(28); // silence
                v.streamPosFP = 0;
                return false;
            }
        }
        // Fetch next block at current ramAddrHW; prefer cached next if available
        if (v.nextBlockBuf) {
            const nb = v;
            // preserve last sample of current block for gaussian interpolation back-reference
            if (v.blockBuf && v.blockBuf.length >= 28)
                v.prevBlockLastSample = v.blockBuf[27] | 0;
            v.blockBuf = nb.nextBlockBuf;
            v.currentFlags = nb.nextBlockFlags;
            v.adpcmPrev1 = nb.nextEndPrev1;
            v.adpcmPrev2 = nb.nextEndPrev2;
            // advance ramAddrHW by one block if cached was non-loop; if it was loop, set to after loop block
            if (nb.nextFromLoop) {
                v.ramAddrHW = (nb.nextFromLoopAddrHW + 8) % this.ram.length;
            }
            else {
                v.ramAddrHW = (v.ramAddrHW + 8) % this.ram.length;
            }
            v.streamPosFP = 0;
            // clear cache
            nb.nextBlockBuf = undefined;
            return true;
        }
        else {
            v.blockBuf = undefined;
            this.ensureCurrentBlock(v);
            return true;
        }
    }
    peekNextFirstSample(v, prepareCache) {
        // Decide source address and initial state depending on END/LOOP flags
        let addrHW;
        let initPrev1;
        let initPrev2;
        let fromLoop = false;
        if ((v.currentFlags ?? 0) & 0x01 && v.loopRamAddrHW !== undefined) {
            addrHW = v.loopRamAddrHW;
            initPrev1 = v.loopPrev1 ?? 0;
            initPrev2 = v.loopPrev2 ?? 0;
            fromLoop = true;
        }
        else {
            addrHW = v.ramAddrHW;
            initPrev1 = v.adpcmPrev1 ?? 0;
            initPrev2 = v.adpcmPrev2 ?? 0;
        }
        // Fetch 16 bytes from addrHW
        const bytes = new Uint8Array(16);
        let addr = addrHW >>> 0;
        for (let i = 0; i < 8; i++) {
            const hw = this.ram[addr] & 0xffff;
            bytes[i * 2] = hw & 0xff;
            bytes[i * 2 + 1] = (hw >>> 8) & 0xff;
            addr = (addr + 1) % this.ram.length;
        }
        const flags = bytes[1] & 0xff;
        // Decode with initial state copy
        const st = { prev1: initPrev1, prev2: initPrev2 };
        const decoded = decodeBlock(bytes, st);
        if (prepareCache) {
            const nb = v;
            nb.nextBlockBuf = decoded;
            nb.nextBlockFlags = flags;
            nb.nextEndPrev1 = st.prev1;
            nb.nextEndPrev2 = st.prev2;
            nb.nextFromLoop = fromLoop;
            nb.nextFromLoopAddrHW = addrHW;
        }
        return decoded[0] | 0;
    }
    availableFrames() {
        if (!this.ring)
            return 0;
        return (this.ringWr - this.ringRd + this.ringFrames) % this.ringFrames;
    }
    pullStereo(nFrames) {
        if (!this.ring)
            this.configureRing(4096);
        const toRead = Math.min(nFrames | 0, this.availableFrames());
        const out = new Float32Array(toRead * 2);
        for (let i = 0; i < toRead; i++) {
            out[i * 2] = this.ring[this.ringRd * 2];
            out[i * 2 + 1] = this.ring[this.ringRd * 2 + 1];
            this.ringRd = (this.ringRd + 1) % this.ringFrames;
        }
        return out;
    }
    // Snapshot/restore (without audio output ring buffer)
    serialize() {
        return {
            xferAddrHW: this.xferAddrHW >>> 0,
            masterVolL: this.masterVolL,
            masterVolR: this.masterVolR,
            irqAddrHW: this.irqAddrHW >>> 0,
            irqEnabled: !!this.irqEnabled,
            irqFlag: !!this.irqFlag,
            voiceStartUnits: Array.from(this.voiceStartUnits),
            // Noise generator state
            noiseLfsr: this.noiseLfsr >>> 0,
            noiseFreq: this.noiseFreq >>> 0,
            // PMON state
            pmLastEnv: Array.from(this.pmLastEnv),
            pmDepth: this.pmDepth,
            // Reverb config and ring
            reverbVolL: this.reverbVolL,
            reverbVolR: this.reverbVolR,
            rvbIdx: this.rvbIdx >>> 0,
            rvbDelay: this.rvbDelay >>> 0,
            rvbFeedback: this.rvbFeedback,
            rvbSendGain: this.rvbSendGain,
            rvbSize: this.rvbSize >>> 0,
            rvbL: this.rvbL ? Array.from(this.rvbL) : null,
            rvbR: this.rvbR ? Array.from(this.rvbR) : null,
            rvbLPAlpha: this.rvbLPAlpha,
            rvbLPStateL: this.rvbLPStateL,
            rvbLPStateR: this.rvbLPStateR,
            interpMode: this.interpMode,
            voices: this.voices.map(v => ({
                volL: v.volL, volR: v.volR, keyOn: v.keyOn,
                pending: Array.from(v.pending), posFP: v.posFP >>> 0, stepFP: v.stepFP >>> 0,
                loopStart: v.loopStart, loopEnd: v.loopEnd, loop: v.loop,
                env: v.env, phase: v.phase, atkS: v.atkS, decS: v.decS, relS: v.relS, susL: v.susL,
                attackExp: !!v.attackExp, releaseExp: !!v.releaseExp, sustainExp: !!v.sustainExp, susK: v.susK ?? 0, adsrSimple: !!v.adsrSimple,
                noise: !!v.noise,
                reverbOn: !!v.reverbOn,
                pitchMod: !!v.pitchMod,
                streamFromRAM: !!v.streamFromRAM, ramAddrHW: v.ramAddrHW ?? 0,
                adpcmPrev1: v.adpcmPrev1 ?? 0, adpcmPrev2: v.adpcmPrev2 ?? 0,
                currentFlags: v.currentFlags ?? 0, streamPosFP: v.streamPosFP ?? 0,
                loopRamAddrHW: v.loopRamAddrHW ?? null, loopPrev1: v.loopPrev1 ?? 0, loopPrev2: v.loopPrev2 ?? 0,
            })),
        };
    }
    deserialize(s) {
        this.xferAddrHW = (s.xferAddrHW >>> 0) % this.ram.length;
        this.masterVolL = +s.masterVolL;
        this.masterVolR = +s.masterVolR;
        this.irqAddrHW = (s.irqAddrHW >>> 0) & 0xffff;
        this.irqEnabled = !!s.irqEnabled;
        this.irqFlag = !!s.irqFlag;
        // Noise / PMON
        this.noiseLfsr = (s.noiseLfsr >>> 0) || this.noiseLfsr;
        this.noiseFreq = (s.noiseFreq >>> 0) || this.noiseFreq;
        if (Array.isArray(s.pmLastEnv))
            this.pmLastEnv = Float32Array.from(s.pmLastEnv);
        this.pmDepth = +s.pmDepth || this.pmDepth;
        // Reverb
        this.reverbVolL = +s.reverbVolL || 0;
        this.reverbVolR = +s.reverbVolR || 0;
        this.rvbIdx = (s.rvbIdx >>> 0) || 0;
        this.rvbDelay = (s.rvbDelay >>> 0) || this.rvbDelay;
        this.rvbFeedback = +s.rvbFeedback || this.rvbFeedback;
        this.rvbSendGain = +s.rvbSendGain || this.rvbSendGain;
        this.rvbSize = (s.rvbSize >>> 0) || this.rvbSize;
        this.rvbL = s.rvbL ? Float32Array.from(s.rvbL) : (this.rvbL ?? null);
        this.rvbR = s.rvbR ? Float32Array.from(s.rvbR) : (this.rvbR ?? null);
        this.rvbLPAlpha = +s.rvbLPAlpha || this.rvbLPAlpha;
        this.rvbLPStateL = +s.rvbLPStateL || 0;
        this.rvbLPStateR = +s.rvbLPStateR || 0;
        if (s.interpMode === 'linear' || s.interpMode === 'gaussian')
            this.interpMode = s.interpMode;
        if (Array.isArray(s.voiceStartUnits))
            this.voiceStartUnits.set(s.voiceStartUnits.map((x) => x & 0xffff));
        this.voices = s.voices.map((w) => ({
            volL: +w.volL, volR: +w.volR, keyOn: !!w.keyOn,
            pending: Int16Array.from(w.pending ?? []), posFP: (w.posFP >>> 0), stepFP: (w.stepFP >>> 0),
            loopStart: w.loopStart | 0, loopEnd: w.loopEnd | 0, loop: !!w.loop,
            env: +w.env, phase: w.phase, atkS: w.atkS | 0, decS: w.decS | 0, relS: w.relS | 0, susL: +w.susL,
            attackExp: !!w.attackExp, releaseExp: !!w.releaseExp, sustainExp: !!w.sustainExp, susK: +w.susK, adsrSimple: !!w.adsrSimple,
            noise: !!w.noise,
            streamFromRAM: !!w.streamFromRAM, ramAddrHW: w.ramAddrHW >>> 0,
            adpcmPrev1: w.adpcmPrev1 | 0, adpcmPrev2: w.adpcmPrev2 | 0,
            currentFlags: w.currentFlags | 0, streamPosFP: w.streamPosFP >>> 0,
            loopRamAddrHW: w.loopRamAddrHW == null ? undefined : (w.loopRamAddrHW >>> 0),
            loopPrev1: w.loopPrev1 | 0, loopPrev2: w.loopPrev2 | 0,
        }));
        // restore extra per-voice flags
        if (Array.isArray(s.voices)) {
            for (let i = 0; i < Math.min(this.voices.length, s.voices.length); i++) {
                this.voices[i].reverbOn = !!s.voices[i].reverbOn;
                this.voices[i].pitchMod = !!s.voices[i].pitchMod;
            }
        }
    }
}
//# sourceMappingURL=spu.js.map