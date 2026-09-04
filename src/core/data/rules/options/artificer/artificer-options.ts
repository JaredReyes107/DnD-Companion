import { OptionTemplate } from "@/core/entities/rules/option-template";

export const ARTIFICER_OPTIONS: Record<string, OptionTemplate> = {
  arcane_propulsion_armor: {
    id: "arcane_propulsion_armor",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "combat"],
    grants: [{ type: "action", id: "infuse_arcane_propulsion_armor" }],
    // TODO: Equipment. Add modifier to item
  },
  armor_of_magical_strength: {
    id: "armor_of_magical_strength",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment"],
    grants: [{ type: "action", id: "infuse_armor_of_magical_strength" }],
    // TODO: Equipment. Add modifier to item
  },
  boots_of_the_winding_path: {
    id: "boots_of_the_winding_path",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "movement"],
    grants: [{ type: "action", id: "infuse_boots_of_the_winding_path" }],
    // TODO: Equipment. Add modifier to item
  },
  enhanced_arcane_focus: {
    id: "enhanced_arcane_focus",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "spellcasting"],
    grants: [{ type: "action", id: "infuse_enhanced_arcane_focus" }],
    // TODO: Equipment. Add modifier to item
  },
  enhanced_defense: {
    id: "enhanced_defense",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "defense"],
    grants: [{ type: "action", id: "infuse_enhanced_defense" }],
    // TODO: Equipment. Add modifier to item
  },
  enhanced_weapon: {
    id: "enhanced_weapon",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "combat"],
    grants: [{ type: "action", id: "infuse_enhanced_weapon" }],
    // TODO: Equipment. Add modifier to item
  },
  helm_of_awareness: {
    id: "helm_of_awareness",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "defense"],
    grants: [{ type: "action", id: "infuse_helm_of_awareness" }],
    // TODO: Equipment. Add modifier to item
  },
  homunculus_servant: {
    id: "homunculus_servant",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "summoning"],
    grants: [{ type: "action", id: "infuse_homunculus_servant" }],
    // TODO: Equipment. Add modifier to item
    // Also a full companion/second-actor case (own initiative slot,
    // shares turn order immediately after yours, default Dodge
    // behavior) — same class as Steel Defender, the second instance
    // of that exact shape within this one class.
  },
  mind_sharpener: {
    id: "mind_sharpener",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "spellcasting"],
    grants: [{ type: "action", id: "infuse_mind_sharpener" }],
    // TODO: Equipment. Add modifier to item
  },
  radiant_weapon: {
    id: "radiant_weapon",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "combat"],
    grants: [{ type: "action", id: "infuse_radiant_weapon" }],
    // TODO: Equipment. Add modifier to item
  },
  repeating_shot: {
    id: "repeating_shot",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "combat"],
    grants: [{ type: "action", id: "infuse_repeating_shot" }],
    // TODO: Equipment. Add modifier to item
  },
  replicate_magic_item: {
    id: "replicate_magic_item",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment"],
    grants: [{ type: "action", id: "infuse_replicate_magic_item" }],
    // TODO: Option Menu: Add item to inventory
    // TODO: This one CAN be picked multiple times
  },
  repulsion_shield: {
    id: "repulsion_shield",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "defense", "combat"],
    grants: [{ type: "action", id: "infuse_repulsion_shield" }],
    // TODO: Equipment. Add modifier to item
  },
  resistant_armor: {
    id: "resistant_armor",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "resistance"],
    grants: [{ type: "action", id: "infuse_resistant_armor" }],
    // TODO: Equipment. Add modifier to item
  },
  returning_weapon: {
    id: "returning_weapon",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "combat"],
    grants: [{ type: "action", id: "infuse_returning_weapon" }],
    // TODO: Equipment. Add modifier to item
  },
  spell_refueling_ring: {
    id: "spell_refueling_ring",
    poolIds: ["infusions_known"],
    tags: ["infusion", "equipment", "spellcasting"],
    grants: [{ type: "action", id: "infuse_spell_refueling_ring" }],
    // TODO: Equipment. Add modifier to item
  },
};
