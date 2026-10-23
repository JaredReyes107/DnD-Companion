import { getOverrideById } from "@/core/data/registries/overrides.registry";
import { Character } from "@/core/entities/character/Character";
import { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { getOverridesFromChoices } from "../character/choices-helper";
import { getActiveFeatures } from "../character/features-helper";
import { grantsOfType } from "../shared/grant-filters";

export type OverrideContext = { active: OverrideTemplate[] };

export function buildOverrideContext(
  character: Character,
  extraOverrideIds: readonly string[] = [], // table-wide rules; owner decided later
): OverrideContext {
  const ids = new Set<string>([
    ...getActiveFeatures(character).flatMap((f) =>
      grantsOfType(f.grants, "override").map((g) => g.id),
    ),
    ...getOverridesFromChoices(character),
    ...extraOverrideIds,
  ]);
  return { active: [...ids].map(getOverrideById) };
}
