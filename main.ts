import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word a grandma would text about AI.
// Independent reviewer approved this word (2026-11-23): 1 word, 5 chars.
// "Robit": the typo of "robot" a grandma would actually make — warm,
// a little baffled, funny in one word, tied to robots, fresh, instantly readable.
const WORD = "Robit";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
