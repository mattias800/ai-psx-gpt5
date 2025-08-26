import { EventScheduler } from './timing';

export class HWTimer {
  // Simplified PSX timer model
  count = 0;
  target = 0xffff;
  mode = 0; // bit flags placeholder
  irq = false;

  constructor(private sch: EventScheduler, private clockDiv: number = 1) {}

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
    }
    this.count = c;
  }
}

