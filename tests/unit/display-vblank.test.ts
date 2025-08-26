import { describe, it, expect } from 'vitest';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';
import { DisplayController } from '../../packages/emulator-core/src/display';

describe('DisplayController VBlank timing', () => {
  it('raises VBLANK IRQ at periodic frame intervals', () => {
    const sch = new EventScheduler();
    const intc = new InterruptController();
    const disp = new DisplayController(sch, intc, { cyclesPerLine: 100, linesPerFrame: 5 });
    disp.start();

    // First VBlank at t=500
    expect(intc.status).toBe(0);
    sch.step(499);
    expect(intc.status).toBe(0);
    sch.step(1);
    expect((intc.status & (1<<IRQ.VBLANK)) !== 0).toBe(true);

    // Ack and step to next frame (another 500 cycles)
    intc.ackMask(1<<IRQ.VBLANK);
    expect((intc.status & (1<<IRQ.VBLANK))).toBe(0);
    sch.step(500);
    expect((intc.status & (1<<IRQ.VBLANK)) !== 0).toBe(true);
  });
});

