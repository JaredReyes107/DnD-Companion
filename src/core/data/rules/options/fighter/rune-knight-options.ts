import { OptionTemplate } from "@/core/entities/rules/option-template";

export const RUNE_KNIGHT_OPTIONS: Record<string, OptionTemplate> = {
  cloud_rune: {
    id: "cloud_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "utility"],
    // Passive: adv on Sleight of Hand + Deception while charge > 0
    // Active: reaction to redirect an attack (no modeled stat change — bookkeeping only)
    grants: [
      { type: "resource", id: "cloud_rune" },
      { type: "action", id: "cloud_rune" },
      {
        type: "advantage",
        nodeId: "sleight_of_hand",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "cloud_rune",
          minimum: 1,
        },
      },
      {
        type: "advantage",
        nodeId: "deception",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "cloud_rune",
          minimum: 1,
        },
      },
    ],
  },

  fire_rune: {
    id: "fire_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "utility"],
    // Passive: double PB on proficient tool checks while charge > 0 (modifier)
    // Active: on-hit reaction — no stat modifier (damage/restraint, out of scope)
    grants: [
      { type: "resource", id: "fire_rune" },
      { type: "action", id: "fire_rune" },
      { type: "modifier", id: "fire_rune_tool_pb" },
    ],
  },

  frost_rune: {
    id: "frost_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "exploration"],
    // Passive: adv on Animal Handling + Intimidation while charge > 0
    // Active: +2 to all STR/CON checks and saves for 10 min — runtime modifiers
    //         applied by the action; templates frost_rune_str/con_checks/saves
    //         are instantiated at action time, not here.
    grants: [
      { type: "resource", id: "frost_rune" },
      { type: "action", id: "frost_rune" },
      {
        type: "advantage",
        nodeId: "animal_handling",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "frost_rune",
          minimum: 1,
        },
      },
      {
        type: "advantage",
        nodeId: "intimidation",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "frost_rune",
          minimum: 1,
        },
      },
    ],
  },

  stone_rune: {
    id: "stone_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "roleplay"],
    // Passive: adv on Insight while charge > 0
    // Active: reaction to charm a creature — no stat modifier (out of scope)
    // Darkvision: not modeled (sensor, out of scope)
    grants: [
      { type: "resource", id: "stone_rune" },
      { type: "action", id: "stone_rune" },
      {
        type: "advantage",
        nodeId: "insight",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "stone_rune",
          minimum: 1,
        },
      },
    ],
  },

  hill_rune: {
    id: "hill_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat"],
    eligibility: { type: "minClassLevel", classId: "fighter", level: 7 },
    // Passive: adv on saves vs. poisoned — not modeled (no poisoned condition node yet)
    // Passive: resistance to poison damage — not modeled (damage resistance, out of scope)
    // Active: resistance to BPS damage for 1 min — not modeled (damage resistance, out of scope)
    // Grants resource + action for UI bookkeeping. Described in feature text.
    grants: [
      { type: "resource", id: "hill_rune" },
      { type: "action", id: "hill_rune" },
    ],
  },

  storm_rune: {
    id: "storm_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "exploration", "roleplay"],
    eligibility: { type: "minClassLevel", classId: "fighter", level: 7 },
    // Passive: adv on Arcana while charge > 0
    // Passive: can't be surprised — not modeled (sense/meta, out of scope)
    // Active: reaction to grant adv/disadv to rolls within 60 ft for 1 min
    //         Modeled as action for bookkeeping; per-roll application is manual
    grants: [
      { type: "resource", id: "storm_rune" },
      { type: "action", id: "storm_rune" },
      {
        type: "advantage",
        nodeId: "arcana",
        polarity: "advantage",
        condition: {
          type: "resourceAtLeast",
          resourceId: "storm_rune",
          minimum: 1,
        },
      },
    ],
  },
};
