import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ASTRAL_SELF: SubclassTemplate = {
  id: "astral_self",
  classId: "monk",
  source: "Tasha's Cauldron of Everything",
  progression: {
    3: ["monk.astral_self.arms_of_the_astral_self"],
    6: ["monk.astral_self.visage_of_the_astral_self"],
    11: ["monk.astral_self.body_of_the_astral_self"],
    17: ["monk.astral_self.awakened_astral_self"],
  },

  featuresByLevel: {
    3: [
      {
        id: "monk.astral_self.arms_of_the_astral_self",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "arms_of_the_astral_self" }],
        // TODO: Grant modifier: Uses WIS instead of STR on checks and STs, if higher
        tags: ["combat", "transformation"],
      },
    ],

    6: [
      {
        id: "monk.astral_self.visage_of_the_astral_self",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "astral_visage" }],
        tags: ["exploration", "combat", "senses"],
      },
    ],

    11: [
      {
        id: "monk.astral_self.body_of_the_astral_self",
        source: "subclass" as const,
        level: 11,
        // TODO: Override modifier of 'Arms of the Astral Self'
        grants: [{ type: "action", id: "deflect_energy" }],
        tags: ["passive", "defense"],
      },
    ],

    17: [
      {
        id: "monk.astral_self.awakened_astral_self",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "awakened_astral_self" }],
        // TODO: Extra Attack Override while active
        tags: ["combat", "transformation", "buff", "bonus-action"],
      },
    ],
  },
};
