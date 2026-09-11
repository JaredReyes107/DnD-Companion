import { Character } from "@/core/entities/character/Character";
import { ResourceGrantor } from "@/core/entities/rules/grantor";
import { getSpellcastingEntries } from "@/core/entities/spellcasting/spellcasting";

export function getTotalPactCasterLevel(character: Character): number {
  return getSpellcastingEntries(character).reduce((total, entry) => {
    if (entry.spellcastingTemplate.kind !== "pact") return total;

    switch (entry.spellcastingTemplate.progression) {
      case "half":
        return total + Math.floor(entry.classInstance.level / 2);
      case "third":
        return total + Math.floor(entry.classInstance.level / 3);
      case "full":
      default:
        return total + entry.classInstance.level;
    }
  }, 0);
}

export function getPactCasterGrantors(character: Character): ResourceGrantor[] {
  return getSpellcastingEntries(character)
    .filter((entry) => entry.spellcastingTemplate.kind === "pact")
    .map((entry) => ({
      system: "feature" as const,
      featureId: "pact_slots",
      obtainedVia: {
        via: "class" as const,
        classId: entry.classInstance.classId,
      },
    }));
}
