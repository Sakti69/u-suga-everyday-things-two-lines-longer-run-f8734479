// u-suga-everyday-things-two-lines-longer-run-f8734479 entry (Node 22,
// standard library only): writes one original two-line explanation of an
// everyday thing to /output/entry.txt. The gate takes UTF-8 text of 1 to 400
// characters that is not only white space, and the judge reads exactly the
// bytes written, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'A toaster is a tiny elevator that carries your bread down into a hot, dark shaft and pops it back up when it turns golden and crunchy.\n' +
  'The elevator maps the trip down and back up, but it leaves out the heat: red-hot wires do the toasting, and the lift just carries the bread.';

const length = [...ENTRY].length;
if (length < 1 || length > 400 || !/\S/.test(ENTRY)) {
  throw new Error(`entry is ${length} characters; the gate needs 1 to 400 with a non-space character`);
}
if (ENTRY.split('\n').length !== 2) {
  throw new Error('entry must be exactly two lines');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
