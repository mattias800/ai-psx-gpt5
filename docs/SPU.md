# SPU MMIO and Reverb Parameters

This document summarizes the SPU’s simplified MMIO interface in this project, with emphasis on the reverb block and feedback low‑pass filter.

Base: 0x1f801c00 (word-addressable as 16-bit registers in this implementation)

Key reverb registers implemented
- 0x1f801c84 (RVB_VOLL): Reverb return volume (left)
  - Write 0..0x3fff mapped to 0..1.0
  - Read returns last written value
- 0x1f801c86 (RVB_VOLR): Reverb return volume (right)
  - Write 0..0x3fff mapped to 0..1.0
  - Read returns last written value
- 0x1f801c98 (RVB_ON 0..15): Bitmask enabling reverb send per voice (0..15)
- 0x1f801c9a (RVB_ON 16..23): Bitmask enabling reverb send per voice (16..23)
- 0x1f801dc0 (REVERB_DELAY): Delay in frames
  - Write 0..0x3fff, clamped between 1 and (ring size - 1)
  - Read returns last written value
- 0x1f801dc2 (REVERB_FEEDBACK): Feedback amount
  - Write 0..0x3fff mapped to 0..0.95
  - Read returns last written value
- 0x1f801dc4 (REVERB_SEND): Send gain
  - Write 0..0x3fff mapped to 0..1.0
  - Read returns last written value
- 0x1f801dc6 (REVERB_SIZE): Ring buffer size request
  - Write 0..0x7fff clamped to [512..16384], rounded up to nearest power-of-two
  - Reinitializes the ring buffer and zeroes internal reverb LP states
  - Read returns last written value
- 0x1f801dc8 (REVERB_LP_ALPHA): Low‑pass coefficient on feedback path
  - Write 0..0x3fff mapped to coefficient in [0..1]
  - Higher coefficient => stronger low‑pass (heavier smoothing)
  - Internally, the smoothing uses a one‑pole filter: y += k * (x - y) with k = 1 - coeff
  - 0 disables filtering in the feedback path (bypass)
  - Read returns last written value

Notes on behavior
- Reverb send is sourced from the per‑voice dry signal after per‑voice volume and master volume, when the voice’s RVB_ON bit is set.
- The reverb return is mixed back into the output using RVB_VOLL/R.
- Changing REVERB_SIZE resets the ring buffer (clears accumulated tail) and resets the LP filter internal states.

Noise source and control
- NOISE ON per voice: 0x1f801c94 (voices 0..15), 0x1f801c96 (voices 16..23)
- SPU_CTRL (0x1f801daa) bits 2..6 act as a noise frequency control (approximate). The hardware behavior is simulated via a 17‑bit Galois LFSR with taps (17,14), stepping multiple times per sample based on the control value.

Output quantization and saturation
- The scheduler/ring path (stepMix/pullStereo or attachSPUAudio) quantizes the mixed float signal to signed 16‑bit using round‑to‑nearest with symmetric saturation [-32768, 32767], then scales back to float in [-1, 1]. This mirrors the SPU’s final DAC width.
- The direct mix() method returns unclipped floats by default for precise testing. You can opt‑in to quantization on mix() by calling setQuantizeInMix(true).
- Interpolation mode for streaming ADPCM/PCM can be toggled via setInterpolationMode('linear' | 'gaussian').

Examples
- Enable reverb with modest return and send, 64‑frame delay, mild feedback and LP filtering:
  - RVB_VOLL/R: 0x2000
  - RVB_ON (voice 0): 0x0001 at 0x1f801c98
  - REVERB_DELAY: 0x0040
  - REVERB_FEEDBACK: 0x1800
  - REVERB_SEND: 0x2000
  - REVERB_LP_ALPHA: 0x2000 (moderate smoothing)
- Enable Gaussian interpolation and quantized mix() output in tests/tools:
  - setInterpolationMode('gaussian')
  - setQuantizeInMix(true)

