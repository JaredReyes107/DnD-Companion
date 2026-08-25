import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const INQUISITIVE: SubclassTemplate = {
  id: "inquisitive",
  classId: "rogue",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "ear_for_deceit",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "ear_for_deceit" }],
        tags: ["skill"],
      },
      {
        id: "eye_for_detail",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "eye_for_detail" }],
        tags: ["utility", "bonus-action"],
      },
      {
        id: "insightful_fighting",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "insightful_fighting" }],
        tags: ["combat", "buff", "bonus-action"],
      },
    ],

    9: [
      {
        id: "steady_eye",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "steady_eye" }],
        tags: ["skill"],
      },
    ],

    13: [
      {
        id: "unerring_eye",
        source: "subclass" as const,
        level: 13,
        grants: [
          { type: "action", id: "unerring_eye" },
          { type: "resource", id: "unerring_eye" },
        ],
        tags: ["utility", "senses"],
      },
    ],

    17: [
      {
        id: "eye_for_weakness",
        source: "subclass" as const,
        level: 17,
        tags: ["combat", "damage"],
        // TODO: Override insightful_fighting: Extra damage
      },
    ],
  },
};
