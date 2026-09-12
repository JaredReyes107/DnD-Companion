import { CheckNode } from "@/core/entities/rules/check/check-node";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";

// Root nodes per ability, one tree for saves and one for skill checks.
// Everything else in each category hangs off these.
export const SAVING_THROW_ABILITY_NODES: Record<string, CheckNode> =
  Object.fromEntries(
    ABILITIES.map((ability) => [
      `savingThrow.${ability}`,
      {
        id: `savingThrow.${ability}`,
        category: "savingThrow" as const,
        parentIds: [],
        ability,
      },
    ]),
  );

export const SKILL_CHECK_ABILITY_NODES: Record<string, CheckNode> =
  Object.fromEntries(
    ABILITIES.map((ability) => [
      `skillCheck.${ability}`,
      {
        id: `skillCheck.${ability}`,
        category: "skillCheck" as const,
        parentIds: [],
        ability,
      },
    ]),
  );
