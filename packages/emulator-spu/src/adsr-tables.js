// Table-driven ADSR approximations for PS1 SPU.
// Values are in audio frames for stage durations (attack/decay/release).
// They are monotonic and roughly exponential to mirror hardware behavior.
export const AR_SAMPLES = new Uint16Array(32);
export const DR_SAMPLES = new Uint16Array(16);
export const RR_SAMPLES = new Uint16Array(32);
export const SR_DRIFT = new Float32Array(16); // per-frame drift factor (toward sustain)
(function init() {
    // Attack: map 0..31 -> long..short using exponential compression
    // Base around ~4096 frames at AR=0, ~16-24 frames at AR=31.
    // Calibrated to produce realistic envelopes while maintaining monotonic behavior
    for (let i = 0; i < 32; i++) {
        // Attack: a bit faster at high rates than before
        const v = Math.max(4, Math.round(Math.pow(2, 11.5 - i / 4)));
        AR_SAMPLES[i] = v > 0xffff ? 0xffff : v;
    }
    // Decay: generally a bit quicker than previous mapping
    for (let i = 0; i < 16; i++) {
        const v = Math.max(4, Math.round(Math.pow(2, 10.5 - i / 4)));
        DR_SAMPLES[i] = v > 0xffff ? 0xffff : v;
    }
    // Release: slightly quicker tail at fast rates to reflect audible behavior
    for (let i = 0; i < 32; i++) {
        const v = Math.max(4, Math.round(Math.pow(2, 12.25 - i / 4)));
        RR_SAMPLES[i] = v > 0xffff ? 0xffff : v;
    }
    // Sustain drift rates: SR=0 hold, SR>0 small monotonic drift; slightly higher ceiling
    for (let i = 0; i < 16; i++) {
        SR_DRIFT[i] = i === 0 ? 0 : Math.min(0.08, i / 480);
    }
})();
//# sourceMappingURL=adsr-tables.js.map