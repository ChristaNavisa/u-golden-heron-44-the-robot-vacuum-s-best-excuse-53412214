import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I did not miss the spot. My cliff sensors saw your sock, declared it a staircase, and I chose life.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, line);
