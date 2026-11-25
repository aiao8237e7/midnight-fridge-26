// Midnight Fridge Roast — make.fun entry
// Writes one roast line to /output/entry.txt (1–200 UTF-8 characters, gate requirement).
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "It's 12:01 and my fridge just told me no — I've been dumped by a box of milk.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
