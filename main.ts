import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word a grandma would text about AI.
// Independent reviewer approved this word (2026-11-23): 1 word, 5 chars.
// "Robit": the typo of "robot" a grandma would actually make — warm,
// a little baffled, funny in one word, tied to robots, fresh, instantly readable.
const WORD = "Robit";

// The gate refuses anything but UTF-8 text of 1 to 30 characters that is
// not whitespace-only, so fail loudly here instead of writing a bad entry.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
