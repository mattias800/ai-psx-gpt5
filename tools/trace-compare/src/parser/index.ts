import fs from 'node:fs';
import { TraceStream } from '../types.js';
import { parsePcsxLog } from './pcsx.js';
import { parseEmuLog } from './emu.js';

export type SourceKind = 'pcsx' | 'emu' | 'auto';

const looksLikePcsx = (sample: string): boolean => {
  // e.g., "00000000 00000000: disasm..."
  return /^[0-9A-Fa-f]{8}\s+[0-9A-Fa-f]{8}:/.test(sample);
};

const looksLikeEmu = (sample: string): boolean => {
  // e.g., redux CPU or MEM lines
  if (/^MEM\s+(r|w)(8|16|32)\s+\[[0-9A-Fa-f]+\]/.test(sample)) return true;
  if (/^pc=[0-9A-Fa-f]{8}\s+instr=[0-9A-Fa-f]{8}/i.test(sample)) return true;
  if (/^[0-9A-Fa-f]{8}\s+[0-9A-Fa-f]{8}:/.test(sample)) return true; // redux CPU style too
  return false;
};

export const parseLog = (absPath: string, source: SourceKind = 'auto'): TraceStream => {
  if (source === 'pcsx') return parsePcsxLog(absPath);
  if (source === 'emu') return parseEmuLog(absPath);
  
  // auto-detect by sampling first non-empty line
  const text = fs.readFileSync(absPath, 'utf8');
  const first = (text.split(/\r?\n/).find(l => l.trim().length > 0) || '').trim();
  if (looksLikePcsx(first)) return parsePcsxLog(absPath);
  if (looksLikeEmu(first)) return parseEmuLog(absPath);
  
  // Default to PCSX format if ambiguous
  return parsePcsxLog(absPath);
};
