export class EventScheduler {
  private nowCycles = 0;
  // Min-heap of [when, id, cb]
  private q: Array<{ when: number; id: number; cb: () => void }> = [];
  private nextId = 1;

  get now(): number { return this.nowCycles; }

  schedule(cyclesFromNow: number, cb: () => void): number {
    const id = this.nextId++;
    const when = this.nowCycles + Math.max(0, cyclesFromNow | 0);
    this.q.push({ when, id, cb });
    this.bubbleUp(this.q.length - 1);
    return id;
  }

  cancel(id: number): void {
    const idx = this.q.findIndex(e => e.id === id);
    if (idx >= 0) {
      const last = this.q.pop()!;
      if (idx < this.q.length) {
        this.q[idx] = last;
        this.bubbleDown(idx);
      }
    }
  }

  step(cycles: number): void {
    const end = this.nowCycles + Math.max(0, cycles | 0);
    while (this.q.length && this.q[0].when <= end) {
      const evt = this.popMin();
      this.nowCycles = evt.when;
      evt.cb();
    }
    this.nowCycles = end;
  }

  private bubbleUp(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.q[p].when <= this.q[i].when) break;
      [this.q[p], this.q[i]] = [this.q[i], this.q[p]];
      i = p;
    }
  }
  private bubbleDown(i: number) {
    for (;;) {
      const l = i * 2 + 1, r = l + 1;
      let m = i;
      if (l < this.q.length && this.q[l].when < this.q[m].when) m = l;
      if (r < this.q.length && this.q[r].when < this.q[m].when) m = r;
      if (m === i) break;
      [this.q[m], this.q[i]] = [this.q[i], this.q[m]];
      i = m;
    }
  }
  private popMin() { const x = this.q[0]; const last = this.q.pop()!; if (this.q.length) { this.q[0] = last; this.bubbleDown(0); } return x; }
}

export enum IRQ {
  VBLANK = 0,
  GPU = 1,
  CDROM = 2,
  DMA = 3,
  TIMER0 = 4,
  TIMER1 = 5,
  TIMER2 = 6,
  PAD_MEMCARD = 7,
  SIO = 8,
  SPU = 9,
}

export class InterruptController {
  // IMASK/ISTAT bits
  private imask = 0;
  private istat = 0;
  raise(bit: IRQ) { this.istat |= (1 << bit); }
  ack(bit: IRQ) { this.istat &= ~(1 << bit); }
  setMask(mask: number) { this.imask = mask >>> 0; }
  get pending(): boolean { return (this.imask & this.istat) !== 0; }
  get mask(): number { return this.imask >>> 0; }
  get status(): number { return this.istat >>> 0; }
}

