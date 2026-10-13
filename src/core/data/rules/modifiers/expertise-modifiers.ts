import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { getCheckNodeRegistry } from "@/core/data/registries/check-nodes.registry";
import { resolveCheckProficiency } from "@/core/rules/character/checks-helper";

export function buildExpertiseModifiers(): Record<string, ModifierTemplate> {
  const nodes = Object.values(getCheckNodeRegistry()).filter(
    (n) => n.category === "skillCheck" || n.category === "toolCheck",
  );

  return Object.fromEntries(
    nodes.map((node) => [
      `expertise_${node.id}`,
      {
        id: `expertise_${node.id}`,
        sourceId: "expertise",
        statModel: { type: "check", nodeId: node.id },
        type: ModifierType.ADDITIVE,
        tags: ["expertise"],
        value: (ctx) =>
          resolveCheckProficiency(ctx.character, node.id)
            ? ctx.resolved.proficiencyBonus
            : 0,
      } satisfies ModifierTemplate,
    ]),
  );
}
