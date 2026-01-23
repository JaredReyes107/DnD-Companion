import { registerScaling } from "@/game/registries/resource-scaling.registry";
import { getProficiencyBonus } from "@/game/rules/abilities-modifiers";
import { getTotalCharacterLevel } from "@/game/rules/character-multiclassing";
import { getClassInstanceByTemplateId } from "@/game/registries/classes.registry";
import { getAbilityModifier } from "@/game/rules/abilities-modifiers";

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
    Math.max(getAbilityModifier(character.abilityScores.STR.value), 1),
  );

  registerScaling("DEX", ({ character }) =>
    Math.max(getAbilityModifier(character.abilityScores.DEX.value), 1),
  );

  registerScaling("CON", ({ character }) =>
    Math.max(getAbilityModifier(character.abilityScores.CON.value), 1),
  );

  registerScaling("INT", ({ character }) =>
    Math.max(getAbilityModifier(character.abilityScores.INT.value), 1),
  );

  registerScaling("WIS", ({ character }) =>
    Math.max(getAbilityModifier(character.abilityScores.WIS.value), 1),
  );

  registerScaling("CHA", ({ character }) =>
    Math.max(getAbilityModifier(character.abilityScores.CHA.value), 1),
  );

  registerScaling("spellcasting", ({ character }) =>
    getAbilityModifier(character.abilityScores.CHA.value),
  );
  //#endregion
}
