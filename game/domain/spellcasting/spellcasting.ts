import { Character } from "@/game/domain/character/Character";
import { CharacterClasses } from "@/game/domain/character/character-classes";
import { SpellSlotLevel } from "@/game/domain/spellcasting/spell-slot-instance";
import {
  getClassInstanceByTemplateId,
  getClassTemplateById,
  getClassTemplatesFromCharacter,
} from "@/game/data/registries/classes.registry";
import { CharacterResources } from "@/game/domain/resources/character-resources";
//import { ClassInstance } from "../types/instances/class-instance";
import { getSpellcastingTemplateByClassTemplateId } from "@/lib/helpers/spellcasting-helper";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/game/mechanics/abilities-modifiers";

export function hasSpellcasting(character: Character): boolean {
  let isSpellcaster = false;

  const characterClasses = character.classes;

  for (const classId of characterClasses.order) {
    const classInstance = characterClasses.byId[classId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    if (!classTemplate?.spellcastingTemplate) continue;
    else isSpellcaster = true;
  }

  return isSpellcaster;
}

export function getTotalCasterLevel(
  characterClasses: CharacterClasses,
): number {
  let total = 0;

  //TODO: Take into account all the character features. Not only classes.
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
        total += Math.ceil(classInstance.level / 2);
        break;
      case "third":
        total += Math.ceil(classInstance.level / 3);
        break;
    }
  }

  return total;
}

//TODO: Make it per class
export function getSpellAttackModifier(character: Character): number {
  if (!hasSpellcasting(character)) {
    return 0;
  }

  //Replace the function's argument for classInstance.id
  const spellcastingTemplate = getSpellcastingTemplateByClassTemplateId(
    character.classes.byId[character.classes.order[0]].classId,
  );

  const spellcastingAbility = spellcastingTemplate.ability;
  //TODO: [Modifiers] Replace attribute with derived data
  const spellcastingAbilityScore =
    character.baseAbilityScores[spellcastingAbility];

  //TODO: [Modifiers] Replace with derived data resolver
  const baseSpellAttackModifier =
    getAbilityModifier(spellcastingAbilityScore) +
    getProficiencyBonus(character);

  return baseSpellAttackModifier;
}

//TODO: Make it per class
export function getSpellSaveDC(character: Character): number {
  if (!hasSpellcasting(character)) {
    return 0;
  }

  //Replace the function's argument for classInstance.id
  const spellcastingTemplate = getSpellcastingTemplateByClassTemplateId(
    character.classes.byId[character.classes.order[0]].classId,
  );

  const spellcastingAbility = spellcastingTemplate.ability;
  //TODO: [Modifiers] Replace attribute with derived data
  const spellcastingAbilityScore =
    character.baseAbilityScores[spellcastingAbility];

  //TODO: [Modifiers] Replace with derived data resolver
  const baseSpellAttackModifier =
    getAbilityModifier(spellcastingAbilityScore) +
    getProficiencyBonus(character) +
    8;

  return baseSpellAttackModifier;
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

function buildStandardSpellSlots(casterLevel: number): CharacterResources {
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
  10: { level: 5, slots: 2 },
  11: { level: 5, slots: 3 },
  12: { level: 5, slots: 3 },
  13: { level: 5, slots: 3 },
  14: { level: 5, slots: 3 },
  15: { level: 5, slots: 3 },
  16: { level: 5, slots: 3 },
  17: { level: 5, slots: 4 },
  18: { level: 5, slots: 4 },
  19: { level: 5, slots: 4 },
  20: { level: 5, slots: 4 },
};

function buildPactMagicSlots(warlockLevel: number): CharacterResources {
  const row = PACT_MAGIC_TABLE[warlockLevel];
  if (!row) return {};

  return {
    ["pact_slots"]: {
      resourceId: "pact_slots",
      max: row.slots,
      current: row.slots,
    },
  };
}

function buildMysticArcanum(warlockLevel: number): CharacterResources {
  const mysticArcanum: CharacterResources = {};

  let leftoverLevels = warlockLevel - 10;
  let counter = 6;

  while (leftoverLevels > 0 && counter <= 9) {
    const resourceId = "mystic_arcanum_" + counter;

    mysticArcanum[resourceId] = {
      resourceId,
      max: 1,
      current: 1,
    };

    leftoverLevels -= 2;
    counter++;
  }

  return mysticArcanum;
}

export function buildSpellSlots(character: Character): CharacterResources {
  let characterSpellSlots: CharacterResources = {};

  const spellcastingTemplates = getClassTemplatesFromCharacter(
    character.classes,
  )
    .map((cls) => cls.spellcastingTemplate && cls.id != "warlock_spellcasting")
    .filter(Boolean);

  if (spellcastingTemplates.length > 0) {
    characterSpellSlots = {
      ...buildStandardSpellSlots(getTotalCasterLevel(character.classes)),
    };
  }

  const warlockSpellcastingTemplate = getClassTemplatesFromCharacter(
    character.classes,
  )
    .map((cls) => cls.id == "warlock_spellcasting")
    .filter(Boolean);
  const warlockClassInstance = getClassInstanceByTemplateId(
    character.classes,
    "warlock",
  );

  if (warlockSpellcastingTemplate && warlockClassInstance) {
    characterSpellSlots = {
      ...characterSpellSlots,
      ...buildPactMagicSlots(warlockClassInstance.level),
      ...buildMysticArcanum(warlockClassInstance.level),
    };
  }

  return characterSpellSlots;
}
