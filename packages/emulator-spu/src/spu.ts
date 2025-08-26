const SPU_BASE = 0x1f801c00;

interface Voice {
  volL: number; // 0..1
  volR: number; // 0..1
  keyOn: boolean;
  // sample position/fetch
  pending: Int16Array;
  posFP: number; // 16.16 fixed
  stepFP: number; // 16.16 fixed, 1<<16 = normal pitch
  loopStart: number; // sample index
  loopEnd: number; // sample index (exclusive)
  loop: boolean;
  // ADSR simplified
  env: number; // 0..1
  phase: 'idle' | 'attack' | 'decay' | 'sustain' | 'release';
  atkS: number;
  decS: number;
  relS: number; // samples per stage (>=1) or 0
  susL: number; // 0..1 sustain level
}

export class SPU {
  // Simple 16-bit register space covering 0x200 bytes (0x1f801c00..0x1f801dff)
  private regs = new Uint16Array(0x200 / 2);

  private masterVolL = 1.0;
  private masterVolR = 1.0;
  private voices: Voice[] = Array.from({ length: 24 }, () => ({
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
  }));

  // MMIO (minimal placeholder behavior)
  read16(addr: number): number {
    const off = ((addr >>> 0) - SPU_BASE) >>> 0;
    if (off >= 0x200) return 0;
    return this.regs[(off >>> 1) & (this.regs.length - 1)] & 0xffff;
  }

  write16(addr: number, v: number): void {
    const off = ((addr >>> 0) - SPU_BASE) >>> 0;
    if (off >= 0x200) return;
    this.regs[(off >>> 1) & (this.regs.length - 1)] = v & 0xffff;
  }

  // High-level control API for tests and future wiring
  setMasterVolume(volL_0_0x3fff: number, volR_0_0x3fff: number) {
    this.masterVolL = Math.max(0, Math.min(1, volL_0_0x3fff / 0x3fff));
    this.masterVolR = Math.max(0, Math.min(1, volR_0_0x3fff / 0x3fff));
  }
  setVoiceVolume(voice: number, volL_0_0x3fff: number, volR_0_0x3fff: number) {
    const v = this.voices[voice];
    v.volL = Math.max(0, Math.min(1, volL_0_0x3fff / 0x3fff));
    v.volR = Math.max(0, Math.min(1, volR_0_0x3fff / 0x3fff));
  }
  setVoiceKeyOn(voice: number, on: boolean) {
    const v = this.voices[voice];
    v.keyOn = !!on;
    if (on) {
      v.phase = v.atkS > 0 ? 'attack' : 'decay';
      v.env = v.atkS > 0 ? 0 : 1;
      // reset sample position on key-on
      v.posFP = 0;
    } else {
      if (v.env > 0) v.phase = v.relS > 0 ? 'release' : 'idle';
      if (v.relS === 0) v.env = 0;
    }
  }
  setVoiceADSR(
    voice: number,
    attackSamples: number,
    decaySamples: number,
    sustainLevel01: number,
    releaseSamples: number,
  ) {
    const v = this.voices[voice];
    v.atkS = Math.max(0, Math.floor(attackSamples) | 0);
    v.decS = Math.max(0, Math.floor(decaySamples) | 0);
    v.relS = Math.max(0, Math.floor(releaseSamples) | 0);
    v.susL = Math.max(0, Math.min(1, sustainLevel01));
  }

  enqueuePCM(voice: number, samples: Int16Array) {
    // Replace buffer for simplicity in this iteration
    const v = this.voices[voice];
    v.pending = samples.slice();
    v.posFP = 0;
  }

  setVoicePitch(voice: number, stepFP: number) {
    // stepFP: 16.16 fixed, 1<<16 = normal
    this.voices[voice].stepFP = stepFP >>> 0;
  }

  setVoiceLoop(voice: number, start: number, end: number, enabled: boolean) {
    const v = this.voices[voice];
    v.loopStart = Math.max(0, Math.min(start | 0, v.pending.length));
    v.loopEnd = Math.max(v.loopStart, Math.min(end | 0, v.pending.length));
    v.loop = !!enabled;
  }

