const SPU_BASE = 0x1f801c00;

interface Voice {
  volL: number; // 0..1
  volR: number; // 0..1
  keyOn: boolean;
  readIdx: number;
  pending: Int16Array;
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
    readIdx: 0,
    pending: new Int16Array(0),
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
    this.voices[voice].keyOn = !!on;
  }
  enqueuePCM(voice: number, samples: Int16Array) {
    // Append to pending by allocating a new buffer (tests small sizes)
    const v = this.voices[voice];
    const unread = v.pending.length - v.readIdx;
    if (unread <= 0) {
      v.pending = samples.slice();
      v.readIdx = 0;
    } else {
      const tail = v.pending.subarray(v.readIdx);
      const merged = new Int16Array(tail.length + samples.length);
      merged.set(tail, 0);
      merged.set(samples, tail.length);
      v.pending = merged;
      v.readIdx = 0;
    }
  }

  mix(frames: number): Float32Array {
    const out = new Float32Array(frames * 2);
    for (let i = 0; i < frames; i++) {
      let accL = 0;
      let accR = 0;
      for (let vi = 0; vi < this.voices.length; vi++) {
        const v = this.voices[vi];
        if (!v.keyOn) continue;
        const sample = v.readIdx < v.pending.length ? v.pending[v.readIdx] : 0;
        if (v.readIdx < v.pending.length) v.readIdx++;
        const f = sample / 32768.0;
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
}
