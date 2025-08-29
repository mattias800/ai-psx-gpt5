# CDROM subsystem

This document summarizes the CDROM implementation in ai-psx-gpt5: MMIO layout, status/IRQ semantics, supported commands, timing, audio, and host integration.

Status: deterministic, snapshot-friendly, with synthetic and disc-backed sector sources, XA decode routed to SPU. The implementation targets correctness for emulator integration and tests; it does not yet fully replicate all hardware quirks.

MMIO overview (0x1f801800..0x1f801803)
- Index/Status (addr+0)
  - Write: select index 0..3
  - Read: returns computed status byte
- REG1 (addr+1)
  - Index 0 read: pops from response FIFO
  - Index 0 write: issues a CDROM command (one byte)
  - Index 1 read: returns computed status (read-only)
- REG2 (addr+2)
  - Index 0 read: pops from data FIFO
  - Index 0 write: pushes a command parameter byte
- REG3 (addr+3)
  - Index 1 read: returns IRQ latch flags (bits 0..4)
  - Index 1 write: acknowledge mask to clear IRQ latch bits

Computed status bits (read via addr+0 or index=1 at addr+1)
- 0x01: busy (seek or reading)
- 0x02: ready (always set)
- 0x04: parameter FIFO not empty
- 0x08: response FIFO not empty
- 0x10: data FIFO not empty
- 0x20: reading active
- 0x40: error (set when INT5 is latched; cleared on INT5 ack)
- 0x80: shell/lid open

Interrupt latch bits (read via index=1 at addr+3)
- Bit 1 (0x02): INT1 (seek complete)
- Bit 2 (0x04): INT2 (data ready)
- Bit 3 (0x08): INT3 (command complete)
- Bit 4 (0x10): INT4 (read ended via PAUSE/STOP)
- Bit 0 (0x01): INT5 (error)

Acknowledge semantics
- Write an acknowledge mask to index=1 at addr+3 to clear latch bits.
- Acknowledging INT5 (mask bit 0x01) clears the status error bit (0x40).

Supported commands (subset)
- 0x01 GETSTAT: push one status byte to response FIFO.
- 0x0B SETFILTER (2 params: file,channel): set XA file/channel filter.
- 0x0D READS: start reading raw 2352-byte sectors.
- 0x0E SETMODE (1 param: mode): set mode flags (see below).
- 0x0F MUTE: mute XA routing to SPU.
- 0x10 DEMUTE: unmute XA routing to SPU.
- 0x15 GETQ: push position report (status + 9 bytes: mm,ss,ff, track, index, control, pad,pad,pad). Uses TOC if attached. When TOC is present, index=0 for the 150-sector pregap immediately before each track start, otherwise index=1.
- 0x19 SETLOC (mm,ss,ff): set target LBA.
- 0x1A GETID: push status + 8 ID bytes ("AI-PSX\0\0").
- 0x1B SEEKL: schedule seek to target LBA (INT1 on completion); deterministic timing.
- 0x08 PAUSE: stop reading (INT4 if it was active).
- 0x1E STOP: stop reading and flush data FIFO (INT4 if it was active).

Mode bits (SETMODE)
- 0x01: when reading raw2352, deliver 2336 bytes (skip sync+header; start at offset 16).
- 0x10: when reading 2048-byte user data, also deliver 8-byte subheader prefix.
- 0x20: XA enabled (allow XA audio decode when submode audio flag is set).
- 0x40: filter enabled (drop XA sectors/data whose file/channel do not match SETFILTER).
- 0x80: double-speed (halve the deterministic read interval).

Reading and timing
- Deterministic event scheduler drives sector delivery. Each read tick enqueues one sector to the data FIFO and latches INT2.
- READN enqueues 2048-byte user data; READS enqueues raw 2352 bytes (or 2336 bytes when bit 0x01 is set).
- PAUSE/STOP stop the reading stream; STOP also flushes the data FIFO.

XA audio
- When XA mode is enabled (bit 0x20) and a Mode 2 sector with the audio submode bit set arrives, the XA decoder processes 2048-byte user data as 16-byte ADPCM frames.
- Stereo: subheader coding info bit0 toggles stereo; even frames -> left, odd frames -> right. Independent ADPCM states per side.
- Sample rate hint: coding info bit2 selects 37.8 kHz; otherwise 18.9 kHz. Pitch is applied via SPU voice pitch (fixed-point).
- Routing: decoded PCM is streamed into SPU voices (23=left, 22=right) and keyed on. MUTE/DEMUTE gates this routing without altering determinism.
- Filtering: when filter is enabled (mode 0x40) and SETFILTER is set, sectors whose subheader file/channel do not match are dropped from both the data FIFO and the XA routing.

Disc, TOC, shell
- discPresent flag controls whether a logical disc is present. When false:
  - GETQ latches INT5 (error) and returns zero data; status error bit (0x40) is set.
  - READN/READS immediately latch INT5 and do not start reading.
  - If disc is removed mid-read, reading stops and INT5 is latched.
- Shell/lid open sets status bit 0x80. If opened mid-read, reading stops and INT5 is latched.
- Optional TOC (table of contents) can be attached. GETQ uses TOC to set track and control bytes (default: track=1, control=0x04 when no TOC).

Host integration (PSXSystem)
- attachDisc(disc: DiscSource)
- attachDiscTOC(toc: DiscTOC)
- setDiscPresent(present: boolean)
- openCdLid(open: boolean)

DiscSource interface
- readSector2352(lba: number): Uint8Array — return a raw 2352-byte sector (Mode 2 recommended, with subheader at 16..23). The emulator also synthesizes sectors when no DiscSource is attached.

Examples

Write SETMODE for XA + filter + double-speed:
```ts path=null start=null
const IDX = 0x1f801800, REG1 = 0x1f801801, REG2 = 0x1f801802;
as.write8(IDX, 0x00);
as.write8(REG2, 0xE0); // 0x20 (XA) | 0x40 (filter) | 0x80 (2x)
as.write8(REG1, 0x0E); // SETMODE
```

Issue READN after SETLOC/SEEKL:
```ts path=null start=null
// mm=0, ss=0, ff=10
a s.write8(REG2, 0x00);
as.write8(REG2, 0x00);
as.write8(REG2, 0x0a);
as.write8(REG1, 0x19); // SETLOC
as.write8(REG1, 0x1b); // SEEKL
sch.step(40000);
as.write8(REG1, 0x06); // READN
```

Read GETQ and interpret fields:
```ts path=null start=null
as.write8(IDX, 0x00);
as.write8(REG1, 0x15); // GETQ
const status = as.read8(REG1);
const mm = as.read8(REG1), ss = as.read8(REG1), ff = as.read8(REG1);
const track = as.read8(REG1), index = as.read8(REG1), control = as.read8(REG1);
```

