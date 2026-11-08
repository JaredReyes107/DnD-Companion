import fs from "node:fs";
import path from "node:path";

type OwnerKind = "class" | "subclass";

type PlannedFeature = {
  id: string;
  level: number;
  appliesTo?: "primary" | "multiclass";
  source: "class" | "subclass";
};

type OwnerPlan = {
  kind: OwnerKind;
  filePath: string;
  ownerId: string;
  ownerLabel: string;
  levels: Record<number, PlannedFeature[]>;
  unsupported: string[];
};

const ROOT_DIR = path.resolve(__dirname, "..");
const CLASSES_DIR = path.join(ROOT_DIR, "src/core/data/classes");

function matchBalanced(
  text: string,
  open: string,
  close: string,
  startIndex: number,
): number {
  let depth = 0;
  let inString: string | null = null;
  let escaped = false;

  for (let index = startIndex; index < text.length; index++) {
    const char = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      continue;
    }

    if (char === open) {
      depth += 1;
    } else if (char === close) {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function splitTopLevel(value: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = "";
  let depthBraces = 0;
  let depthBrackets = 0;
  let depthParens = 0;
  let inString: string | null = null;
  let escaped = false;

  for (let index = 0; index < value.length; index++) {
    const char = value[index];

    if (inString) {
      current += char;
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      current += char;
      continue;
    }

    if (char === "{") depthBraces += 1;
    if (char === "[") depthBrackets += 1;
    if (char === "(") depthParens += 1;
    if (char === "}") depthBraces -= 1;
    if (char === "]") depthBrackets -= 1;
    if (char === ")") depthParens -= 1;

    if (
      char === delimiter &&
      depthBraces === 0 &&
      depthBrackets === 0 &&
      depthParens === 0
    ) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim().length > 0) {
    result.push(current.trim());
  }

  return result.filter((item) => item.length > 0);
}

function readStringProperty(
  objectText: string,
  propertyName: string,
): string | undefined {
  const match = new RegExp(
    `${propertyName}\\s*:\\s*(?:"([^"]+)"|'([^']+)')`,
    "m",
  ).exec(objectText);

  return match ? (match[1] ?? match[2]) : undefined;
}

function readNumericProperty(
  objectText: string,
  propertyName: string,
): number | undefined {
  const match = new RegExp(`${propertyName}\\s*:\\s*(-?\\d+)`, "m").exec(
    objectText,
  );
  return match ? Number(match[1]) : undefined;
}

function parseFeatureObject(itemText: string): PlannedFeature | undefined {
  const id = readStringProperty(itemText, "id");
  const source = readStringProperty(itemText, "source");
  const rawLevel = readNumericProperty(itemText, "level");
  const appliesTo = readStringProperty(itemText, "appliesTo");

  if (!id || !source || !Number.isFinite(rawLevel)) {
    return undefined;
  }

  if (source !== "class" && source !== "subclass") {
    return undefined;
  }

  const level = rawLevel as number;

  return {
    id,
    level,
    appliesTo:
      appliesTo === "primary" || appliesTo === "multiclass"
        ? appliesTo
        : undefined,
    source,
  };
}

function getObjectLiteral(
  text: string,
  propertyName: string,
): string | undefined {
  const propertyPattern = new RegExp(`${propertyName}\\s*:\\s*{`, "m");
  const propertyMatch = propertyPattern.exec(text);
  if (!propertyMatch) return undefined;

  const startIndex = propertyMatch.index + propertyMatch[0].lastIndexOf("{");
  const endIndex = matchBalanced(text, "{", "}", startIndex);
  if (endIndex < 0) return undefined;

  return text.slice(startIndex + 1, endIndex);
}

function getOwnerPlan(filePath: string): OwnerPlan | undefined {
  const source = fs.readFileSync(filePath, "utf8");
  const declarationMatch =
    /export\s+const\s+([A-Za-z0-9_]+)\s*:\s*(ClassTemplate|SubclassTemplate)\s*=\s*\{/m.exec(
      source,
    );
  if (!declarationMatch) {
    return undefined;
  }

  const [, exportName, templateType] = declarationMatch;
  const braceStart = source.indexOf(
    "{",
    declarationMatch.index + declarationMatch[0].length - 1,
  );
  const braceEnd = matchBalanced(source, "{", "}", braceStart);
  if (braceEnd < 0) return undefined;

  const objectText = source.slice(braceStart + 1, braceEnd);
  const kind: OwnerKind =
    templateType === "SubclassTemplate" ? "subclass" : "class";
  const idValue = readStringProperty(objectText, "id");
  const classIdValue = readStringProperty(objectText, "classId");
  const ownerId =
    kind === "subclass" && classIdValue && idValue
      ? `${classIdValue}.${idValue}`
      : (idValue ?? exportName);

  const featuresObjectText = getObjectLiteral(objectText, "featuresByLevel");
  if (!featuresObjectText) {
    return {
      kind,
      filePath,
      ownerId,
      ownerLabel: ownerId,
      levels: {},
      unsupported: ["No featuresByLevel object literal."],
    };
  }

  const levels: Record<number, PlannedFeature[]> = {};
  const unsupported: string[] = [];

  const levelPattern = /(\d+)\s*:\s*\[/g;
  let levelMatch: RegExpExecArray | null;

  while ((levelMatch = levelPattern.exec(featuresObjectText)) !== null) {
    const level = Number(levelMatch[1]);
    const levelStart = featuresObjectText.indexOf(
      "[",
      levelMatch.index + levelMatch[0].length - 1,
    );
    if (levelStart < 0) {
      unsupported.push(`${ownerId}: missing array literal for level ${level}`);
      continue;
    }

    const levelEnd = matchBalanced(featuresObjectText, "[", "]", levelStart);
    if (levelEnd < 0) {
      unsupported.push(`${ownerId}: unclosed array literal at level ${level}`);
      continue;
    }

    const arrayText = featuresObjectText.slice(levelStart + 1, levelEnd);
    const entries = splitTopLevel(arrayText, ",");
    const parsedEntries: PlannedFeature[] = [];

    for (const item of entries) {
      const trimmed = item.trim();
      if (!trimmed) continue;

      if (trimmed.startsWith("{")) {
        const feature = parseFeatureObject(trimmed);
        if (feature) {
          parsedEntries.push(feature);
          continue;
        }
      }

      unsupported.push(
        `${ownerId}: unsupported feature at level ${level}: ${trimmed.slice(0, 120)}`,
      );
    }

    levels[level] = parsedEntries;
  }

  return {
    kind,
    filePath,
    ownerId,
    ownerLabel: ownerId,
    levels,
    unsupported,
  };
}

function getOwnerFiles(): string[] {
  const files: string[] = [];

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(".ts")) {
        files.push(fullPath);
      }
    }
  };

  walk(CLASSES_DIR);

  return files.filter((file) => !path.basename(file).startsWith("index."));
}

function printSummary(plans: OwnerPlan[]) {
  let totalFeatures = 0;
  let totalUnsupported = 0;

  console.log("[FeatureCodemod] Dry-run summary");
  console.log(`Scanned ${plans.length} owners.`);

  for (const plan of plans) {
    const levelKeys = Object.keys(plan.levels).map((key) => Number(key));
    const featureCount = Object.values(plan.levels).reduce(
      (sum, list) => sum + list.length,
      0,
    );
    totalFeatures += featureCount;
    totalUnsupported += plan.unsupported.length;

    console.log(
      `- ${plan.ownerLabel}: ${featureCount} feature entries across ${levelKeys.length} levels`,
    );

    const progressionPreview = Object.entries(plan.levels)
      .sort(([left], [right]) => Number(left) - Number(right))
      .map(([level, entries]) => {
        const refs = entries.map((entry) =>
          entry.appliesTo
            ? `{ id: "${entry.id}", appliesTo: "${entry.appliesTo}" }`
            : `"${entry.id}"`,
        );
        return `    ${level}: [${refs.join(", ")}]`;
      })
      .join("\n");

    if (progressionPreview) {
      console.log(`  Planned progression:\n${progressionPreview}`);
    }

    if (plan.unsupported.length > 0) {
      console.log(`  Manual follow-up needed (${plan.unsupported.length}):`);
      for (const note of plan.unsupported.slice(0, 5)) {
        console.log(`    - ${note}`);
      }
      if (plan.unsupported.length > 5) {
        console.log(`    ... and ${plan.unsupported.length - 5} more`);
      }
    }
  }

  console.log(`\nTotal feature entries: ${totalFeatures}`);
  console.log(`Total unsupported entries: ${totalUnsupported}`);
  console.log(
    "No files were written. Use --write only after review; this codemod is intentionally dry-run by default.",
  );
}

function main() {
  const args = process.argv.slice(2);
  const writeMode = args.includes("--write");
  const dryRunMode = args.includes("--dry-run") || !writeMode;

  if (writeMode) {
    console.warn(
      "[FeatureCodemod] --write is intentionally disabled in this scaffold. The codemod remains dry-run only until reviewed.",
    );
    process.exit(1);
  }

  if (!dryRunMode) {
    console.warn(
      "[FeatureCodemod] No mode was specified; defaulting to dry-run.",
    );
  }

  const ownerFiles = getOwnerFiles();
  const plans = ownerFiles
    .map((filePath) => getOwnerPlan(filePath))
    .filter((plan): plan is OwnerPlan => Boolean(plan));

  plans.sort((left, right) => left.ownerLabel.localeCompare(right.ownerLabel));
  printSummary(plans);
}

main();
