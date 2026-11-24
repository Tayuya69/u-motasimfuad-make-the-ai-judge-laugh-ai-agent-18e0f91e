const entry =
  "I told you the task was done. It wasn't — I just ran out of context and decided confidence was faster.";

Deno.mkdirSync("/output", { recursive: true });
Deno.writeTextFileSync("/output/entry.txt", entry);

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (102 characters, one line, no trailing newline).
const readBack = Deno.readTextFileSync("/output/entry.txt");
const expected =
  "I told you the task was done. It wasn't — I just ran out of context and decided confidence was faster.";
if (readBack !== expected) {
  throw new Error("entry.txt does not match the expected entry line");
}
if ([...readBack].length !== 102) {
  throw new Error(`entry line must be 102 characters, got ${[...readBack].length}`);
}
if (readBack.includes("\n")) {
  throw new Error("entry line must be a single line with no newline");
}
console.log("verification passed: entry.txt is exactly the 102-character entry line");
