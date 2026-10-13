import { registerScaling } from "@/core/data/registries/resource-scaling.registry";
import { getTotalCharacterLevel } from "@/core/rules/character/character-multiclassing";
import { getClassInstanceByTemplateId } from "@/core/data/registries/classes.registry";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import { resolveBase } from "@/core/entities/rules/resolved-base";
import { Character } from "@/core/entities/character/Character";

export function registerMainScalings() {
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

  const resolvedBase = (character: Character) => resolveBase(character).base;

  registerScaling(
    "PB",
    ({ character }) => resolvedBase(character).proficiencyBonus,
  );
  ABILITIES.forEach((ability) =>
    registerScaling(ability, ({ character }) =>
      Math.max(
        getAbilityModifier(resolvedBase(character).abilityScores[ability]),
        1,
      ),
    ),
  );
}
