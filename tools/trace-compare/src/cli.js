import path from 'node:path';
import process from 'node:process';
import { parseLog } from './parser/index.js';
import { compareTraces, formatDivergenceReport } from './compare.js';

const parseArgs = (argv) => {
  const args = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    switch (a) {
      case '--pcsx': args.pcsx = next; i++; break;
      case '--emu': args.emu = next; i++; break;
      case '--start': args.start = parseInt(next, 10); i++; break;
      case '--end': args.end = parseInt(next, 10); i++; break;
      case '--context': args.context = parseInt(next, 10); i++; break;
      case '--lhs-source': args.lhsSource = next; i++; break;
      case '--rhs-source': args.rhsSource = next; i++; break;
      case '--help': case '-h':
        printHelp();
        process.exit(0);
        break;
      default:
        if (a.startsWith('-')) continue;
        positional.push(a);
        break;
    }
  }
  if (!args.pcsx && positional.length >= 1) args.pcsx = positional[0];
  if (!args.emu && positional.length >= 2) args.emu = positional[1];
  return args;
};

const printHelp = () => {
  // eslint-disable-next-line no-console
  console.log(`trace-compare <pcsxLog> <emuLog> [options]\n\nOptions:\n  --pcsx <file>            Path to PCSX-Redux log (can be given positionally)\n  --emu <file>             Path to emulator log (can be given positionally)\n  --start <n>              1-based start instruction index (default: 1)\n  --end <n>                1-based end instruction index (default: min length)\n  --context <n>            How many instructions of context to show (default: 10)\n  --lhs-source <s>         Format of first log: pcsx|emu|auto (default: pcsx)\n  --rhs-source <s>         Format of second log: pcsx|emu|auto (default: emu)\n  -h, --help               Show this help\n`);
};

export const main = async () => {
  const argv = process.argv.slice(2);
  if (argv.length === 0) {
    printHelp();
    process.exit(1);
  }
  const args = parseArgs(argv);
  if (!args.pcsx || !args.emu) {
    printHelp();
    process.exit(1);
  }

  const lhsSource = args.lhsSource ?? 'pcsx';
  const rhsSource = args.rhsSource ?? 'emu';

  const lhs = parseLog(path.resolve(args.pcsx), lhsSource);
  const rhs = parseLog(path.resolve(args.emu), rhsSource);

  const opts = {
    startLine: args.start ?? 1,
    endLine: args.end,
    context: args.context ?? 10,
  };

  const report = compareTraces(lhs, rhs, opts);
  const text = formatDivergenceReport(report);
  // eslint-disable-next-line no-console
  console.log(text);
  process.exit(report.diverged ? 1 : 0);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  // eslint-disable-next-line promise/catch-or-return
  main();
}
