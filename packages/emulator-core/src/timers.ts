import { EventScheduler } from './timing';

export class HWTimer {
  // Simplified PSX timer model
  count = 0;
  target = 0xffff;
  mode = 0; // bit flags placeholder
  irq = false;

  constructor(private sch: EventScheduler, private clockDiv: number = 1, private onIrq?: () => void) {}

  writeCount(v: number) { this.count = v & 0xffff; }
  writeTarget(v: number) { this.target = v & 0xffff; }
  writeMode(v: number) { this.mode = v >>> 0; }
  readCount(): number { return this.count & 0xffff; }
  readTarget(): number { return this.target & 0xffff; }
  readMode(): number { return this.mode >>> 0; }

  tick(cycles: number) {
    const inc = Math.floor(cycles / this.clockDiv);
    const before = this.count;
    let c = (before + inc) & 0xffff;
    if (before <= this.target && c > this.target) {
      this.irq = true;
      if (this.onIrq) this.onIrq();
    }
    this.count = c;
  }

  serialize(): any { return { count: this.count & 0xffff, target: this.target & 0xffff, mode: this.mode>>>0, irq: !!this.irq, clockDiv: this.clockDiv|0 }; }
  deserialize(s: any): void { this.count = (s.count|0) & 0xffff; this.target = (s.target|0) & 0xffff; this.mode = s.mode>>>0; this.irq = !!s.irq; /* clockDiv immutable */ }
}

