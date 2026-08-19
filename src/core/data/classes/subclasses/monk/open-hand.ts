import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const OPEN_HAND: SubclassTemplate = {
  id: "open_hand",
  classId: "monk",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "open_hand_technique",
        source: "subclass",
        level: 3,
        grants: [{ type: "action", id: "open_hand_technique" }],
        tags: ["combat", "debuff"],
      },
    ],

    6: [
      {
        id: "wholeness_of_body",
        source: "subclass",
        level: 6,
        grants: [
          { type: "action", id: "wholeness_of_body" },
          { type: "resource", id: "wholeness_of_body" },
        ],
        tags: ["healing", "self-sustain", "resource"],
      },
    ],

    11: [
      {
        id: "tranquility",
        source: "subclass",
        level: 11,
        tags: ["passive", "defense"],
        // TODO: gain effect of sanctuary spell at end of a long rest,
        // until start of next long rest
      },
    ],

    17: [
      {
        id: "quivering_palm",
        source: "subclass",
        level: 17,
        grants: [
          { type: "action", id: "quivering_palm_mark" },
          { type: "action", id: "quivering_palm_trigger" },
        ],
        tags: ["combat"],
      },
    ],
  },
};
