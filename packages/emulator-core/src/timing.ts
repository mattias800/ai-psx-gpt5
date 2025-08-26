export class EventScheduler {
  private nowCycles = 0;
  // Min-heap of [when, id, cb? , key?, payload?]
  private q: Array<{ when: number; id: number; cb?: () => void; key?: string; payload?: unknown } > = [];
  private nextId = 1;
  private handlers = new Map<string, (payload: unknown) => void>();

  get now(): number { return this.nowCycles; }

  registerHandler(key: string, handler: (payload: unknown) => void): void {
    this.handlers.set(key, handler);
  }

  schedule(cyclesFromNow: number, cb: () => void): number {
    const id = this.nextId++;
    const when = this.nowCycles + Math.max(0, cyclesFromNow | 0);
    this.q.push({ when, id, cb });
    this.bubbleUp(this.q.length - 1);
    return id;
  }

  scheduleKey(cyclesFromNow: number, key: string, payload?: unknown): number {
    const id = this.nextId++;
    const when = this.nowCycles + Math.max(0, cyclesFromNow | 0);
    this.q.push({ when, id, key, payload });
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
      if (evt.cb) {
        evt.cb();
      } else if (evt.key) {
        const h = this.handlers.get(evt.key);
        if (h) h(evt.payload);
      }
    }
    this.nowCycles = end;
  }

  serialize(): any {
    // Only serialize key-based events to ensure portability
    const queue = this.q
      .filter(e => e.key)
      .map(e => ({ when: e.when, id: e.id, key: e.key!, payload: e.payload ?? null }));
    return { now: this.nowCycles, nextId: this.nextId, queue };
  }

  deserialize(snap: any): void {
    this.nowCycles = snap.now >>> 0;
    this.nextId = snap.nextId >>> 0;
    this.q.length = 0;
    for (const e of snap.queue as Array<{ when: number; id: number; key: string; payload: unknown }>) {
      this.q.push({ when: e.when >>> 0, id: e.id >>> 0, key: e.key, payload: e.payload });
    }
    // heapify
    for (let i = (this.q.length >> 1) - 1; i >= 0; i--) this.bubbleDown(i);
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

