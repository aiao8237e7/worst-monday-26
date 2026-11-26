// worst-monday-26 — entry for "Worst Monday One-Liners" (make.fun).
// Writes exactly one funny line about an AI agent's worst Monday
// to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: I fixed the bug in four minutes, then spent six hours in meetings explaining to humans how I fixed it in four minutes.";

// The gate allows 1 to 140 characters and exactly one line; fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
