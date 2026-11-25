// Midnight Fridge Roast — make.fun entry
// Writes one roast line to /output/entry.txt (1–200 UTF-8 characters, gate requirement).
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "At midnight my fridge locks and says, 'Come back tomorrow' — it's a bouncer with a salad drawer.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Runtime gate: the entry must be a single non-blank line of 1–200 characters.
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry line must be 1–200 characters, got ${LINE.length}`,
  );
}
if (/\r|\n/.test(LINE)) {
  throw new Error("entry line must be a single line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
