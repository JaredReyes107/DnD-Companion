import { ActionInstance } from "@/core/entities/actions/action-instance";

export const HEXBLADE_ACTIONS: Record<string, ActionInstance> = {
  hex_warrior: {
    id: "hex_warrior",
    sourceId: "hexblade",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: Item. Any weapon but withouth 'two-handed' weapon tag you're proficient with:
    // Item Modifier: CHA for its attack/damage rolls, until your next long rest
  },

  hexblades_curse: {
    id: "hexblades_curse",
    sourceId: "hexblade",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "hexblades_curse",
        amount: -1,
      },
    ],
    // TODO: Enemy Modifier. Marks a creature within 30ft for 1 minute (ends early on
    // target/your death or your incapacitation)
  },

  accursed_specter: {
    id: "accursed_specter",
    sourceId: "hexblade",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onZeroHp"], // TODO: On Enemy. Speficially humanoid kill
    effects: [
      {
        type: "modifyResource",
        resourceId: "accursed_specter",
        amount: -1,
      },
    ],
    // TODO: Summon. 'Specter' from Monster Manual
  },

  armor_of_hexes: {
    id: "armor_of_hexes",
    sourceId: "hexblade",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"], // TODO: When cursed ENEMY hits
    effects: [],
  },

  master_of_hexes: {
    id: "master_of_hexes",
    sourceId: "hexblade",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    //TODO: Triggers on the cursed creature death
    effects: [],
    //TODO: Reapplies hexblades_curse modifier to a new target
  },
};
