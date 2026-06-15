// scripts/adapt-5etools/index.ts

import * as fs from "fs";
import * as path from "path";
import { parseClass } from "./parsers/parseClass";
import { writeClassTemplate } from "./writers/writeClassTemplate";
import { writeLocalizationStub } from "./writers/writeLocalization";

const INPUT_DIR = path.resolve(__dirname, "../../5etools-data"); // you put the JSONs here
const CLASS_OUT_DIR = path.resolve(__dirname, "../../src/core/data/classes");
const LOC_OUT_DIR = path.resolve(__dirname, "../../src/services/localization/game/features/by-class");

const inputFile = process.argv[2]; // e.g. "class-fighter.json"
if (!inputFile) {
  console.error("Usage: ts-node index.ts class-fighter.json");
  process.exit(1);
}

const raw = fs.readFileSync(path.join(INPUT_DIR, inputFile), "utf-8");
const data = JSON.parse(raw);

const classes = parseClass(data);

for (const cls of classes) {
  // Write ClassTemplate
  const classFile = path.join(CLASS_OUT_DIR, `${cls.name}.generated.ts`);
  fs.writeFileSync(classFile, writeClassTemplate(cls));
  console.log(`✓ Wrote ${classFile}`);

  // Write EN localization (names are already in English from 5etools)
  const enFile = path.join(LOC_OUT_DIR, `en-${cls.id}-features.generated.ts`);
  fs.writeFileSync(enFile, writeLocalizationStub(cls, "en"));
  console.log(`✓ Wrote ${enFile}`);

  // Write ES stub (empty names — fill manually)
  const esFile = path.join(LOC_OUT_DIR, `es-${cls.id}-features.generated.ts`);
  fs.writeFileSync(esFile, writeLocalizationStub(cls, "es"));
  console.log(`✓ Wrote ${esFile}`);
}
