import { getProficiencyBonus } from "@/core/rules/character/abilities-modifiers";
import { SKILL_NODES } from "@/core/data/rules/checks/skill-nodes";
import {
  ModifierTemplate,
  ModifierType,
  ModifierEvalContext,
} from "@/core/entities/modifiers/Modifier";

export const EXPERTISE_MODIFIERS: Record<string, ModifierTemplate> =
  Object.fromEntries(
    Object.keys(SKILL_NODES).map((nodeId) => [
      `expertise_${nodeId}`,
      {
        id: `expertise_${nodeId}`,
        sourceId: "expertise",
        statModel: { type: "check", nodeId },
        type: ModifierType.ADDITIVE,
        value: (context: ModifierEvalContext) =>
          getProficiencyBonus(context.character),
      },
    ]),
  );
