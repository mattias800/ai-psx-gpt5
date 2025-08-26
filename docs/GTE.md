# Simplified GTE model

This project includes a minimal, test-oriented implementation of the PS1 GTE (Geometry Transformation Engine). It is intentionally simplified for clarity and to enable incremental, test-driven development.

Scope and goals
- Provide a consistent, easy-to-understand data/control register mapping
- Support a small but useful subset of GTE operations to unblock early 3D content
- Be deterministic and well covered by unit tests

What this is not
- A cycle-accurate GTE implementation
- A bit-for-bit accurate model of fixed-point formats, scale/exponent handling, or status flags

Register map (simplified)
Data registers (dr)
- dr[0..2]: Vx, Vy, Vz input vector
- dr[9..11]: IR1, IR2, IR3 (written by RTPS and MVMVA in this model)
- dr[16]: MAC0 (written by NCLIP)
- dr[23]: OTZ (written by AVSZ3/AVSZ4)
- dr[24]: SXY0 (packed: Y in bits 16..31, X in bits 0..15, each signed 16-bit)
- dr[25]: SXY1 (packed)
- dr[26..29]: SZ0..SZ3 (depth FIFO)
- dr[30]: SXY2 (packed)
- dr[31]: SZ (copy of the most recent depth from RTPS)

Control registers (cr)
- cr[0..8]: 3x3 rotation matrix (row-major)
- cr[9..11]: TRX, TRY, TRZ translation vector
- cr[12]: H (projection scale)
- cr[13]: OFX
- cr[14]: OFY
- cr[15]: FLAG (simplified):
  - bit0..2: IR1..IR3 saturated on the last GTE op
  - bit8: divide-by-zero encountered in RTPS on the last GTE op

FIFOs and update rules
- SXY FIFO: dr[24]=SXY0, dr[25]=SXY1, dr[30]=SXY2
  - On RTPS: SXY0 <= SXY1, SXY1 <= SXY2, SXY2 <= new
- SZ FIFO: dr[26]=SZ0, dr[27]=SZ1, dr[28]=SZ2, dr[29]=SZ3
  - On RTPS: SZ0 <= SZ1, SZ1 <= SZ2, SZ2 <= SZ3, SZ3 <= newRZ

Implemented operations (fn = instruction & 0x3f)
- RTPS (0x01): Perspective transform single vertex
  - Computes rx, ry, rz = R*V + TR
  - Writes IR1..IR3 with 16-bit signed saturation
  - Projects to screen using H, OFX, OFY and updates SXY/SZ FIFOs
  - Writes SZ copy to dr[31]
  - Sets FLAG bit8 on divide-by-zero; projection uses z=1 as a fallback
- MVMVA (0x02, simplified): Matrix*Vector + Translation
- RTPT (0x11, simplified): Project three vertices V0,V1,V2 from dr[0..2], dr[3..5], dr[6..8] using same math as RTPS; updates SXY/SZ FIFOs per vertex
  - Computes IR = R*V + TR with 16-bit signed saturation
  - Does not update SXY/SZ FIFOs
- NCLIP (0x06): Triangle area (signed*2) from SXY0/1/2
  - Writes MAC0 (dr[16])
- AVSZ3 (0x30): Average SZ1..SZ3 -> OTZ (dr[23])
- AVSZ4 (0x31): Average SZ0..SZ3 -> OTZ (dr[23])
- GPF (0x3c, simplified): Set RGB0 (dr[20]) from IR by mapping IR>>7 per channel and clamping to [0,255]
- GPL (0x3d, simplified): Accumulate into RGB0 (dr[20]) by adding IR>>7 per channel with clamp to [0,255]
- NCDS (0x21, simplified): per-channel lighting
  - Inputs: dr[0..2] = N (treated as a generic vector), cr[0],cr[4],cr[8] = per-channel gains (using the diagonal of R)
  - Behavior: IR1 = (N.x * cr[0]) >> 7, IR2 = (N.y * cr[4]) >> 7, IR3 = (N.z * cr[8]) >> 7 (with 16-bit signed saturation)
  - Use GPF afterwards to map IR to an RGB color in dr[20]
- NCDT (0x2A, simplified): triple per-channel lighting
  - Inputs: dr[0..2], dr[3..5], dr[6..8] are three N vectors; cr[0],cr[4],cr[8] are per-channel gains (using R diagonal)
  - Behavior: for each vector j in {0,1,2}, IR = N_j * gains; write color_j = (IR>>7) clamped into dr[20+j] as 0xRRGGBB
  - IR1..IR3 are left as the values from the last vector

Testing strategy
- Unit tests exist for:
  - RTPS projection and FIFOs
  - NCLIP area computation
  - AVSZ3/4 averaging (including SZ FIFO pipeline)
  - IR register writes and saturation behavior
  - Simplified FLAG semantics (IR saturation and divide-by-zero)
  - MVMVA with identity and scaling+translation cases

Known simplifications vs real hardware
- Fixed-point math, rounding, and scaling differ from hardware
- Saturation and FLAG handling are reduced to a small subset of bits
- Timing/pipeline/cycle accuracy are not modeled
- Register addresses do not strictly match the PS1 GTE specification

Extending the model
- Additional ops (e.g., lighting/shading) can be layered in with the same testing approach
- If closer accuracy is desired later, the current tests can be adapted or extended to verify refined behavior

