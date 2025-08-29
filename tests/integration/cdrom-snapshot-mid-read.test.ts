import { describe, it, expect } from 'vitest';
import { PSXSystem } from '@ai-psx/core';

// Mid-read snapshot determinism: after restoring, subsequent bytes and timing match.

describe('CDROM mid-read snapshot determinism', () => {
  it('restores data FIFO and scheduler events to deliver identical bytes', () => {
    const psx = new PSXSystem();
    const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;

    // SETLOC LBA=3, SEEKL, wait, READN
    psx.as.write8(IDX, 0x00);
    psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x03);
    psx.as.write8(REG1, 0x19);
    psx.as.write8(REG1, 0x1b);
    psx.stepCycles(40000);
    psx.as.write8(REG1, 0x06);

    // Allow a sector to queue
    psx.stepCycles(14000);

    // Drain a small number of bytes
    const consumed = new Uint8Array(64);
    for (let i = 0; i < consumed.length; i++) consumed[i] = psx.as.read8(REG2) & 0xff;

    // Snapshot now (with partially drained FIFO and scheduled next reads)
    const snap = psx.serialize();

    // Step some time and collect 128 bytes as reference
    psx.stepCycles(36000);
    const ref = new Uint8Array(128);
    for (let i = 0; i < ref.length; i++) ref[i] = psx.as.read8(REG2) & 0xff;

    // Restore and repeat the same steps; the next 128 bytes should match
    psx.deserialize(snap);
    psx.stepCycles(36000);
    const out = new Uint8Array(128);
    for (let i = 0; i < out.length; i++) out[i] = psx.as.read8(REG2) & 0xff;

    for (let i = 0; i < ref.length; i++) expect(out[i]).toBe(ref[i]);
  });
});

