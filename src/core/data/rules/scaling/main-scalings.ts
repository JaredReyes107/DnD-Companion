import { registerScaling } from "@/core/data/registries/resource-scaling.registry";
import { getProficiencyBonus } from "@/core/rules/character/abilities-modifiers";
import { getTotalCharacterLevel } from "@/core/rules/character/character-multiclassing";
import { getClassInstanceByTemplateId } from "@/core/data/registries/classes.registry";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";

export function registerMainScalings() {
  registerScaling("PB", ({ character }) => getProficiencyBonus(character));

  registerScaling("character-level", ({ character }) =>
    getTotalCharacterLevel(character.classes),
  );

  registerScaling("class-level", ({ character, grantor, param }) => {
    // Explicit param wins — lets homebrew resources target a class independent of how they were granted.
    // Falls back to the grantor's own class/subclass when no param is given (the common case).
    const classId =
      param ??
      (grantor.system === "feature" &&
      (grantor.obtainedVia.via === "class" ||
        grantor.obtainedVia.via === "subclass")
        ? grantor.obtainedVia.classId
        : undefined);

    if (!classId) return 0;

    const sourceClass = getClassInstanceByTemplateId(
      character.classes,
      classId,
    );
    return sourceClass?.level ?? 0;
  });

  //#region Ability Score Scalers

  registerScaling("STR", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.STR),
  );

  registerScaling("DEX", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.DEX),
  );

  registerScaling("CON", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.CON),
  );

  registerScaling("INT", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.INT),
  );

  registerScaling("WIS", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.WIS),
  );

  registerScaling("CHA", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.CHA),
  );

  registerScaling("spellcasting", ({ character }) =>
    getAbilityModifier(character.baseAbilityScores.CHA),
  );
  //#endregion
}
