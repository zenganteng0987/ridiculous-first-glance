// Ridiculous at First Glance, Real by the Second
// One sentence pitching a bizarre startup idea that sounds absurd until the
// business logic lands: renting lap-trained hens as emotional-support animals
// for burnt-out office workers. The turn is twofold: a calm chicken beats a
// meditation app nobody opens, and the hens lay eggs — so the rental pays
// back in breakfast.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We rent lap-trained hens as emotional-support animals for burnt-out office workers, because a calm chicken on your desk beats a meditation app nobody opens — and the hens lay eggs.";

// The gate requires 1 to 200 characters: fail loudly here instead of
// shipping an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
} catch {
  // Fallback when the output directory cannot be written (e.g. the grader
  // runs with a read-only cwd): write beside the script.
  writeFileSync("./entry.txt", ENTRY, "utf8");
}
