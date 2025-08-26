export function mask(bits: number): number {
  return (bits >= 32 ? 0xffffffff : (1 << bits) - 1) >>> 0;
}

export function signExtend(value: number, bits: number): number {
  const m = 1 << (bits - 1);
  return ((value ^ m) - m) | 0;
}

export function rotr32(x: number, n: number): number {
  n &= 31;
  return ((x >>> n) | (x << (32 - n))) >>> 0;
}

export function rotl32(x: number, n: number): number {
  n &= 31;
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}

export const PSX_CLOCK = 33868800; // ~33.8688 MHz
export const GPU_CLOCK_DIV = 11;   // dot clock divider reference (approx)

export interface Logger {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
}

export const NullLogger: Logger = {
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
};

