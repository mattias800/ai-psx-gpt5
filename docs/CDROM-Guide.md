# CDROM developer guide

This guide shows common command flows and patterns for working with the CDROM in ai-psx-gpt5: reading data, using raw sectors, XA audio playback, filtering, speed control, and handling disc/shell states.

Quick start
- Instantiate PSXSystem
- Optionally attach a DiscSource (2352-byte sectors) and/or a TOC
- Use SETLOC → SEEKL → READN/READS
- Poll FIFOs and ack IRQs through the index ports as needed

Example: Read user (2048-byte) sectors
```ts path=null start=null
import { PSXSystem } from '@ai-psx/core';

const psx = new PSXSystem();
const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802, REG3 = 0x1f801803;

// Set target to mm:ss:ff = 00:02:00
psx.as.write8(IDX, 0x00);
psx.as.write8(REG2, 0x00);
psx.as.write8(REG2, 0x02);
psx.as.write8(REG2, 0x00);
psx.as.write8(REG1, 0x19);      // SETLOC
psx.as.write8(REG1, 0x1b);      // SEEKL
psx.stepCycles(40000);          // wait deterministically for seek

// Begin 2048-byte user reads
psx.as.write8(REG1, 0x06);      // READN
psx.stepCycles(13000);          // first sector arrives

// Drain some data bytes
const bytes: number[] = [];
for (let i = 0; i < 64; i++) bytes.push(psx.as.read8(REG2) & 0xff);

// Ack CDROM interrupt in I_STAT if needed
psx.as.write32(0x1f801070, 1 << 3);
```

Example: Read raw 2352 bytes (with optional 2336 slice and subheader)
```ts path=null start=null
// Enable 2336-byte slice (bit 0x01) and subheader for READN (bit 0x10)
psx.as.write8(IDX, 0x00);
psx.as.write8(REG2, 0x01);      // set bit0 for 2336 slice on raw
psx.as.write8(REG1, 0x0e);      // SETMODE

// Locate and start raw reads
psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02); psx.as.write8(REG2, 0x00);
psx.as.write8(REG1, 0x19);      // SETLOC
psx.as.write8(REG1, 0x1b);      // SEEKL
psx.stepCycles(40000);
psx.as.write8(REG1, 0x0d);      // READS (raw)
psx.stepCycles(13000);

// Drain raw bytes from data FIFO
const b0 = psx.as.read8(REG2) & 0xff;
```

Example: XA audio playback (mono/stereo) with MUTE/DEMUTE
```ts path=null start=null
// Ensure a DiscSource is attached that marks Mode 2 Form 2 XA audio (submode bit 0x20)
// Enable XA (mode bit 0x20)
psx.as.write8(IDX, 0x00);
psx.as.write8(REG2, 0x20);      // XA enable
psx.as.write8(REG1, 0x0e);      // SETMODE

// Optional MUTE before playback to prime the pipeline silently
psx.as.write8(REG1, 0x0f);      // MUTE

// Seek and read user data (XA decoded from 2048 user bytes)
psx.as.write8(REG2, 0x00); psx.as.write8(REG2, 0x02); psx.as.write8(REG2, 0x00);
psx.as.write8(REG1, 0x19);      // SETLOC
psx.as.write8(REG1, 0x1b);      // SEEKL
psx.stepCycles(40000);
psx.as.write8(REG1, 0x06);      // READN
psx.stepCycles(15000);

// Mix a chunk and check it is silent due to MUTE
const mixedMuted = (psx as any).spu.mix(128) as Float32Array;

// DEMUTE and allow another sector to decode
psx.as.write8(REG1, 0x10);      // DEMUTE
psx.stepCycles(15000);
const mixedOn = (psx as any).spu.mix(128) as Float32Array;
```

Filtering XA by file/channel
- Set mode bit 0x40 to enable filter; then call SETFILTER(file, channel)
- When filtering is enabled, XA sectors that do not match are dropped from data FIFO and not routed to SPU
```ts path=null start=null
// Enable XA + filter
psx.as.write8(IDX, 0x00);
psx.as.write8(REG2, 0x60);      // 0x20 (XA) | 0x40 (filter)
psx.as.write8(REG1, 0x0e);      // SETMODE
// Set target file/channel
psx.as.write8(REG2, 0x11);
psx.as.write8(REG2, 0x22);
psx.as.write8(REG1, 0x0b);      // SETFILTER
```

Speed control (2x)
- Set mode bit 0x80 to halve the deterministic sector interval
```ts path=null start=null
psx.as.write8(IDX, 0x00);
psx.as.write8(REG2, 0x80);
psx.as.write8(REG1, 0x0e);      // SETMODE -> 2x speed
```

Position, track/control info (GETQ)
- GETQ returns status + 9 bytes: mm,ss,ff, track, index, control, pad,pad,pad
- With a TOC attached, index=0 for 150 sectors before each track start (pregap), otherwise 1
```ts path=null start=null
psx.as.write8(IDX, 0x00);
psx.as.write8(REG1, 0x15);      // GETQ
const status = psx.as.read8(REG1) & 0xff;
const mm = psx.as.read8(REG1) & 0xff;
const ss = psx.as.read8(REG1) & 0xff;
const ff = psx.as.read8(REG1) & 0xff;
const track = psx.as.read8(REG1) & 0xff;
const index = psx.as.read8(REG1) & 0xff;
const control = psx.as.read8(REG1) & 0xff;
```

Lid open / disc present
- openCdLid(true) sets status bit 0x80, stops reading, and latches INT5 (error)
- setDiscPresent(false) also stops reading and latches INT5
- Acknowledge INT5 via index=1 at REG3 writing 0x01; this also clears status error bit 0x40
```ts path=null start=null
psx.openCdLid(true);
// Read flags on index=1, REG3
psx.as.write8(IDX, 0x01);
const flags = psx.as.read8(0x1f801803) & 0xff; // should include 0x01 (INT5)
// Ack INT5
psx.as.write8(0x1f801803, 0x01);
```

Response FIFO hygiene
- Many commands push a status byte (and possibly more bytes) to the response FIFO
- Before issuing a new command that you want to read a fresh response for, it’s often helpful to drain any leftover response bytes
```ts path=null start=null
// Drain response FIFO
psx.as.write8(IDX, 0x01);
for (let i = 0; i < 16; i++) {
  const st = psx.as.read8(REG1) & 0xff;
  if ((st & 0x08) === 0) break; // no response data
  psx.as.write8(IDX, 0x00);
  void psx.as.read8(REG1);
  psx.as.write8(IDX, 0x01);
}
```

Snapshot determinism tips
- The CDROM state serializes FIFOs, IRQ latch bits, mode, reading state, current/target LBA, XA mute/filter settings, disc presence, and TOC
- Use the project’s EventScheduler serialization to restore determinism across snapshots mid-read

