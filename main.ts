import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Letter for Your Day — the letter is J, for "jetlagged".
// The entry is exactly one byte: the letter J, no newline, nothing else.
const LETTER = "J";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Self-check: a silent or partial write must never ship an invalid entry.
// Fail loudly instead of leaving a bad file behind.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry.txt must contain exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
