// PSX ADPCM filter coefficients (K0, K1) scaled by 64
const K0 = [0, 60, 115, 98, 122];
const K1 = [0, 0, -52, -55, -60];
export function decodeBlock(block, state) {
    if (block.length !== 16)
        throw new Error('PSX ADPCM block must be 16 bytes');
    const header = block[0];
    const shift = header & 0x0f; // 0..12 typically
    const filter = (header >> 4) & 0x0f; // 0..4 used
    const k0 = K0[filter] ?? 0;
    const k1 = K1[filter] ?? 0;
    const out = new Int16Array(28);
    let s1 = state.prev1 | 0;
    let s2 = state.prev2 | 0;
    // Data bytes start at block[2]; each holds two 4-bit samples.
    let oi = 0;
    for (let bi = 2; bi < 16; bi++) {
        const byte = block[bi];
        for (let nib = 0; nib < 2; nib++) {
            // Low nibble first, then high nibble
            const raw4 = nib === 0 ? byte & 0x0f : byte >> 4;
            // Sign-extend 4-bit
            const sn = raw4 & 0x08 ? raw4 - 16 : raw4; // -8..+7
            // Reconstruct sample
            let s = (sn << 12) >> shift; // scaled sample
            // Apply predictor: ((s1 * k0 + s2 * k1 + 32) >> 6)
            s += (s1 * k0 + s2 * k1 + 32) >> 6;
            // Clamp to 16-bit signed
            if (s > 32767)
                s = 32767;
            else if (s < -32768)
                s = -32768;
            out[oi++] = s;
            s2 = s1;
            s1 = s;
            if (oi === 28)
                break;
        }
        if (oi === 28)
            break;
    }
    state.prev1 = s1;
    state.prev2 = s2;
    return out;
}
//# sourceMappingURL=adpcm.js.map