  private stepEnv(v: Voice) {
    switch (v.phase) {
      case 'attack': {
        if (v.atkS <= 0) {
          v.env = 1;
          v.phase = 'decay';
          break;
        }
        v.env += 1 / v.atkS;
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
        const step = (1 - v.susL) / v.decS;
        v.env -= step;
        if (v.env <= v.susL) {
          v.env = v.susL;
          v.phase = 'sustain';
        }
        break;
      }
      case 'sustain': {
        // hold
        break;
      }
      case 'release': {
        if (v.relS <= 0) {
          v.env = 0;
          v.phase = 'idle';
          break;
        }
        v.env -= 1 / v.relS;
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

  mix(frames: number): Float32Array {
    const out = new Float32Array(frames * 2);
    for (let i = 0; i < frames; i++) {
      let accL = 0;
      let accR = 0;
      for (let vi = 0; vi < this.voices.length; vi++) {
        const v = this.voices[vi];
        // advance envelope first
        if (v.phase !== 'idle') this.stepEnv(v);
        if (!v.keyOn && v.phase === 'idle') continue;

        // sample fetch with linear interpolation and loop
        let f = 0;
        if (v.pending.length > 0) {
          const idx = v.posFP >>> 16;
          const frac = (v.posFP & 0xffff) / 65536.0;
          const a = idx < v.pending.length ? v.pending[idx] : 0;
          let idx1 = idx + 1;
          if (idx1 >= v.pending.length) {
            if (v.loop && v.loopEnd > v.loopStart) {
              // wrap to loopStart if we went past loopEnd
              idx1 = v.loopStart;
            } else {
              idx1 = v.pending.length - 1;
            }
          }
          const b = idx1 < v.pending.length ? v.pending[idx1] : 0;
          const s = a + (b - a) * frac;
          f = (s / 32768.0) * v.env;

          // advance
          let next = (v.posFP + v.stepFP) >>> 0;
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
          } else if (nextIdx >= v.pending.length) {
            // stop at end when not looping
            next = ((v.pending.length - 1) << 16) >>> 0;
          }
          v.posFP = next;
        }
        accL += f * v.volL * this.masterVolL;
        accR += f * v.volR * this.masterVolR;
      }
      // clamp to [-1,1]
      if (accL > 1) accL = 1;
      else if (accL < -1) accL = -1;
      if (accR > 1) accR = 1;
      else if (accR < -1) accR = -1;
      out[i * 2] = accL;
      out[i * 2 + 1] = accR;
    }
    return out;
  }

  // Simple interleaved stereo ring buffer for scheduler-driven mixing
  private ring: Float32Array | null = null;
  private ringFrames = 0;
  private ringRd = 0;
  private ringWr = 0;

  configureRing(capacityFrames: number) {
    this.ringFrames = Math.max(1, capacityFrames | 0);
    this.ring = new Float32Array(this.ringFrames * 2);
    this.ringRd = this.ringWr = 0;
  }

  stepMix(frames: number) {
    if (!this.ring) this.configureRing(4096);
    const chunk = this.mix(frames);
    for (let i = 0; i < chunk.length; i += 2) {
      const nextWr = (this.ringWr + 1) % this.ringFrames;
      if (nextWr === this.ringRd) break; // drop if full
      this.ring![this.ringWr * 2] = chunk[i];
      this.ring![this.ringWr * 2 + 1] = chunk[i + 1];
      this.ringWr = nextWr;
    }
  }

  availableFrames(): number {
    if (!this.ring) return 0;
    return (this.ringWr - this.ringRd + this.ringFrames) % this.ringFrames;
  }

  pullStereo(nFrames: number): Float32Array {
    if (!this.ring) this.configureRing(4096);
    const toRead = Math.min(nFrames | 0, this.availableFrames());
    const out = new Float32Array(toRead * 2);
    for (let i = 0; i < toRead; i++) {
      out[i * 2] = this.ring![this.ringRd * 2];
      out[i * 2 + 1] = this.ring![this.ringRd * 2 + 1];
      this.ringRd = (this.ringRd + 1) % this.ringFrames;
    }
    return out;
  }
}
