import * as fs from "fs";
import * as path from "path";
import { parseClass } from "./parsers/parseClass";
import { parseSubclasses } from "./parsers/parseSubclass";
import { writeClassTemplate } from "./writers/writeClassTemplate";
import { writeSubclassTemplate } from "./writers/writeSubclassTemplate";
import {
  writeClassLocalizationFile,
  writeSubclassLocalizationFiles,
  subclassFileNames,
} from "./writers/writeLocalization";
import { toFileNameSegment } from "./config";

// ─────────────────────────────────────────────────────────────────────────────
// Output paths
//
// Input:       5etools-data/{class}.json                     (gitignored)
// Classes:     src/core/data/classes/
// Subclasses:  src/core/data/classes/subclasses/{classId}/
// Class loc:   src/services/localization/game/classes/{classId}/{locale}/
// Subclass loc:src/services/localization/game/classes/{classId}/subclasses/{subclassId}/{locale}/
//
// Naming convention: file names use dashes only. Variable names (inside
// generated .ts files) use underscores only. Both are derived from the
// same snake_case `id`, converted via toFileNameSegment() only at the
// point a file or directory name is built — never anywhere else.
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
  const results = parseClass(data);

  for (const { logic: cls, text } of results) {
    const classFileName = `${toFileNameSegment(cls.id)}.ts`;
    const classFile = path.join(CLASS_OUT, classFileName);
    fs.mkdirSync(path.dirname(classFile), { recursive: true });
    fs.writeFileSync(classFile, writeClassTemplate(cls));
    console.log(`✓ class      → ${classFile}`);

    // One features localization file per locale, under {classId}/{locale}/
    const classDirName = toFileNameSegment(cls.id);
    for (const locale of LOCALES) {
      const locDir = path.join(LOC_OUT, classDirName, locale);
      fs.mkdirSync(locDir, { recursive: true });

      const { fileName, content } = writeClassLocalizationFile(cls, text, locale);
      fs.writeFileSync(path.join(locDir, fileName), content);
    }
    console.log(`✓ loc (en/es) → ${path.join(LOC_OUT, classDirName)}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Subclass mode
// ─────────────────────────────────────────────────────────────────────────────

if (mode === "subclass" || mode === "all") {
  const results = parseSubclasses(data);

  for (const { logic: sub, text } of results) {
    const classDirName    = toFileNameSegment(sub.classId);
    const subclassDirName = toFileNameSegment(sub.id);

    const subDir = path.join(SUBCLASS_OUT, classDirName);
    fs.mkdirSync(subDir, { recursive: true });

    const subFileName = `${subclassDirName}.ts`;
    const subFile = path.join(subDir, subFileName);
    fs.writeFileSync(subFile, writeSubclassTemplate(sub));
    console.log(`✓ subclass   → ${subFile}`);

    for (const locale of LOCALES) {
      const locDir = path.join(LOC_OUT, classDirName, "subclasses", subclassDirName, locale);
      fs.mkdirSync(locDir, { recursive: true });

      const files = writeSubclassLocalizationFiles(sub, text, locale);
      const names = subclassFileNames(sub.id, locale);

      for (const key of Object.keys(files) as Array<keyof typeof files>) {
        fs.writeFileSync(path.join(locDir, names[key]), files[key]);
      }
    }
    console.log(
      `✓ loc (en/es) → ${path.join(LOC_OUT, classDirName, "subclasses", subclassDirName)}`,
    );
  }
}
