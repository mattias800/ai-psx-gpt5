export class GPU {
    // 1MB VRAM: 1024x512 16bpp
    vram = new Uint16Array(1024 * 512);
    // Status register (power-on default)
    // Many references report GPUSTAT initializes to 0x1c000000 on PS1 hardware.
    // Use that canonical value to better match BIOS expectations.
    status = 0x1c000000;
    // GP0 command decoding state
    inCmd = 0; // current GP0 command opcode (low 8 bits)
    parmWordsNeeded = 0; // number of parameter words remaining before payload
    parms = []; // collected parameter words
    imageWordsRemaining = 0; // words remaining for image load/store
    imageStoreQueue = []; // queue for GPUREAD on image store
    // Drawing state (simplified)
    clipLeft = 0;
    clipTop = 0;
    clipRight = 1023;
    clipBottom = 511;
    drawOffX = 0;
    drawOffY = 0;
    texBaseX = 0;
    texBaseY = 0;
    texAddrWrap = false; // false = clamp, true = wrap
    texW = 256;
    texH = 256;
    writeGP0(val) {
        val >>>= 0;
        if (this.inCmd === 0) {
            // Start of a new command (opcode in high 8 bits)
            this.inCmd = (val >>> 24) & 0xff;
            this.parms.length = 0;
            switch (this.inCmd) {
                case 0x00: // NOP
                    this.inCmd = 0;
                    break;
                case 0x01: // Clear cache (ignored)
                    this.inCmd = 0;
                    break;
                case 0xa0: // Image Load (CPU -> VRAM)
                    this.parmWordsNeeded = 2; // xy, size
                    break;
                case 0xc0: // Image Store (VRAM -> CPU)
                    this.parmWordsNeeded = 2; // xy, size
                    break;
                case 0x64: // Rectangle (variable) filled, opaque
                    this.parmWordsNeeded = 2; // xy, size (color was the command word)
                    this.parms.push(val & 0x00ffffff); // store color as parms[0]
                    break;
                case 0x20: // Triangle (monochrome, opaque) - simplified
                    this.parmWordsNeeded = 3; // xy1, xy2, xy3 (color was the command word)
                    this.parms.push(val & 0x00ffffff); // store color as parms[0]
                    break;
                case 0x30: // Triangle (Gouraud shaded, opaque) - simplified
                    this.parmWordsNeeded = 5; // xy1, color2, xy2, color3, xy3 (color1 was the command word)
                    this.parms.push(val & 0x00ffffff);
                    break;
                case 0x24: // Triangle (textured, opaque, simple 16bpp)
                    this.parmWordsNeeded = 6; // xy1, uv1, xy2, uv2, xy3, uv3 (color in cmd)
                    this.parms.push(val & 0x00ffffff);
                    break;
                case 0x34: // Triangle (textured + Gouraud, opaque) - simplified
                    this.parmWordsNeeded = 8; // xy1, uv1, color2, xy2, uv2, color3, xy3, uv3 (color1 in cmd)
                    this.parms.push(val & 0x00ffffff);
                    break;
                case 0xe1: // Set texture base (xy follows)
                    this.parmWordsNeeded = 1;
                    break;
                case 0xe3: // Set draw area top-left (xy follows)
                    this.parmWordsNeeded = 1;
                    break;
                case 0xe4: // Set draw area bottom-right (xy follows)
                    this.parmWordsNeeded = 1;
                    break;
                case 0xe5: // Set drawing offset (xy follows)
                    this.parmWordsNeeded = 1;
                    break;
                case 0xe6: // Set texture addressing mode and size (conf follows)
                    this.parmWordsNeeded = 1;
                    break;
                default:
                    // Unimplemented GP0 command; ignore for now
                    this.inCmd = 0;
                    break;
            }
            return;
        }
        // Continuation: parameters or payload
        if (this.parmWordsNeeded > 0) {
            this.parms.push(val);
            this.parmWordsNeeded--;
            if (this.parmWordsNeeded === 0) {
                if (this.inCmd === 0xa0) {
                    const { w, h } = this.decodeSize(this.parms[1]);
                    this.imageWordsRemaining = Math.ceil((w * h) / 2);
                }
                else if (this.inCmd === 0xc0) {
                    // Prepare store queue from VRAM
                    const { x, y } = this.decodeXY(this.parms[0]);
                    const { w, h } = this.decodeSize(this.parms[1]);
                    this.imageStoreQueue = this.readRectToWords(x, y, w, h);
                    this.inCmd = 0; // No payload for store; GPUREAD will fetch
                }
                else if (this.inCmd === 0x64) {
                    const color = this.parms[0] >>> 0; // color from first word's low 24 bits
                    const xy = this.parms[1] >>> 0;
                    const size = this.parms[2] >>> 0;
                    const { x, y } = this.decodeXY(xy);
                    const { w, h } = this.decodeSize(size);
                    this.fillRect(x, y, w, h, color);
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0x20) {
                    const color = this.parms[0] >>> 0;
                    const xy1 = this.parms[1] >>> 0;
                    const xy2 = this.parms[2] >>> 0;
                    const xy3 = this.parms[3] >>> 0;
                    const p1 = this.decodeXY(xy1);
                    const p2 = this.decodeXY(xy2);
                    const p3 = this.decodeXY(xy3);
                    this.fillTri(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, color);
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0x30) {
                    const c1 = this.parms[0] >>> 0;
                    const xy1 = this.parms[1] >>> 0;
                    const c2 = this.parms[2] >>> 0;
                    const xy2 = this.parms[3] >>> 0;
                    const c3 = this.parms[4] >>> 0;
                    const xy3 = this.parms[5] >>> 0;
                    const p1 = this.decodeXY(xy1);
                    const p2 = this.decodeXY(xy2);
                    const p3 = this.decodeXY(xy3);
                    this.fillTriGouraud(p1.x, p1.y, c1, p2.x, p2.y, c2, p3.x, p3.y, c3);
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0x24) {
                    const _col = this.parms[0] >>> 0;
                    const xy1 = this.parms[1] >>> 0;
                    const uv1 = this.parms[2] >>> 0;
                    const xy2 = this.parms[3] >>> 0;
                    const uv2 = this.parms[4] >>> 0;
                    const xy3 = this.parms[5] >>> 0;
                    const uv3 = this.parms[6] >>> 0;
                    const p1 = this.decodeXY(xy1);
                    const p2 = this.decodeXY(xy2);
                    const p3 = this.decodeXY(xy3);
                    const u1 = uv1 & 0xff, v1 = (uv1 >>> 8) & 0xff;
                    const u2 = uv2 & 0xff, v2 = (uv2 >>> 8) & 0xff;
                    const u3 = uv3 & 0xff, v3 = (uv3 >>> 8) & 0xff;
                    this.fillTriTextured(p1.x, p1.y, u1, v1, p2.x, p2.y, u2, v2, p3.x, p3.y, u3, v3, _col);
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0x34) {
                    const c1 = this.parms[0] >>> 0;
                    const xy1 = this.parms[1] >>> 0;
                    const uv1 = this.parms[2] >>> 0;
                    const c2 = this.parms[3] >>> 0;
                    const xy2 = this.parms[4] >>> 0;
                    const uv2 = this.parms[5] >>> 0;
                    const c3 = this.parms[6] >>> 0;
                    const xy3 = this.parms[7] >>> 0;
                    const uv3 = this.parms[8] >>> 0;
                    const p1 = this.decodeXY(xy1), p2 = this.decodeXY(xy2), p3 = this.decodeXY(xy3);
                    const u1 = uv1 & 0xff, v1 = (uv1 >>> 8) & 0xff;
                    const u2 = uv2 & 0xff, v2 = (uv2 >>> 8) & 0xff;
                    const u3 = uv3 & 0xff, v3 = (uv3 >>> 8) & 0xff;
                    this.fillTriTexturedGouraud(p1.x, p1.y, u1, v1, c1, p2.x, p2.y, u2, v2, c2, p3.x, p3.y, u3, v3, c3);
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0xe1) {
                    const xy = this.parms[0] >>> 0;
                    const { x, y } = this.decodeXY(xy);
                    this.texBaseX = x;
                    this.texBaseY = y;
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0xe3) {
                    const xy = this.parms[0] >>> 0;
                    const { x, y } = this.decodeXY(xy);
                    this.clipLeft = x;
                    this.clipTop = y;
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0xe4) {
                    const xy = this.parms[0] >>> 0;
                    const { x, y } = this.decodeXY(xy);
                    this.clipRight = x;
                    this.clipBottom = y;
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0xe5) {
                    const xy = this.parms[0] >>> 0;
                    const { x, y } = this.decodeXY(xy);
                    this.drawOffX = x | 0;
                    this.drawOffY = y | 0;
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
                else if (this.inCmd === 0xe6) {
                    const conf = this.parms[0] >>> 0;
                    this.texAddrWrap = (conf & 0x1) !== 0;
                    this.texW = (((conf >>> 8) & 0xff) + 1) | 0;
                    this.texH = (((conf >>> 16) & 0xff) + 1) | 0;
                    this.inCmd = 0;
                    this.parms.length = 0;
                }
            }
            return;
        }
        // Payload for Image Load
        if (this.inCmd === 0xa0 && this.imageWordsRemaining > 0) {
            this.writeImageWord(val);
            this.imageWordsRemaining--;
            if (this.imageWordsRemaining === 0) {
                this.inCmd = 0;
                this.parms.length = 0;
            }
            return;
        }
        // Any other case: ignore and reset
        this.inCmd = 0;
        this.parms.length = 0;
    }
    writeGP1(val) {
        val >>>= 0;
        const op = (val >>> 24) & 0xff;
        switch (op) {
            case 0x00: // Reset GPU
                this.reset();
                break;
            case 0x04: { // DMA direction
                const dir = val & 0x3;
                this.status = (this.status & ~(0x3 << 29)) | ((dir & 0x3) << 29);
                break;
            }
            default:
                // ignore for now
                break;
        }
    }
    readGP0() {
        // Used by Image Store (VRAM->CPU)
        if (this.imageStoreQueue.length > 0) {
            return this.imageStoreQueue.shift() >>> 0;
        }
        return 0 >>> 0;
    }
    readGP1() { return this.status >>> 0; }
    clearVRAM(color = 0) {
        this.vram.fill(color & 0xffff);
    }
    reset() {
        this.status = 0x1c000000; // Use same value as power-on default
        this.inCmd = 0;
        this.parms.length = 0;
        this.parmWordsNeeded = 0;
        this.imageWordsRemaining = 0;
        this.imageStoreQueue.length = 0;
    }
    decodeXY(word) {
        const x = word & 0xffff; // lower 16 used: actually 10 bits
        const y = (word >>> 16) & 0xffff;
        return { x: x & 0x3ff, y: y & 0x1ff };
    }
    decodeSize(word) {
        const w = word & 0xffff; // lower 16: actually 10 bits
        const h = (word >>> 16) & 0xffff;
        return { w: (w & 0x3ff) || 0x400, h: (h & 0x1ff) || 0x200 };
    }
    vramIndex(x, y) {
        const X = ((x % 1024) + 1024) % 1024;
        const Y = ((y % 512) + 512) % 512;
        return Y * 1024 + X;
    }
    fillRect(x, y, w, h, color24) {
        const r = (color24) & 0xff;
        const g = (color24 >>> 8) & 0xff;
        const b = (color24 >>> 16) & 0xff;
        const bgr555 = ((r >>> 3) << 10) | ((g >>> 3) << 5) | (b >>> 3);
        const ox = this.drawOffX | 0;
        const oy = this.drawOffY | 0;
        const sx = (x + ox) | 0;
        const sy = (y + oy) | 0;
        const x0 = Math.max(this.clipLeft, sx);
        const y0 = Math.max(this.clipTop, sy);
        const x1 = Math.min(this.clipRight, sx + Math.max(0, w - 1));
        const y1 = Math.min(this.clipBottom, sy + Math.max(0, h - 1));
        if (x1 < x0 || y1 < y0)
            return;
        for (let yy = y0; yy <= y1; yy++) {
            for (let xx = x0; xx <= x1; xx++) {
                this.vram[this.vramIndex(xx & 0x3ff, yy & 0x1ff)] = bgr555 & 0xffff;
            }
        }
    }
    writeImageWord(word) {
        // Each word contains two pixels: low 16 then high 16
        const { x, y } = this.decodeXY(this.parms[0]);
        const { w, h } = this.decodeSize(this.parms[1]);
        // Track how many pixels have been written so far in this transfer
        const totalPixels = Math.ceil((Math.ceil((w * h) / 2) - this.imageWordsRemaining + 1) * 2);
        // Compute the index of the first pixel in this word
        const pixelIndex = (totalPixels - 2);
        const px0 = word & 0xffff;
        const px1 = (word >>> 16) & 0xffff;
        const writePixel = (pi, px) => {
            if (pi < w * h) {
                const row = Math.floor(pi / w);
                const col = pi % w;
                const vx = (x + col) & 0x3ff;
                const vy = (y + row) & 0x1ff;
                this.vram[this.vramIndex(vx, vy)] = px & 0xffff;
            }
        };
        writePixel(pixelIndex, px0);
        writePixel(pixelIndex + 1, px1);
    }
    readRectToWords(x, y, w, h) {
        const out = [];
        let pi = 0;
        const total = w * h;
        while (pi < total) {
            const row = Math.floor(pi / w);
            const col = pi % w;
            const px0 = this.vram[this.vramIndex((x + col) & 0x3ff, (y + row) & 0x1ff)] & 0xffff;
            let px1 = 0;
            if (pi + 1 < total) {
                const col1 = (pi + 1) % w;
                const row1 = Math.floor((pi + 1) / w);
                px1 = this.vram[this.vramIndex((x + col1) & 0x3ff, (y + row1) & 0x1ff)] & 0xffff;
            }
            out.push((px1 << 16) | px0);
            pi += 2;
        }
        return out;
    }
    fillTri(x1, y1, x2, y2, x3, y3, color24) {
        // Convert 24-bit RGB to BGR555
        const r = (color24) & 0xff;
        const g = (color24 >>> 8) & 0xff;
        const b = (color24 >>> 16) & 0xff;
        const bgr555 = ((r >>> 3) << 10) | ((g >>> 3) << 5) | (b >>> 3);
        // Apply drawing offset
        const ox = this.drawOffX | 0, oy = this.drawOffY | 0;
        x1 = (x1 + ox) | 0;
        y1 = (y1 + oy) | 0;
        x2 = (x2 + ox) | 0;
        y2 = (y2 + oy) | 0;
        x3 = (x3 + ox) | 0;
        y3 = (y3 + oy) | 0;
        // Bounding box with clip
        let minX = Math.max(this.clipLeft, Math.min(x1, x2, x3));
        let maxX = Math.min(this.clipRight, Math.max(x1, x2, x3));
        let minY = Math.max(this.clipTop, Math.min(y1, y2, y3));
        let maxY = Math.min(this.clipBottom, Math.max(y1, y2, y3));
        // Edge function helpers
        const edge = (ax, ay, bx, by, px, py) => {
            return (px - ax) * (by - ay) - (py - ay) * (bx - ax);
        };
        // Determine winding; for simplicity, fill when all edge funcs have same sign or zero
        const area = edge(x1, y1, x2, y2, x3, y3);
        if (area === 0)
            return; // degenerate
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const w0 = edge(x2, y2, x3, y3, x, y);
                const w1 = edge(x3, y3, x1, y1, x, y);
                const w2 = edge(x1, y1, x2, y2, x, y);
                if (area > 0) {
                    if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
                        this.vram[this.vramIndex(x, y)] = bgr555 & 0xffff;
                    }
                }
                else {
                    if (w0 <= 0 && w1 <= 0 && w2 <= 0) {
                        this.vram[this.vramIndex(x, y)] = bgr555 & 0xffff;
                    }
                }
            }
        }
    }
    fillTriTextured(x1, y1, u1, v1, x2, y2, u2, v2, x3, y3, u3, v3, color24) {
        // Apply offset
        const ox = this.drawOffX | 0, oy = this.drawOffY | 0;
        x1 = (x1 + ox) | 0;
        y1 = (y1 + oy) | 0;
        x2 = (x2 + ox) | 0;
        y2 = (y2 + oy) | 0;
        x3 = (x3 + ox) | 0;
        y3 = (y3 + oy) | 0;
        const minX = Math.max(this.clipLeft, Math.min(x1, x2, x3));
        const maxX = Math.min(this.clipRight, Math.max(x1, x2, x3));
        const minY = Math.max(this.clipTop, Math.min(y1, y2, y3));
        const maxY = Math.min(this.clipBottom, Math.max(y1, y2, y3));
        const edge = (ax, ay, bx, by, px, py) => (px - ax) * (by - ay) - (py - ay) * (bx - ax);
        const area = edge(x1, y1, x2, y2, x3, y3);
        if (area === 0)
            return;
        const cr = color24 & 0xff;
        const cg = (color24 >>> 8) & 0xff;
        const cb = (color24 >>> 16) & 0xff;
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const w0 = edge(x2, y2, x3, y3, x, y);
                const w1 = edge(x3, y3, x1, y1, x, y);
                const w2 = edge(x1, y1, x2, y2, x, y);
                if ((area > 0 && w0 >= 0 && w1 >= 0 && w2 >= 0) || (area < 0 && w0 <= 0 && w1 <= 0 && w2 <= 0)) {
                    const f0 = w0 / area, f1 = w1 / area, f2 = w2 / area;
                    const uu = Math.round(u1 * f0 + u2 * f1 + u3 * f2) & 0x3ff;
                    const vv = Math.round(v1 * f0 + v2 * f1 + v3 * f2) & 0x1ff;
                    let U = uu | 0, V = vv | 0;
                    if (this.texAddrWrap) {
                        U = ((U % this.texW) + this.texW) % this.texW;
                        V = ((V % this.texH) + this.texH) % this.texH;
                    }
                    else {
                        if (U < 0)
                            U = 0;
                        else if (U >= this.texW)
                            U = this.texW - 1;
                        if (V < 0)
                            V = 0;
                        else if (V >= this.texH)
                            V = this.texH - 1;
                    }
                    const sx = (this.texBaseX + U) & 0x3ff;
                    const sy = (this.texBaseY + V) & 0x1ff;
                    const tex = this.vram[this.vramIndex(sx, sy)] & 0xffff;
                    if (color24 === 0) {
                        // Preserve legacy behavior: write raw texel
                        this.vram[this.vramIndex(x, y)] = tex;
                    }
                    else {
                        // Expand 5-bit to 8-bit approx
                        const tr = (tex >>> 10) & 0x1f, tg = (tex >>> 5) & 0x1f, tb = tex & 0x1f;
                        const Tr = (tr << 3) | (tr >>> 2), Tg = (tg << 3) | (tg >>> 2), Tb = (tb << 3) | (tb >>> 2);
                        const R = Math.min(255, ((Tr * cr) / 255) | 0);
                        const G = Math.min(255, ((Tg * cg) / 255) | 0);
                        const B = Math.min(255, ((Tb * cb) / 255) | 0);
                        const out = ((R >>> 3) << 10) | ((G >>> 3) << 5) | (B >>> 3);
                        this.vram[this.vramIndex(x, y)] = out & 0xffff;
                    }
                }
            }
        }
    }
    fillTriTexturedGouraud(x1, y1, u1, v1, c1, x2, y2, u2, v2, c2, x3, y3, u3, v3, c3) {
        // Apply offset
        const ox = this.drawOffX | 0, oy = this.drawOffY | 0;
        x1 = (x1 + ox) | 0;
        y1 = (y1 + oy) | 0;
        x2 = (x2 + ox) | 0;
        y2 = (y2 + oy) | 0;
        x3 = (x3 + ox) | 0;
        y3 = (y3 + oy) | 0;
        const minX = Math.max(this.clipLeft, Math.min(x1, x2, x3));
        const maxX = Math.min(this.clipRight, Math.max(x1, x2, x3));
        const minY = Math.max(this.clipTop, Math.min(y1, y2, y3));
        const maxY = Math.min(this.clipBottom, Math.max(y1, y2, y3));
        const r1 = (c1) & 0xff, g1 = (c1 >>> 8) & 0xff, b1 = (c1 >>> 16) & 0xff;
        const r2 = (c2) & 0xff, g2 = (c2 >>> 8) & 0xff, b2 = (c2 >>> 16) & 0xff;
        const r3 = (c3) & 0xff, g3 = (c3 >>> 8) & 0xff, b3 = (c3 >>> 16) & 0xff;
        const edge = (ax, ay, bx, by, px, py) => (px - ax) * (by - ay) - (py - ay) * (bx - ax);
        const area = edge(x1, y1, x2, y2, x3, y3);
        if (area === 0)
            return;
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const w0 = edge(x2, y2, x3, y3, x, y);
                const w1 = edge(x3, y3, x1, y1, x, y);
                const w2 = edge(x1, y1, x2, y2, x, y);
                if ((area > 0 && w0 >= 0 && w1 >= 0 && w2 >= 0) || (area < 0 && w0 <= 0 && w1 <= 0 && w2 <= 0)) {
                    const f0 = w0 / area, f1 = w1 / area, f2 = w2 / area;
                    const uu = Math.round(u1 * f0 + u2 * f1 + u3 * f2) & 0x3ff;
                    const vv = Math.round(v1 * f0 + v2 * f1 + v3 * f2) & 0x1ff;
                    let U = uu | 0, V = vv | 0;
                    if (this.texAddrWrap) {
                        U = ((U % this.texW) + this.texW) % this.texW;
                        V = ((V % this.texH) + this.texH) % this.texH;
                    }
                    else {
                        if (U < 0)
                            U = 0;
                        else if (U >= this.texW)
                            U = this.texW - 1;
                        if (V < 0)
                            V = 0;
                        else if (V >= this.texH)
                            V = this.texH - 1;
                    }
                    const sx = (this.texBaseX + U) & 0x3ff;
                    const sy = (this.texBaseY + V) & 0x1ff;
                    const tex = this.vram[this.vramIndex(sx, sy)] & 0xffff;
                    // Expand 5-bit to 8-bit approx
                    const tr = ((tex >>> 10) & 0x1f);
                    const tg = ((tex >>> 5) & 0x1f);
                    const tb = (tex & 0x1f);
                    const Tr = (tr << 3) | (tr >>> 2), Tg = (tg << 3) | (tg >>> 2), Tb = (tb << 3) | (tb >>> 2);
                    // Interpolate vertex color
                    const Cr = Math.round(r1 * f0 + r2 * f1 + r3 * f2);
                    const Cg = Math.round(g1 * f0 + g2 * f1 + g3 * f2);
                    const Cb = Math.round(b1 * f0 + b2 * f1 + b3 * f2);
                    // Modulate
                    const R = Math.min(255, (Tr * Cr) / 255 | 0);
                    const G = Math.min(255, (Tg * Cg) / 255 | 0);
                    const B = Math.min(255, (Tb * Cb) / 255 | 0);
                    const out = ((R >>> 3) << 10) | ((G >>> 3) << 5) | (B >>> 3);
                    this.vram[this.vramIndex(x, y)] = out & 0xffff;
                }
            }
        }
    }
    fillTriGouraud(x1, y1, c1, x2, y2, c2, x3, y3, c3) {
        // Extract per-vertex RGB (using same packing as fillRect)
        const r1 = (c1) & 0xff, g1 = (c1 >>> 8) & 0xff, b1 = (c1 >>> 16) & 0xff;
        const r2 = (c2) & 0xff, g2 = (c2 >>> 8) & 0xff, b2 = (c2 >>> 16) & 0xff;
        const r3 = (c3) & 0xff, g3 = (c3 >>> 8) & 0xff, b3 = (c3 >>> 16) & 0xff;
        const clampU8 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
        const to555 = (r, g, b) => (((r >>> 3) << 10) | ((g >>> 3) << 5) | (b >>> 3)) & 0xffff;
        // Apply drawing offset
        const ox = this.drawOffX | 0, oy = this.drawOffY | 0;
        x1 = (x1 + ox) | 0;
        y1 = (y1 + oy) | 0;
        x2 = (x2 + ox) | 0;
        y2 = (y2 + oy) | 0;
        x3 = (x3 + ox) | 0;
        y3 = (y3 + oy) | 0;
        const minX = Math.max(this.clipLeft, Math.min(x1, x2, x3));
        const maxX = Math.min(this.clipRight, Math.max(x1, x2, x3));
        const minY = Math.max(this.clipTop, Math.min(y1, y2, y3));
        const maxY = Math.min(this.clipBottom, Math.max(y1, y2, y3));
        const edge = (ax, ay, bx, by, px, py) => (px - ax) * (by - ay) - (py - ay) * (bx - ax);
        const area = edge(x1, y1, x2, y2, x3, y3);
        if (area === 0)
            return;
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const w0 = edge(x2, y2, x3, y3, x, y);
                const w1 = edge(x3, y3, x1, y1, x, y);
                const w2 = edge(x1, y1, x2, y2, x, y);
                if ((area > 0 && w0 >= 0 && w1 >= 0 && w2 >= 0) || (area < 0 && w0 <= 0 && w1 <= 0 && w2 <= 0)) {
                    const f0 = w0 / area, f1 = w1 / area, f2 = w2 / area;
                    const r = clampU8(Math.round(r1 * f0 + r2 * f1 + r3 * f2));
                    const g = clampU8(Math.round(g1 * f0 + g2 * f1 + g3 * f2));
                    const b = clampU8(Math.round(b1 * f0 + b2 * f1 + b3 * f2));
                    this.vram[this.vramIndex(x, y)] = to555(r, g, b);
                }
            }
        }
    }
    // Snapshot/restore for determinism and tests
    serialize() {
        return {
            status: this.status >>> 0,
            inCmd: this.inCmd | 0,
            parmWordsNeeded: this.parmWordsNeeded | 0,
            parms: Array.from(this.parms),
            imageWordsRemaining: this.imageWordsRemaining | 0,
            imageStoreQueue: Array.from(this.imageStoreQueue),
            clipLeft: this.clipLeft | 0, clipTop: this.clipTop | 0, clipRight: this.clipRight | 0, clipBottom: this.clipBottom | 0,
            drawOffX: this.drawOffX | 0, drawOffY: this.drawOffY | 0,
            texBaseX: this.texBaseX | 0, texBaseY: this.texBaseY | 0,
            texAddrWrap: !!this.texAddrWrap,
            texW: this.texW | 0, texH: this.texH | 0,
            vram: Array.from(this.vram),
        };
    }
    deserialize(s) {
        this.status = s.status >>> 0;
        this.inCmd = s.inCmd | 0;
        this.parmWordsNeeded = s.parmWordsNeeded | 0;
        this.parms = Array.isArray(s.parms) ? s.parms.slice() : [];
        this.imageWordsRemaining = s.imageWordsRemaining | 0;
        this.imageStoreQueue = Array.isArray(s.imageStoreQueue) ? s.imageStoreQueue.slice() : [];
        this.clipLeft = s.clipLeft | 0;
        this.clipTop = s.clipTop | 0;
        this.clipRight = s.clipRight | 0;
        this.clipBottom = s.clipBottom | 0;
        this.drawOffX = s.drawOffX | 0;
        this.drawOffY = s.drawOffY | 0;
        this.texBaseX = s.texBaseX | 0;
        this.texBaseY = s.texBaseY | 0;
        this.texAddrWrap = !!s.texAddrWrap;
        this.texW = s.texW | 0;
        this.texH = s.texH | 0;
        if (Array.isArray(s.vram))
            this.vram = Uint16Array.from(s.vram.map((x) => x & 0xffff));
    }
}
//# sourceMappingURL=gpu.js.map