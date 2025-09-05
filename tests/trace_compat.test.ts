import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { PSXSystem } from '../packages/emulator-core/src/psx'

const withEnv = (key: string, val: string, fn: () => Promise<void> | void) => {
  const old = process.env[key]
  process.env[key] = val
  const done = () => { if (old === undefined) delete process.env[key]; else process.env[key] = old }
  try {
    const r = fn()
    if (r && typeof (r as any).then === 'function') {
      return (r as Promise<void>).finally(done)
    }
  } finally {
    done()
  }
}

describe('trace-compat seeds and EPC tweak', () => {
  it('seeds system pointers [a0000120],[a0000124] when PSX_TRACE_COMPAT=1 and preRead hits 0x80000080', () => withEnv('PSX_TRACE_COMPAT', '1', () => {
    const sys = new PSXSystem()
    // Use a tiny zero BIOS so we can step; seed is triggered via preRead32 when fetching 0x80000080
    const dummy = new Uint8Array(512 * 1024)
    sys.loadBIOS(dummy)

    // Force CPU to fetch from 0x80000080 so preRead32 hook runs the seeding code path
    const cpu: any = sys.cpu
    cpu.s.pc = 0x80000080 >>> 0
    cpu.s.nextPc = 0x80000084 >>> 0
    cpu.step()

    const r = sys.ram
    const p1 = r.read32(0xa0000120 >>> 0) >>> 0
    const p2 = r.read32(0xa0000124 >>> 0) >>> 0

    expect(p1).toBe(0xa000e028 >>> 0)
    expect(p2).toBe(0x000001c0 >>> 0)
  }))

  it('EPC tweak sets EPC to old PC when PSX_TRACE_TWEAK_EPC=1 on interrupt entry', () => withEnv('PSX_TRACE_TWEAK_EPC', '1', () => {
    const sys = new PSXSystem()
    // Minimal BIOS; we just need one instruction executed before interrupt handling
    const dummy = new Uint8Array(512 * 1024)
    sys.loadBIOS(dummy)

    const cpu: any = sys.cpu
    // Ensure IEc=1 so interrupts are taken; cop0 is private but accessible via any
    cpu.cop0[12] = (cpu.cop0[12] | 1) | 0 // IEc=1

    const oldPc = 0xbfc00000 >>> 0
    cpu.s.pc = oldPc
    cpu.s.nextPc = (oldPc + 4) >>> 0

    // Raise a pending interrupt by setting intc mask+status via IOHub region
    // Simpler: directly call interrupt controller through sys.intc
    sys.intc.setMask(0xffff)
    sys.intc.raise(1) // raise any non-zero IRQ bit

    cpu.step()

    const epc = cpu.cop0[14] >>> 0
    expect(epc >>> 0).toBe(oldPc >>> 0)
  }))

  it('EPC default (no tweak) sets EPC to next PC (old PC + 4) on interrupt entry', () => withEnv('PSX_TRACE_TWEAK_EPC', '0', () => {
    const sys = new PSXSystem()
    const dummy = new Uint8Array(512 * 1024)
    sys.loadBIOS(dummy)

    const cpu: any = sys.cpu
    cpu.cop0[12] = (cpu.cop0[12] | 1) | 0 // IEc=1

    const oldPc = 0xbfc00000 >>> 0
    cpu.s.pc = oldPc
    cpu.s.nextPc = (oldPc + 4) >>> 0

    sys.intc.setMask(0xffff)
    sys.intc.raise(1)

    cpu.step()

    const epc = cpu.cop0[14] >>> 0
    expect(epc >>> 0).toBe((oldPc + 4) >>> 0)
  }))
})

