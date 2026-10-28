import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { E } from "@/core/entities/rules/expr/expr";
import { P } from "@/core/entities/rules/predicate/predicate";

export const RUNE_KNIGHT_MODIFIERS: Record<string, ModifierTemplate> = {
  // Fire Rune passive
  fire_rune_tool_pb: {
    id: "fire_rune_tool_pb",
    sourceId: "fire_rune",
    statModel: { type: "check", nodeId: "tool.root" },
    type: ModifierType.ADDITIVE,
    tags: ["expertise"], // same stacking group — can't stack with expertise
    effectId: "fire_rune_tool_pb",
    condition: P.resourceAtLeast("fire_rune", 1),
    // targetNodeId is injected by the stat resolver for each concrete check node.
    // Return PB only when the character is proficient in that specific tool node.
    value: E.when({ type: "targetProficiency" }, E.pb(), E.n(0)),
  },

  // Frost Rune active
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
