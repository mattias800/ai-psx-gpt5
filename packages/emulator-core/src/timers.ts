import { EventScheduler } from './timing';

export class HWTimer {
  // PSX timer model with proper mode bits
  private count = 0;
  private target = 0xffff;
  private mode = 0;
  private irqDone = false;  // Has IRQ been triggered since last mode write
  private reachedTarget = false;  // Bit 12 of mode: reached target
  private reachedMax = false;  // Bit 11 of mode: reached 0xFFFF
  private paused = false;
  private oneShot = false;

  constructor(private sch: EventScheduler, private clockDiv: number = 1, private onIrq?: () => void) {}

  writeCount(v: number) { 
    this.count = v & 0xffff;
  }
  
  writeTarget(v: number) { 
    this.target = v & 0xffff;
  }
  
  writeMode(v: number) {
    this.mode = v >>> 0;
    
    // Reset internal flags on mode write (PSX behavior)
    this.reachedTarget = false;
    this.reachedMax = false;
    this.irqDone = false;
    
    // Bit 0: Gate enable (not implemented)
    // Bit 1: Gate mode (not implemented) 
    // Bit 2: Reset on target (0=wrap to 0xFFFF+1, 1=reset to 0)
    // Bit 3: IRQ on target (0=disable, 1=enable)
    // Bit 4: IRQ on max (0=disable, 1=enable)
    // Bit 5: IRQ repeat (0=one-shot, 1=repeat)
    // Bit 6: IRQ pulse (0=short, 1=toggle)
    // Bit 7: Clock source (timer-specific)
    // Bit 8-9: Clock source 2 (timer-specific)
    // Bit 10: IRQ status (read-only, 0=no IRQ, 1=IRQ) - inverted logic
    // Bit 11: Reached max (read-only)
    // Bit 12: Reached target (read-only)
    
    this.oneShot = (v & 0x20) === 0;  // Bit 5: 0=one-shot
    this.paused = false;
    
    // Clear count on mode write if bit is set
    if (v & 0x10) {  // Some games expect this
      this.count = 0;
    }
  }
  
  readCount(): number { 
    return this.count & 0xffff;
  }
  
  readTarget(): number { 
    return this.target & 0xffff;
  }
  
  readMode(): number {
    // Compose mode with status bits
    let m = this.mode & 0x3ff;  // Keep lower 10 bits from write
    
    // Bit 10: IRQ status (0=IRQ triggered, 1=no IRQ) - inverted!
    if (!this.irqDone) {
      m |= (1 << 10);
    }
    
    // Bit 11: Reached max
    if (this.reachedMax) {
      m |= (1 << 11);
    }
    
    // Bit 12: Reached target  
    if (this.reachedTarget) {
      m |= (1 << 12);
    }
    
    return m >>> 0;
  }

  tick(cycles: number) {
    if (this.paused) return;
    
    const inc = Math.floor(cycles / this.clockDiv);
    const before = this.count;
    const after = before + inc;
    
    // Check if we pass through or hit the target
    const irqOnTarget = (this.mode & 0x08) !== 0;  // Bit 3
    const resetOnTarget = (this.mode & 0x04) !== 0;  // Bit 2
    const irqOnMax = (this.mode & 0x10) !== 0;  // Bit 4
    const irqRepeat = (this.mode & 0x20) !== 0;  // Bit 5
    
    // Check target crossing
    if (after >= this.target) {
      this.reachedTarget = true;
      
      if (irqOnTarget && (!this.irqDone || irqRepeat)) {
        this.irqDone = true;
        if (this.onIrq) this.onIrq();
        
        // One-shot mode pauses after IRQ
        if (this.oneShot) {
          this.paused = true;
        }
      }
      
      if (resetOnTarget) {
        // Reset to 0 when reaching target
        this.count = (after - this.target) & 0xffff;
      } else {
        // Wrap around
        this.count = after & 0xffff;
      }
    } else {
      this.count = after & 0xffff;
    }
    
    // Check for overflow to 0xFFFF
    if (after >= 0xffff) {
      this.reachedMax = true;
      
      if (irqOnMax && (!this.irqDone || irqRepeat)) {
        this.irqDone = true;
        if (this.onIrq) this.onIrq();
        
        if (this.oneShot) {
          this.paused = true;
        }
      }
      
      // Always wrap at 0xFFFF
      this.count = after & 0xffff;
    }
  }

  serialize(): any { 
    return { 
      count: this.count & 0xffff, 
      target: this.target & 0xffff, 
      mode: this.mode>>>0, 
      irqDone: !!this.irqDone,
      reachedTarget: !!this.reachedTarget,
      reachedMax: !!this.reachedMax,
      paused: !!this.paused,
      oneShot: !!this.oneShot,
      clockDiv: this.clockDiv|0 
    }; 
  }
  
  deserialize(s: any): void { 
    this.count = (s.count|0) & 0xffff; 
    this.target = (s.target|0) & 0xffff; 
    this.mode = s.mode>>>0; 
    this.irqDone = !!s.irqDone;
    this.reachedTarget = !!s.reachedTarget;
    this.reachedMax = !!s.reachedMax;
    this.paused = !!s.paused;
    this.oneShot = !!s.oneShot;
    /* clockDiv immutable */ 
  }
}

