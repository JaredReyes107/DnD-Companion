import { FiveEToolsEntry } from "../types/5etools.types";

export function extractDescription(entries: FiveEToolsEntry[]): string {
  return entries
    .map((entry) => {
      if (typeof entry === "string") {
        // Strip 5etools inline tags: {@spell fireball} → "fireball"
        return entry.replace(/\{@\w+\s([^}|]+)[^}]*\}/g, "$1");
      }
      if (typeof entry === "object" && entry !== null) {
        if ("entries" in entry && Array.isArray(entry.entries)) {
          return extractDescription(entry.entries as FiveEToolsEntry[]);
        }
        if ("items" in entry && Array.isArray(entry.items)) {
          return extractDescription(entry.items as FiveEToolsEntry[]);
        }
      }
      return "";
    })
    .filter(Boolean)
    .join(" ")
    .trim();
}
