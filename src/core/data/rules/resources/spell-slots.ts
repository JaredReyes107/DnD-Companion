import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SPELL_SLOTS: Record<string, ResourceTemplate> = {
  spell_slot_1: {
    id: "spell_slot_1",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],

    tags: ["spellcasting"],
  },
  spell_slot_2: {
    id: "spell_slot_2",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_3: {
    id: "spell_slot_3",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_4: {
    id: "spell_slot_4",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_5: {
    id: "spell_slot_5",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_6: {
    id: "spell_slot_6",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_7: {
    id: "spell_slot_7",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_8: {
    id: "spell_slot_8",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
  spell_slot_9: {
    id: "spell_slot_9",
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
        obtainedVia: {
          via: "class",
          classId: "wizard", //TODO: Change depending on the source of the Spellcasting feature
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } }, //TODO: Add actual scaling
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },
};
