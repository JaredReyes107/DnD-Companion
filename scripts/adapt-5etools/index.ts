import * as fs from "fs";
import * as path from "path";
import { parseClass } from "./parsers/parseClass";
import { parseSubclasses } from "./parsers/parseSubclass";
import { writeClassTemplate } from "./writers/writeClassTemplate";
import { writeSubclassTemplate } from "./writers/writeSubclassTemplate";
import {
  writeLocalizationStub,
  writeSubclassLocalizationStub,
} from "./writers/writeLocalization";

const INPUT_DIR = path.resolve(__dirname, "../../5etools-data");
const CLASS_OUT = path.resolve(__dirname, "../../src/core/data/classes");
const SUBCLASS_OUT = path.resolve(
  __dirname,
  "../../src/core/data/classes/subclasses",
);
const LOC_OUT = path.resolve(
  __dirname,
  "../../src/services/localization/game/classes",
);

const inputFile = process.argv[2];
const mode = process.argv[3] ?? "all"; // "class" | "subclass" | "all"

if (!inputFile) {
  console.error(
    "Usage: ts-node --project tsconfig.scripts.json scripts/adapt-5etools/index.ts <file.json> [class|subclass|all]",
  );
  process.exit(1);
}

const raw = fs.readFileSync(path.join(INPUT_DIR, inputFile), "utf-8");
const data = JSON.parse(raw);

if (mode === "class" || mode === "all") {
  const classes = parseClass(data);
  for (const cls of classes) {
    const classFile = path.join(CLASS_OUT, `${cls.id}.generated.ts`);
    fs.writeFileSync(classFile, writeClassTemplate(cls));
    console.log(`✓ class      → ${classFile}`);

    for (const locale of ["en", "es"] as const) {
      const locFile = path.join(
        LOC_OUT,
        cls.id,
        `${cls.id}-features_${locale}.generated.ts`,
      );
      fs.mkdirSync(path.dirname(locFile), { recursive: true });
      fs.writeFileSync(locFile, writeLocalizationStub(cls, locale));
    }
    console.log(`✓ loc (en/es) → ${path.join(LOC_OUT, cls.id)}`);
  }
}

if (mode === "subclass" || mode === "all") {
  const subclasses = parseSubclasses(data);

  for (const sub of subclasses) {
    const dir = path.join(SUBCLASS_OUT, sub.classId);
    fs.mkdirSync(dir, { recursive: true });

    const subFile = path.join(dir, `${sub.id}.generated.ts`);
    fs.writeFileSync(subFile, writeSubclassTemplate(sub));
    console.log(`✓ subclass   → ${subFile}`);

    for (const locale of ["en", "es"] as const) {
      const locDir = path.join(LOC_OUT, sub.classId, "subclasses", sub.id);
      fs.mkdirSync(locDir, { recursive: true });
      const locFile = path.join(
        locDir,
        `${sub.id}-features_${locale}.generated.ts`,
      );
      fs.writeFileSync(locFile, writeSubclassLocalizationStub(sub, locale));
    }
    console.log(
      `✓ loc (en/es) → ${path.join(LOC_OUT, sub.classId, "subclasses", sub.id)}`,
    );
  }
}
