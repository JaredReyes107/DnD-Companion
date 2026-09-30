import { StatModifierTemplate } from "@/core/entities/rules/stats.types";
import { getProficiencyBonus } from "@/core/rules/character/abilities-modifiers";
import { SKILL_NODES } from "@/core/data/rules/checks/skill-nodes";

export const EXPERTISE_MODIFIERS: Record<string, StatModifierTemplate> =
  Object.fromEntries(
    Object.keys(SKILL_NODES).map((nodeId) => [
      `expertise_${nodeId}`,
      {
        id: `expertise_${nodeId}`,
        sourceId: "expertise",
        statModel: { type: "check", nodeId },
        mode: "add",
        value: (character) => getProficiencyBonus(character),
      },
    ]),
  );
