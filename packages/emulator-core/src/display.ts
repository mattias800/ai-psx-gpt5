import { EventScheduler, InterruptController, IRQ } from './timing.js';

export interface DisplayConfig {
  cyclesPerLine: number;
  linesPerFrame: number;
}

export class DisplayController {
  private cfg: DisplayConfig;
  private started = false;
  private nextVBlankAt = 0;

  constructor(private sch: EventScheduler, private intc: InterruptController, cfg?: Partial<DisplayConfig>) {
    this.cfg = {
      cyclesPerLine: cfg?.cyclesPerLine ?? 1000,
      linesPerFrame: cfg?.linesPerFrame ?? 262,
    };
  }

  start() {
    if (this.started) return;
    this.started = true;
    // Register handler and schedule first frame vblank
    this.sch.registerHandler('display.vblank', () => this.onVBlank());
    const frame = this.frameCycles();
    this.nextVBlankAt = this.sch['now'] + frame;
    this.sch.scheduleKey(frame, 'display.vblank');
  }

  private onVBlank() {
    // Raise VBLANK IRQ
    this.intc.raise(IRQ.VBLANK);
    // Schedule next frame
    const frame = this.frameCycles();
    this.nextVBlankAt = this.sch['now'] + frame;
    this.sch.scheduleKey(frame, 'display.vblank');
  }

  private frameCycles(): number { return this.cfg.cyclesPerLine * this.cfg.linesPerFrame; }

  getNextVBlankCycle(): number { return this.nextVBlankAt >>> 0; }
}

