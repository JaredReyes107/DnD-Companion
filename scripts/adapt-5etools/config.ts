export function toFeatureId(name: string, className: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");

  // Disambiguate IDs that collide across classes
  // e.g. "evasion" exists on both Monk and Rogue
  const DISAMBIGUATE: Record<string, string> = {
    evasion_monk: "evasion_monk",
    evasion_rogue: "evasion_rogue",
    extra_attack_monk: "extra_attack_monk",
    extra_attack_ranger: "extra_attack_ranger",
    // add as needed
  };

  const candidate = `${base}_${className.toLowerCase()}`;
  return DISAMBIGUATE[candidate] ?? base;
}

export function toClassId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "_");
}

export function toAbilityId(ability: string): string {
  return ability.toUpperCase() as "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
}

export function toCasterProgression(
  progression: string | undefined,
): "full" | "half" | "third" | undefined {
  const map: Record<string, "full" | "half" | "third"> = {
    full: "full",
    "1/2": "half",
    "1/3": "third",
  };
  return progression ? map[progression] : undefined;
}

/**
 * Converts a subclass shortName + className to your snake_case subclass ID.
 * 5etools shortNames are often display strings like "Champion" or "Battle Master".
 */
export function toSubclassId(shortName: string, _className: string): string {
  return shortName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

/**
 * Maps 5etools source abbreviations to your source strings.
 * Matches the `source` field on SubclassTemplate.
 */
export function sourceLabel(source: string): string {
  const MAP: Record<string, string> = {
    PHB: "Player's Handbook",
    XGE: "Xanathar's Guide to Everything",
    TCE: "Tasha's Cauldron of Everything",
    SCAG: "Sword Coast Adventurer's Guide",
    MOT: "Mythic Odysseys of Theros",
    UA: "Unearthed Arcana",
  };
  return MAP[source] ?? source;
}
