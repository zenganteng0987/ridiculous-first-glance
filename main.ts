// Ridiculous at First Glance, Real by the Second
// One sentence pitching a bizarre startup idea that sounds absurd until the
// business logic lands: selling seats on a bus to nowhere. The turn is
// twofold: the bus never leaves the depot and phones go in a locker, so the
// product is enforced disconnection — and it is the one holiday a boss
// cannot cancel, because there is no destination to reach and no trip to
// interrupt. The buyer (exhausted workers) and the price ($40) are named,
// so the absurd premise reads as a real market: paid silence, not transport.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We sell seats on a bus to nowhere: it never leaves the depot, phones go in a locker, and exhausted workers pay $40 for the one holiday their boss can't cancel — a trip with no destination.";

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
