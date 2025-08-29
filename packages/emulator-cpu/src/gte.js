// Simplified GTE model used for tests
// Notes:
// - Register map (dr/cr) is a minimal subset sufficient for our tests
// - SXY FIFO: dr[24]=SXY0, dr[25]=SXY1, dr[30]=SXY2 (packed Y:16..31, X:0..15)
// - SZ FIFO:  dr[26]=SZ0, dr[27]=SZ1, dr[28]=SZ2, dr[29]=SZ3
// - OTZ:      dr[23]
// - MAC0:     dr[16]
// - FLAG:     cr[15] (simplified): bit0..2 IR1..IR3 saturated, bit8 divide-by-zero in RTPS
// - RTPS updates both FIFOs as: SXY0<=SXY1<=SXY2<=new, SZ0<=SZ1<=SZ2<=SZ3<=new
// - AVSZ3/AVSZ4 compute simple integer averages into OTZ
// - This is not a cycle-accurate GTE; saturations and precision are simplified
export class GTE {
    // Data and Control registers (simplified placeholders)
    dr = new Int32Array(32);
    cr = new Int32Array(32);
    // Suggested mapping used by our tests:
    // dr[0..2]: Vx,Vy,Vz input vector
    // cr[0..8]: 3x3 rotation matrix row-major
    // cr[9..11]: TRX, TRY, TRZ translations
    // cr[12]: H (projection scale)
    // cr[13]: OFX, cr[14]: OFY (screen offsets)
    // dr[30]: SXY2 packed (Y:16..31, X:0..15)
    // dr[31]: SZ (depth)
    // dr[24], dr[25]: SXY0, SXY1 packed
    // dr[16]: MAC0 (for NCLIP)
    // dr[26..29]: SZ0..SZ3 (depths for AVSZ)
    // dr[23]: OTZ (ordering table Z), result of AVSZ3/AVSZ4
    // dr[9..11]: IR1..IR3 (intermediate regs) written during RTPS in this simplified model
    mfc2(rd) { return this.dr[rd] | 0; }
    cfc2(rd) { return this.cr[rd] | 0; }
    mtc2(rd, val) { this.dr[rd] = val | 0; }
    ctc2(rd, val) { this.cr[rd] = val | 0; }
    // Minimal arithmetic ops: RTPS (fn=0x01), MVMVA (fn=0x02 simplified), NCLIP (fn=0x06)
    exec(instr) {
        const fn = instr & 0x3f;
        let flags = 0;
        const SAT_IR1 = 1 << 0, SAT_IR2 = 1 << 1, SAT_IR3 = 1 << 2, DIV_ZERO = 1 << 8;
        const clampIR = (v, which) => {
            if (v > 0x7fff) {
                flags |= (which === 1 ? SAT_IR1 : which === 2 ? SAT_IR2 : SAT_IR3);
                return 0x7fff;
            }
            if (v < -0x8000) {
                flags |= (which === 1 ? SAT_IR1 : which === 2 ? SAT_IR2 : SAT_IR3);
                return -0x8000;
            }
            return v | 0;
        };
        if (fn === 0x01) {
            // RTPS: perspective transform single vertex
            const vx = this.dr[0] | 0;
            const vy = this.dr[1] | 0;
            const vz = this.dr[2] | 0;
            const r = this.cr;
            const rx = (r[0] * vx + r[1] * vy + r[2] * vz + r[9]) | 0;
            const ry = (r[3] * vx + r[4] * vy + r[5] * vz + r[10]) | 0;
            const rz = (r[6] * vx + r[7] * vy + r[8] * vz + r[11]) | 0;
            const H = this.cr[12] | 0;
            const ofx = this.cr[13] | 0;
            const ofy = this.cr[14] | 0;
            // Avoid div by zero
            const z = rz === 0 ? 1 : rz;
            if (rz === 0) {
                flags |= DIV_ZERO;
            }
            const sx = ofx + Math.trunc(H * (rx / z));
            const sy = ofy + Math.trunc(H * (ry / z));
            const pack = ((sy & 0xffff) << 16) | (sx & 0xffff);
            // Write IR1..IR3 with saturation (simplified behavior)
            this.dr[9] = clampIR(rx, 1);
            this.dr[10] = clampIR(ry, 2);
            this.dr[11] = clampIR(rz, 3);
            // Update SXY FIFO: SXY0<=SXY1, SXY1<=SXY2, SXY2<=new
            this.dr[24] = this.dr[25] | 0;
            this.dr[25] = this.dr[30] | 0;
            this.dr[30] = pack | 0;
            // Update SZ FIFO: SZ0<=SZ1, SZ1<=SZ2, SZ2<=SZ3, SZ3<=new
            this.dr[26] = this.dr[27] | 0;
            this.dr[27] = this.dr[28] | 0;
            this.dr[28] = this.dr[29] | 0;
            this.dr[29] = rz | 0;
            // Keep convenience depth copy
            this.dr[31] = rz | 0;
        }
        else if (fn === 0x11) {
            // RTPT (simplified): project V0,V1,V2 from dr[0..2], dr[3..5], dr[6..8]
            const r = this.cr;
            const H = this.cr[12] | 0;
            const ofx = this.cr[13] | 0;
            const ofy = this.cr[14] | 0;
            const projOne = (vx, vy, vz) => {
                const rx = (r[0] * vx + r[1] * vy + r[2] * vz + r[9]) | 0;
                const ry = (r[3] * vx + r[4] * vy + r[5] * vz + r[10]) | 0;
                const rz = (r[6] * vx + r[7] * vy + r[8] * vz + r[11]) | 0;
                const z = rz === 0 ? 1 : rz;
                if (rz === 0)
                    flags |= DIV_ZERO;
                const sx = ofx + Math.trunc(H * (rx / z));
                const sy = ofy + Math.trunc(H * (ry / z));
                const pack = ((sy & 0xffff) << 16) | (sx & 0xffff);
                this.dr[9] = clampIR(rx, 1);
                this.dr[10] = clampIR(ry, 2);
                this.dr[11] = clampIR(rz, 3);
                // Update FIFOs as in RTPS
                this.dr[24] = this.dr[25] | 0;
                this.dr[25] = this.dr[30] | 0;
                this.dr[30] = pack | 0;
                this.dr[26] = this.dr[27] | 0;
                this.dr[27] = this.dr[28] | 0;
                this.dr[28] = this.dr[29] | 0;
                this.dr[29] = rz | 0;
                this.dr[31] = rz | 0;
            };
            projOne(this.dr[0] | 0, this.dr[1] | 0, this.dr[2] | 0);
            projOne(this.dr[3] | 0, this.dr[4] | 0, this.dr[5] | 0);
            projOne(this.dr[6] | 0, this.dr[7] | 0, this.dr[8] | 0);
        }
        else if (fn === 0x02) {
            // MVMVA (simplified): IR = R*V + TR using dr[0..2] and cr[0..8], cr[9..11]
            const vx = this.dr[0] | 0;
            const vy = this.dr[1] | 0;
            const vz = this.dr[2] | 0;
            const r = this.cr;
            const rx = (r[0] * vx + r[1] * vy + r[2] * vz + r[9]) | 0;
            const ry = (r[3] * vx + r[4] * vy + r[5] * vz + r[10]) | 0;
            const rz = (r[6] * vx + r[7] * vy + r[8] * vz + r[11]) | 0;
            this.dr[9] = clampIR(rx, 1);
            this.dr[10] = clampIR(ry, 2);
            this.dr[11] = clampIR(rz, 3);
            // Do not update SXY/SZ FIFOs in this simplified MVMVA
        }
        else if (fn === 0x06) {
            // NCLIP: area of triangle formed by SXY0,SXY1,SXY2
            const sxy0 = this.dr[24] >>> 0;
            const x0 = (sxy0 & 0xffff) << 16 >> 16;
            const y0 = (sxy0 >>> 16) << 16 >> 16;
            const sxy1 = this.dr[25] >>> 0;
            const x1 = (sxy1 & 0xffff) << 16 >> 16;
            const y1 = (sxy1 >>> 16) << 16 >> 16;
            const sxy2 = this.dr[30] >>> 0;
            const x2 = (sxy2 & 0xffff) << 16 >> 16;
            const y2 = (sxy2 >>> 16) << 16 >> 16;
            const area2 = (x0 * y1 + x1 * y2 + x2 * y0 - y0 * x1 - y1 * x2 - y2 * x0) | 0;
            this.dr[16] = area2 | 0; // MAC0
        }
        else if (fn === 0x30) {
            // AVSZ3: average of SZ1..SZ3 -> OTZ
            const sz1 = this.dr[27] | 0, sz2 = this.dr[28] | 0, sz3 = this.dr[29] | 0;
            const avg = Math.trunc((sz1 + sz2 + sz3) / 3);
            this.dr[23] = avg | 0; // OTZ
        }
        else if (fn === 0x31) {
            // AVSZ4: average of SZ0..SZ3 -> OTZ
            const sz0 = this.dr[26] | 0, sz1 = this.dr[27] | 0, sz2 = this.dr[28] | 0, sz3 = this.dr[29] | 0;
            const avg = Math.trunc((sz0 + sz1 + sz2 + sz3) / 4);
            this.dr[23] = avg | 0; // OTZ
        }
        else if (fn === 0x21) {
            // NCDS (simplified lighting): IRk = (Nk * Lk) >> 7 per channel with saturation
            // Inputs: dr[0..2]=N (normal or generic vector), cr[0..2]=L (light per-channel scale)
            const n0 = this.dr[0] | 0, n1 = this.dr[1] | 0, n2 = this.dr[2] | 0;
            const l0 = this.cr[0] | 0, l1 = this.cr[4] | 0, l2 = this.cr[8] | 0;
            // Use diagonal elements of R as per-channel light gains to avoid new CR storage
            // (matches tests that set cr[0],cr[4],cr[8] via CTC2)
            const ir1 = (n0 * l0) | 0;
            const ir2 = (n1 * l1) | 0;
            const ir3 = (n2 * l2) | 0;
            this.dr[9] = clampIR(ir1, 1);
            this.dr[10] = clampIR(ir2, 2);
            this.dr[11] = clampIR(ir3, 3);
        }
        else if (fn === 0x2a) {
            // NCDT (simplified triple lighting):
            // For three input vectors in dr[0..2], dr[3..5], dr[6..8], compute per-channel IR = N * L (using cr[0],cr[4],cr[8])
            // Then map to 0..255 via >>7 and write colors into dr[20], dr[21], dr[22]. IR registers are left as the last vector's IR.
            const gains = [this.cr[0] | 0, this.cr[4] | 0, this.cr[8] | 0];
            const packColorFromIR = (ir1, ir2, ir3) => {
                const clampU8 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
                const r = clampU8(ir1 >> 7);
                const g = clampU8(ir2 >> 7);
                const b = clampU8(ir3 >> 7);
                return ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
            };
            const compute = (ix) => {
                const n0 = this.dr[ix + 0] | 0;
                const n1 = this.dr[ix + 1] | 0;
                const n2 = this.dr[ix + 2] | 0;
                const ir1 = (n0 * gains[0]) | 0;
                const ir2 = (n1 * gains[1]) | 0;
                const ir3 = (n2 * gains[2]) | 0;
                // Saturate and update IR regs (for the last call these persist)
                this.dr[9] = clampIR(ir1, 1);
                this.dr[10] = clampIR(ir2, 2);
                this.dr[11] = clampIR(ir3, 3);
                return packColorFromIR(ir1, ir2, ir3);
            };
            this.dr[20] = compute(0) | 0;
            this.dr[21] = compute(3) | 0;
            this.dr[22] = compute(6) | 0;
        }
        else if (fn === 0x3c) {
            // GPF (simplified): color = clamp_u8(IR>>7) per channel, write RGB0 (dr[20])
            const clampU8 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
            const r = clampU8(this.dr[9] >> 7);
            const g = clampU8(this.dr[10] >> 7);
            const b = clampU8(this.dr[11] >> 7);
            this.dr[20] = ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
        }
        else if (fn === 0x3d) {
            // GPL (simplified): color += (IR>>7) per channel with clamp, write RGB0 (dr[20])
            const base = this.dr[20] >>> 0;
            const br = (base >>> 16) & 0xff, bg = (base >>> 8) & 0xff, bb = base & 0xff;
            const addR = this.dr[9] >> 7;
            const addG = this.dr[10] >> 7;
            const addB = this.dr[11] >> 7;
            const clampU8 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
            const r = clampU8(br + addR);
            const g = clampU8(bg + addG);
            const b = clampU8(bb + addB);
            this.dr[20] = ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
        }
        else {
            // Unimplemented op
        }
        // Publish simplified flags to cr[15]; allow user to clear via CTC2
        this.cr[15] = flags | 0;
    }
}
//# sourceMappingURL=gte.js.map