import { Character } from "@/game/types/instances/Character";
import { CharacterClasses } from "@/game/types/instances/character-classes";
import {
  SpellSlots,
  SpellSlotLevel,
} from "../types/instances/spell-slot-instance";
import {
  getClassTemplateById,
  getClassTemplatesFromCharacter,
} from "../registries/classes.registry";
import { CharacterResources } from "../types/instances/character-resources";

export function getTotalCasterLevel(
  characterClasses: CharacterClasses,
): number {
  let total = 0;

  for (const classId of characterClasses.order) {
    const classInstance = characterClasses.byId[classId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    if (!classTemplate?.spellcastingTemplate) continue;

    const progression = classTemplate.spellcastingTemplate.progression;

    switch (progression) {
      case "full":
        total += classInstance.level;
        break;
      case "half":
        total += Math.floor(classInstance.level / 2);
        break;
      case "third":
        total += Math.floor(classInstance.level / 3);
        break;
    }
  }

  return total;
}

const STANDARD_SPELL_SLOTS: number[][] = [
  // character level: 1 → 20
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
];

export function buildStandardSpellSlots(
  casterLevel: number,
): CharacterResources {
  const row = STANDARD_SPELL_SLOTS[casterLevel - 1];
  if (!row) return {};

  const slots: CharacterResources = {};

  row.forEach((max, index) => {
    const resourceId = "spell_slot_" + (index + 1);

    slots[resourceId] = {
      resourceId,
      max,
      current: max,
    };
  });

  return slots;
}

const PACT_MAGIC_TABLE: Record<
  number,
  { level: SpellSlotLevel; slots: number }
> = {
  1: { level: 1, slots: 1 },
  2: { level: 1, slots: 2 },
  3: { level: 2, slots: 2 },
  4: { level: 2, slots: 2 },
  5: { level: 3, slots: 2 },
  6: { level: 3, slots: 2 },
  7: { level: 4, slots: 2 },
  8: { level: 4, slots: 2 },
  9: { level: 5, slots: 2 },
};

export function buildPactMagicSlots(warlockLevel: number): SpellSlots {
  const row = PACT_MAGIC_TABLE[warlockLevel];
  if (!row) return {};

  return {
    [row.level]: {
      max: row.slots,
      used: 0,
    },
  };
}

export function buildSpellSlots(character: Character): CharacterResources {
  let characterSpellSlots: CharacterResources = {};

  const spellcastingTemplates = getClassTemplatesFromCharacter(
    character.classes,
  )
    .map((cls) => cls.spellcastingTemplate)
    .filter(Boolean);

  if (spellcastingTemplates.length > 0) {
    characterSpellSlots = {
      ...buildStandardSpellSlots(getTotalCasterLevel(character.classes)),
    };
  }

  /*
  if (template.kind === "pact") {
    slots = buildPactMagicSlots(classLevel);
  }
  */
  return characterSpellSlots;
}
