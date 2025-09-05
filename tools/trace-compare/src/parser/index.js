import fs from 'node:fs';
import { parsePcsxLog } from './pcsx.js';
import { parseEmuLog } from './emu.js';

const looksLikePcsx = (sample) => {
  return /^[0-9A-Fa-f]{8}\s+[0-9A-Fa-f]{8}:/.test(sample);
};

const looksLikeEmu = (sample) => {
  if (/^MEM\s+(r|w)(8|16|32)\s+\[[0-9A-Fa-f]+\]/.test(sample)) return true;
  if (/^pc=[0-9A-Fa-f]{8}\s+instr=[0-9A-Fa-f]{8}/i.test(sample)) return true;
  if (/^[0-9A-Fa-f]{8}\s+[0-9A-Fa-f]{8}:/.test(sample)) return true;
  return false;
};

export const parseLog = (absPath, source = 'auto') => {
  if (source === 'pcsx') return parsePcsxLog(absPath);
  if (source === 'emu') return parseEmuLog(absPath);
  const text = fs.readFileSync(absPath, 'utf8');
  const first = (text.split(/\r?\n/).find(l => l.trim().length > 0) || '').trim();
  if (looksLikePcsx(first)) return parsePcsxLog(absPath);
  if (looksLikeEmu(first)) return parseEmuLog(absPath);
  return parsePcsxLog(absPath);
};
