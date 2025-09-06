import { describe, it, expect } from 'vitest';
import { AddressSpace, IOHub } from '../../packages/emulator-core/src/address-space';
import { EventScheduler, InterruptController, IRQ } from '../../packages/emulator-core/src/timing';
import { DisplayController } from '../../packages/emulator-core/src/display';

const I_STAT = 0x1f801070 >>> 0;
const I_MASK = 0x1f801074 >>> 0;

interface PollResult {
  targetVBlank: number;
  detectedAt: number;
}

const runPollingOnce = (sch: EventScheduler, as: AddressSpace, disp: DisplayController, stepCycles: number): PollResult => {
  const target = disp.getNextVBlankCycle();
  // Poll until VBlank pending bit is observed, ack it, and validate clear
  // Simulate BIOS read/ack loop: read I_STAT, optionally ack, then step a bit
  const mask = 1 << IRQ.VBLANK;
  for (let i = 0; i < 1_000_000; i++) {
    const stat = as.read32(I_STAT) >>> 0;
    const masked = as.read32(I_MASK) >>> 0;
    // Mask should remain set throughout
    expect((masked & mask) !== 0).toBe(true);
    if ((stat & mask) !== 0) {
      const detected = sch.now >>> 0;
      // Ack via BIOS-style write to I_STAT
      as.write32(I_STAT, mask >>> 0);
      const after = as.read32(I_STAT) >>> 0;
      expect((after & mask) === 0).toBe(true);
      // Detection should be at or after the scheduled VBlank, within the polling step granularity
      expect(detected).toBeGreaterThanOrEqual(target);
      expect(detected).toBeLessThan(target + stepCycles + 1);
      return { targetVBlank: target, detectedAt: detected };
    }
    sch.step(stepCycles);
  }
  throw new Error('Polling did not observe VBlank within expected time');
};

describe('INTC BIOS-style VBlank polling/ack integration', () => {
  const linesPerFrame = 262; // default NTSC-ish lines; DisplayController default as well
  const stepCycles = 128; // emulate a tight BIOS polling cadence

  const setup = (cyclesPerLine: number) => {
    const sch = new EventScheduler();
    const intc = new InterruptController();
    const disp = new DisplayController(sch, intc, { cyclesPerLine, linesPerFrame });
    const as = new AddressSpace();
    const io = new IOHub({ intc: {
      readStatus: () => intc.status,
      readMask: () => intc.mask,
      writeMask: (v: number) => intc.setMask(v >>> 0),
      ackMask: (v: number) => intc.ackMask(v >>> 0),
    } });
    as.addRegion(io);
    // Enable I_MASK VBlank bit as BIOS would
    as.write32(I_MASK, (1 << IRQ.VBLANK) >>> 0);
    // Start display timing
    disp.start();
    return { sch, intc, disp, as };
  };

  it.each([
    { cpl: 2146 },
    { cpl: 2147 },
  ])('poll/ack loop detects and clears VBlank correctly (cyclesPerLine=$cpl)', ({ cpl }) => {
    const { sch, disp, as } = setup(cpl);

    // First frame VBlank
    const r1 = runPollingOnce(sch, as, disp, stepCycles);
    expect(r1.detectedAt).toBeGreaterThanOrEqual(r1.targetVBlank);

    // Advance toward the next frame and repeat
    // Step just short of the next frame to keep polling cadence the same
    const frame = cpl * linesPerFrame;
    // We already are at r1.detectedAt (~= target), step the remainder of the frame minus a small delta
    const delta = Math.max(0, frame - stepCycles * 2);
    sch.step(delta);

    const r2 = runPollingOnce(sch, as, disp, stepCycles);
    expect(r2.detectedAt - r1.detectedAt).toBeGreaterThan(frame - stepCycles * 2 - 2);
    expect(r2.detectedAt - r1.detectedAt).toBeLessThan(frame + stepCycles * 2 + 2);
  });
});

