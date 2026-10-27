import { Character } from "@/core/entities/character/Character";
import { ModifierInstance } from "@/core/entities/modifiers/Modifier";
import { AdvantageInstance } from "@/core/entities/rules/advantage/advantage-instance";
import { getStatusTemplateById } from "@/core/data/registries/status.registry";
import { getModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { instantiateModifier } from "./modifiers-helper";
import { grantsOfType } from "@/core/rules/shared/grant-filters";

// A Set: conditions don't stack. Grappled from two sources is still one grapple.
function activeStatusIds(character: Character): Set<string> {
  return new Set(
    (character.combatState?.statuses ?? []).map((s) => s.statusId),
  );
}

export function getStatusModifierInstances(
  character: Character,
): ModifierInstance[] {
  const out: ModifierInstance[] = [];
  for (const statusId of activeStatusIds(character)) {
    for (const g of grantsOfType(
      getStatusTemplateById(statusId).grants,
      "modifier",
    )) {
      out.push(
        instantiateModifier(
          getModifierTemplateById(g.id),
          character,
          `status:${statusId}`,
        ),
      );
    }
  }
  return out;
}

export function getStatusAdvantageInstances(
  character: Character,
): AdvantageInstance[] {
  const out: AdvantageInstance[] = [];
  for (const statusId of activeStatusIds(character)) {
    for (const g of grantsOfType(
      getStatusTemplateById(statusId).grants,
      "advantage",
    )) {
      out.push({
        id: `status:${statusId}:${g.nodeId}:${g.polarity}`,
        nodeId: g.nodeId,
        polarity: g.polarity,
        sourceId: `status:${statusId}`,
      });
    }
  }
  return out;
}
