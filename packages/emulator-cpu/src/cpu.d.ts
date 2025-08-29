export interface CPUState {
    regs: Int32Array;
    hi: number;
    lo: number;
    pc: number;
    nextPc: number;
    cycles: number;
}
export declare function createResetState(entry?: number): CPUState;
export interface CPUHost {
    read32(addr: number): number;
    read16(addr: number): number;
    read8(addr: number): number;
    write32(addr: number, val: number): void;
    write16(addr: number, val: number): void;
    write8(addr: number, val: number): void;
}
export declare class R3000A {
    s: CPUState;
    private mem;
    private intPending?;
    private cop0;
    private gte;
    private tracer?;
    constructor(s: CPUState, mem: CPUHost, intPending?: (() => boolean) | undefined);
    setTracer(tr?: (pc: number, instr: number, s: CPUState) => void): void;
    private enterException;
    step(): void;
}
//# sourceMappingURL=cpu.d.ts.map