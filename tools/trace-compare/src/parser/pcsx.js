import fs from 'node:fs';
const cpuLineRe = /^([0-9A-Fa-f]{8})\s+([0-9A-Fa-f]{8}):/;
// Streaming and memory-minimal parser: returns only {pc,instr} events to reduce heap
export const parsePcsxLog = (absPath) => {
    const fd = fs.openSync(absPath, 'r');
    const bufSize = 8 * 1024 * 1024; // 8MB chunks
    const buffer = Buffer.allocUnsafe(bufSize);
    let leftover = '';
    const events = [];
    try {
        // Read file in chunks to avoid creating one giant string
        while (true) {
            const bytesRead = fs.readSync(fd, buffer, 0, bufSize, null);
            if (bytesRead === 0)
                break;
            const chunk = buffer.toString('utf8', 0, bytesRead);
            const data = leftover + chunk;
            const lines = data.split(/\r?\n/);
            leftover = lines.pop() || '';
            for (const line of lines) {
                const m = cpuLineRe.exec(line);
                if (!m)
                    continue; // ignore non-CPU lines
                const pc = parseInt(m[1], 16) >>> 0;
                const instr = parseInt(m[2], 16) >>> 0;
                // Minimal event shape to keep memory low
                events.push({ kind: 'cpu', pc, instr });
            }
        }
        if (leftover) {
            const m = cpuLineRe.exec(leftover);
            if (m) {
                const pc = parseInt(m[1], 16) >>> 0;
                const instr = parseInt(m[2], 16) >>> 0;
                events.push({ kind: 'cpu', pc, instr });
            }
        }
    }
    finally {
        fs.closeSync(fd);
    }
    return { events, source: 'pcsx', meta: { source: 'pcsx', totalLines: events.length } };
};
