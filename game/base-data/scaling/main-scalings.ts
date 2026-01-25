import { registerScaling } from "@/game/registries/resource-scaling.registry";
import { getProficiencyBonus } from "@/game/mechanics/abilities-modifiers";
import { getTotalCharacterLevel } from "@/game/mechanics/character-multiclassing";
import { getClassInstanceByTemplateId } from "@/game/registries/classes.registry";
import { getAbilityModifier } from "@/game/mechanics/abilities-modifiers";

export function registerMainScalings() {
  registerScaling("PB", ({ character }) => getProficiencyBonus(character));

  registerScaling("character-level", ({ character }) =>
    getTotalCharacterLevel(character.classes),
  );

  registerScaling("class-level", ({ character, sourceId }) => {
    if (sourceId === undefined) return 0;

    const sourceClass = getClassInstanceByTemplateId(
      character.classes,
      sourceId,
    );

    if (sourceClass === undefined) return 0;

    return sourceClass.level;
  });

  //#region Ability Score Scalers

  registerScaling("STR", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.STR.value), 1),
  );

  registerScaling("DEX", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.DEX.value), 1),
  );

  registerScaling("CON", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.CON.value), 1),
  );

  registerScaling("INT", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.INT.value), 1),
  );

  registerScaling("WIS", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.WIS.value), 1),
  );

  registerScaling("CHA", ({ character }) =>
    Math.max(getAbilityModifier(character.baseAbilityScores.CHA.value), 1),
  );

  registerScaling("spellcasting", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.CHA.value),
  );
  //#endregion
}
