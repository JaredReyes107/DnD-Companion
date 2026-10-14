import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { resolveCheckProficiency } from "@/core/rules/character/checks-helper";

/**
 * Rune Knight modifier templates.
 *
 * Passives use Condition.resourceAtLeast so they are active exactly while
 * the rune's resource has at least 1 charge — no lifecycle management needed.
 *
 * Fire Rune passive targets `tool.root` (the abstract parent of all tool check
 * nodes). The value formula uses `targetNodeId` (injected per-node by the stat
 * resolver) to add PB only for nodes the character is actually proficient in,
 * matching the rule "proficiency bonus is doubled for any ability check you
 * make that uses your proficiency with a tool".
 *
 * Frost Rune active targets ability-parent nodes (skillCheck.STR, etc.), which
 * propagates to all child skill nodes AND — via resolveCheckNodeAncestryChain —
 * to any skill that has had its ability overridden to STR/CON by the player.
 */
export const RUNE_KNIGHT_MODIFIERS: Record<string, ModifierTemplate> = {
  // ---------------------------------------------------------------------------
  // Fire Rune — passive (while fire_rune resource >= 1)
  // ---------------------------------------------------------------------------
  fire_rune_tool_pb: {
    id: "fire_rune_tool_pb",
    sourceId: "fire_rune",
    statModel: { type: "check", nodeId: "tool.root" },
    type: ModifierType.ADDITIVE,
    tags: ["expertise"], // same stacking group — can't stack with expertise
    effectId: "fire_rune_tool_pb",
    condition: { type: "resourceAtLeast", resourceId: "fire_rune", minimum: 1 },
    // targetNodeId is injected by the stat resolver for each concrete check node.
    // Return PB only when the character is proficient in that specific tool node.
    value: (ctx) =>
      ctx.targetNodeId &&
      resolveCheckProficiency(ctx.character, ctx.targetNodeId)
        ? ctx.resolved.proficiencyBonus
        : 0,
  },

  // ---------------------------------------------------------------------------
  // Frost Rune — active (+2 to STR and CON checks and saves, 10 min)
  //
  // Applied as runtime modifiers when the action is taken; the action effect
  // handler instantiates these templates with appropriate ExpiryConditions.
  // The ancestry chain propagation means one template per ability parent covers
  // all descendant skills, including any with runtime ability overrides.
  // ---------------------------------------------------------------------------
  frost_rune_str_checks: {
    id: "frost_rune_str_checks",
    sourceId: "frost_rune",
    statModel: { type: "check", nodeId: "skillCheck.STR" },
    type: ModifierType.ADDITIVE,
    effectId: "frost_rune_active",
    value: 2,
  },
  frost_rune_str_saves: {
    id: "frost_rune_str_saves",
    sourceId: "frost_rune",
    statModel: { type: "check", nodeId: "savingThrow.STR" },
    type: ModifierType.ADDITIVE,
    effectId: "frost_rune_active",
    value: 2,
  },
  frost_rune_con_checks: {
    id: "frost_rune_con_checks",
    sourceId: "frost_rune",
    statModel: { type: "check", nodeId: "skillCheck.CON" },
    type: ModifierType.ADDITIVE,
    effectId: "frost_rune_active",
    value: 2,
  },
  frost_rune_con_saves: {
    id: "frost_rune_con_saves",
    sourceId: "frost_rune",
    statModel: { type: "check", nodeId: "savingThrow.CON" },
    type: ModifierType.ADDITIVE,
    effectId: "frost_rune_active",
    value: 2,
  },
};
