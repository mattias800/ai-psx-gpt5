/**
 * Core types for PCSX-Redux vs emulator trace comparison
 * All types use strict typing with no 'any'
 */

export interface MemoryOperation {
  op: 'r' | 'w';
  size: 1 | 2 | 4;
  addr: number;
  value: number;
}

export interface TraceEvent {
  kind: 'cpu' | 'mem';
  pc?: number;
  instr?: number;
  disasm?: string;
  regs?: Uint32Array;
  hi?: number;
  lo?: number;
  usedRegs?: Record<string, number>;
  mem?: MemoryOperation;
}

export interface TraceMeta {
  source: string;
  timestamp?: string;
  biosName?: string;
  totalLines?: number;
}

export interface TraceStream {
  events: TraceEvent[];
  source: 'pcsx' | 'emu';
  meta: TraceMeta;
}

export interface ComparisonOptions {
  startLine: number;
  endLine?: number;
  context: number;
}

export interface DivergenceReport {
  diverged: boolean;
  index: number;
  reason: 'pc-mismatch' | 'instr-mismatch' | 'early-end' | 'none';
  lhsEvent?: TraceEvent;
  rhsEvent?: TraceEvent;
  matchedContext: TraceEvent[];
  lhsContext: TraceEvent[];
  rhsContext: TraceEvent[];
  differingRegs?: string[];
  differingMem?: string[];
}

export const formatHex = (value: number, width: number): string => {
  const hex = (value >>> 0).toString(16);
  return hex.padStart(width, '0');
};

export const formatAddress = (addr: number): string => formatHex(addr, 8);

export const formatInstruction = (instr: number): string => formatHex(instr, 8);
