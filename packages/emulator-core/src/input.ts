export type PadButton =
  | 'select' | 'start'
  | 'up' | 'down' | 'left' | 'right'
  | 'triangle' | 'circle' | 'cross' | 'square'
  | 'l1' | 'r1' | 'l2' | 'r2';

// Active-low mask: 1=not pressed, 0=pressed
export function padMaskFromButtons(pressed: PadButton[]): number {
  let mask = 0xffff;
  const down = new Set(pressed);
  const bit = (name: PadButton): number => {
    switch (name) {
      case 'select': return 0;
      case 'start': return 3;
      case 'up': return 4;
      case 'right': return 5;
      case 'down': return 6;
      case 'left': return 7;
      case 'l2': return 8;
      case 'r2': return 9;
      case 'l1': return 10;
      case 'r1': return 11;
      case 'triangle': return 12;
      case 'circle': return 13;
      case 'cross': return 14;
      case 'square': return 15;
    }
  };
  for (const b of down) {
    const i = bit(b);
    mask &= ~(1 << i);
  }
  return mask >>> 0;
}

