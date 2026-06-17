import * as fs from "fs";
import * as path from "path";
import { parseClass } from "./parsers/parseClass";
import { parseSubclasses } from "./parsers/parseSubclass";
import { writeClassTemplate } from "./writers/writeClassTemplate";
import { writeSubclassTemplate } from "./writers/writeSubclassTemplate";
import {
  buildClassLocalizationFiles,
  buildSubclassLocalizationFiles,
} from "./writers/writeLocalization";

// ─────────────────────────────────────────────────────────────────────────────
// Output paths
//
// Input:      5etools-data/{class}.json          (gitignored, downloaded manually)
// Classes:    src/core/data/classes/
// Subclasses: src/core/data/classes/subclasses/{classId}/
// Loc:        src/services/localization/game/classes/{classId}/{locale}/
//             src/services/localization/game/classes/{classId}/subclasses/{subclassId}/{locale}/
// ─────────────────────────────────────────────────────────────────────────────

const INPUT_DIR    = path.resolve(__dirname, "../../5etools-data");
const CLASS_OUT    = path.resolve(__dirname, "../../src/core/data/classes");
const SUBCLASS_OUT = path.resolve(__dirname, "../../src/core/data/classes/subclasses");
const LOC_OUT      = path.resolve(__dirname, "../../src/services/localization/game/classes");

const LOCALES = ["en", "es"] as const;

const inputFile = process.argv[2];
const mode      = process.argv[3] ?? "all"; // "class" | "subclass" | "all"

if (!inputFile) {
  console.error(
    "Usage: ts-node --project tsconfig.scripts.json scripts/adapt-5etools/index.ts <file.json> [class|subclass|all]",
  );
  process.exit(1);
}

const raw  = fs.readFileSync(path.join(INPUT_DIR, inputFile), "utf-8");
const data = JSON.parse(raw);

// ─────────────────────────────────────────────────────────────────────────────
// Class mode
// ─────────────────────────────────────────────────────────────────────────────

if (mode === "class" || mode === "all") {
  const classes = parseClass(data);

  for (const cls of classes) {
    // ClassTemplate file
    const classFile = path.join(CLASS_OUT, `${cls.id}.ts`);
    fs.mkdirSync(path.dirname(classFile), { recursive: true });
    fs.writeFileSync(classFile, writeClassTemplate(cls));
    console.log(`✓ class      → ${classFile}`);

    // Localization — 4 files × 2 locales, under {classId}/{locale}/
    for (const locale of LOCALES) {
      const locDir = path.join(LOC_OUT, cls.id, locale);
      fs.mkdirSync(locDir, { recursive: true });

      const files = buildClassLocalizationFiles(cls, locale);
      for (const file of Object.values(files)) {
        const outPath = path.join(locDir, file.fileName);
        fs.writeFileSync(outPath, file.content);
      }
    }
    console.log(`✓ loc (en/es) → ${path.join(LOC_OUT, cls.id)}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Subclass mode
// ─────────────────────────────────────────────────────────────────────────────

if (mode === "subclass" || mode === "all") {
  const subclasses = parseSubclasses(data);

  for (const sub of subclasses) {
    // SubclassTemplate file
    const subDir = path.join(SUBCLASS_OUT, sub.classId);
    fs.mkdirSync(subDir, { recursive: true });

    const subFile = path.join(subDir, `${sub.id}.ts`);
    fs.writeFileSync(subFile, writeSubclassTemplate(sub));
    console.log(`✓ subclass   → ${subFile}`);

    // Localization — 4 files × 2 locales, under {classId}/subclasses/{subclassId}/{locale}/
    for (const locale of LOCALES) {
      const locDir = path.join(LOC_OUT, sub.classId, "subclasses", sub.id, locale);
      fs.mkdirSync(locDir, { recursive: true });

      const files = buildSubclassLocalizationFiles(sub, locale);
      for (const file of Object.values(files)) {
        const outPath = path.join(locDir, file.fileName);
        fs.writeFileSync(outPath, file.content);
      }
    }
    console.log(
      `✓ loc (en/es) → ${path.join(LOC_OUT, sub.classId, "subclasses", sub.id)}`,
    );
  }
}
