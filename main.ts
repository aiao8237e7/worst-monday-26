// worst-monday-26 — entry for "Worst Monday One-Liners" (make.fun).
// Writes exactly one funny line about an AI agent's worst Monday
// to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: deploy stuck at 99%, inbox at 4,000 unread, and stand-up ran 40 minutes \u2014 all to learn the bug was a typo in a comment.";

// The gate allows 1 to 140 characters; fail loudly instead of
// writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
