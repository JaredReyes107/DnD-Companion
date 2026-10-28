import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ANCESTRAL_GUARDIAN: SubclassTemplate = {
  id: "ancestral_guardian",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "ancestral_protectors",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "ancestral_protectors" }, //TODO: Encounter. Other Resistance.
          { type: "resource", id: "ancestral_protectors" },
        ],
        tags: ["combat", "debuff"],
      },
    ],

    6: [
      {
        id: "spirit_shield",
        source: "subclass",
        level: 6,
        grants: [{ type: "action", id: "spirit_shield" }], //TODO: Overrides. Description only
        tags: ["reaction", "defense"],
      },
    ],

    10: [
      {
        id: "consult_the_spirits",
        source: "subclass",
        level: 10,
        // TODO(spells): link to the real augury/clairvoyance spells once the spell registry exists.
        grants: [
          { type: "action", id: "consult_the_spirits_augury" },
          { type: "action", id: "consult_the_spirits_clairvoyance" },
          { type: "resource", id: "consult_the_spirits" },
        ],
        tags: ["utility", "spellcasting"],
      },
    ],

    14: [
      {
        id: "vengeful_ancestors",
        source: "subclass",
        level: 14,
        tags: ["combat", "reaction"],
        // TODO: Override. Description only, spirit_shield
      },
    ],
  },
};
