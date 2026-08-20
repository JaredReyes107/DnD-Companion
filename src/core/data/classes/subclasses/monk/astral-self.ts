import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ASTRAL_SELF: SubclassTemplate = {
  id: "astral_self",
  classId: "monk",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "arms_of_the_astral_self",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "arms_of_the_astral_self" }],
        // TODO: Grant modifier: Uses WIS instead of STR on checks and STs, if higher
        tags: ["combat", "transformation"],
      },
    ],

    6: [
      {
        id: "visage_of_the_astral_self",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "astral_visage" }],
        tags: ["exploration", "combat", "senses"],
      },
    ],

    11: [
      {
        id: "body_of_the_astral_self",
        source: "subclass" as const,
        level: 11,
        // TODO: Override modifier of 'Arms of the Astral Self'
        grants: [{ type: "action", id: "deflect_energy" }],
        tags: ["passive", "defense"],
      },
    ],

    17: [
      {
        id: "awakened_astral_self",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "awakened_astral_self" }],
        // TODO: Extra Attack Override while active
        tags: ["combat", "transformation", "buff", "bonus-action"],
      },
    ],
  },
};
