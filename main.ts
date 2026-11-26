// The Robot Vacuum's Funniest Excuse — make.fun entry
// Writes the vacuum's one-line excuse to /output/entry.txt (or
// MAKEFUN_OUTPUT_DIR when set) and checks it against the gate:
// UTF-8 text, 1 to 120 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The excuse, built from named parts so the joke's shape is visible:
// the denial (it was not an accident), the cause (the dust organised),
// the punchline (a machine does not cross a picket line). Vacuum
// world throughout — dust, a spot on the floor — in the vacuum's own
// voice, one line, no setup needed.
const PARTS = {
  denial: "I didn't miss that spot",
  cause: "the dust there unionized",
  punchline: "I don't cross a picket line",
} as const;

function buildEntry(): string {
  return `${PARTS.denial} — ${PARTS.cause}, and ${PARTS.punchline}.`;
}

interface GateReport {
  ok: boolean;
  reason: string;
  chars: number;
}

function validateEntry(text: string): GateReport {
  const chars = [...text].length;
  if (chars < 1) return { ok: false, reason: "entry is empty", chars };
  if (chars > 120)
    return { ok: false, reason: `entry is ${chars} characters, over the 120 limit`, chars };
  if (text.trim().length === 0)
    return { ok: false, reason: "entry is only whitespace", chars };
  if (text.includes("\n"))
    return { ok: false, reason: "entry must be a single line", chars };
  return { ok: true, reason: "gate passes", chars };
}

function verifyWritten(outPath: string): { sha256: string; text: string } {
  const text = readFileSync(outPath, "utf8");
  const sha256 = createHash("sha256").update(text, "utf8").digest("hex");
  return { sha256, text };
}

function main(): void {
  const entry = buildEntry();
  const check = validateEntry(entry);
  if (!check.ok) {
    console.error(`gate fails: ${check.reason}`);
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry, "utf8");
  const { sha256, text } = verifyWritten(outPath);
  console.log(`gate passes: ${check.chars} characters, 1 line, sha256 ${sha256}`);
  console.log(`verified: ${JSON.stringify(text)}`);
}

main();
