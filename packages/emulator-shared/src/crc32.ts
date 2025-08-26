export function crc32(buf: ArrayLike<number>): number {
  let c = 0xffffffff >>> 0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i] & 0xff;
    for (let k = 0; k < 8; k++) {
      const mask = -(c & 1);
      c = (c >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

