import { ActionInstance } from "@/core/entities/actions/action-instance";

export const INFUSIONS_ACTIONS: Record<string, ActionInstance> = {
  infuse_arcane_propulsion_armor: {
    id: "infuse_arcane_propulsion_armor",
    sourceId: "arcane_propulsion_armor",
    boards: ["exploration"],
    duration: { kind: "instantaneous" }, // Applied during a
    // long rest, not an in-combat activation
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_armor_of_magical_strength: {
    id: "infuse_armor_of_magical_strength",
    sourceId: "armor_of_magical_strength",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_boots_of_the_winding_path: {
    id: "infuse_boots_of_the_winding_path",
    sourceId: "boots_of_the_winding_path",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_enhanced_arcane_focus: {
    id: "infuse_enhanced_arcane_focus",
    sourceId: "enhanced_arcane_focus",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_enhanced_defense: {
    id: "infuse_enhanced_defense",
    sourceId: "enhanced_defense",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_enhanced_weapon: {
    id: "infuse_enhanced_weapon",
    sourceId: "enhanced_weapon",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_helm_of_awareness: {
    id: "infuse_helm_of_awareness",
    sourceId: "helm_of_awareness",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_homunculus_servant: {
    id: "infuse_homunculus_servant",
    sourceId: "homunculus_servant",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_mind_sharpener: {
    id: "infuse_mind_sharpener",
    sourceId: "mind_sharpener",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_radiant_weapon: {
    id: "infuse_radiant_weapon",
    sourceId: "radiant_weapon",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_repeating_shot: {
    id: "infuse_repeating_shot",
    sourceId: "repeating_shot",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_replicate_magic_item: {
    id: "infuse_replicate_magic_item",
    sourceId: "replicate_magic_item",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_repulsion_shield: {
    id: "infuse_repulsion_shield",
    sourceId: "repulsion_shield",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_resistant_armor: {
    id: "infuse_resistant_armor",
    sourceId: "resistant_armor",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_returning_weapon: {
    id: "infuse_returning_weapon",
    sourceId: "returning_weapon",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },

  infuse_spell_refueling_ring: {
    id: "infuse_spell_refueling_ring",
    sourceId: "spell_refueling_ring",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "infused_items", amount: -1 },
    ],
  },
};
