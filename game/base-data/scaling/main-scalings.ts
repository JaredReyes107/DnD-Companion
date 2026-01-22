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
  registerScaling("STR:", ({ character }) =>
    getAbilityModifier(character.abilityScores.STR.value),
  );

  registerScaling("STR", ({ character }) =>
    getAbilityModifier(character.abilityScores.STR.value),
  );

  registerScaling("DEX", ({ character }) =>
    getAbilityModifier(character.abilityScores.DEX.value),
  );

  registerScaling("CON", ({ character }) =>
    getAbilityModifier(character.abilityScores.CON.value),
  );

  registerScaling("INT", ({ character }) =>
    getAbilityModifier(character.abilityScores.INT.value),
  );

  registerScaling("WIS", ({ character }) =>
    getAbilityModifier(character.abilityScores.WIS.value),
  );

  registerScaling("CHA", ({ character }) =>
    getAbilityModifier(character.abilityScores.CHA.value),
  );

  registerScaling("spellcasting", ({ character }) =>
    getAbilityModifier(character.abilityScores.CHA.value),
  );
  //#endregion
}
