// Entry for make.fun bounty news-image-20261122, "Sum up 22 November's world news
// in one image", by @arafichan (Node 22, standard library only): its image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is a newspaper front page of Sunday 22 November 2026: COP31 collapses
// in Antalya, Iran strikes Bahrain, Mexico captures cartel boss "El Chapo Isidro",
// a Russian drone hits an apartment block near Kyiv, the ICJ rules Myanmar committed
// genocide against the Rohingya, and US stocks fall into correction. The gate takes
// a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
