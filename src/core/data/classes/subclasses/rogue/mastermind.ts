import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const MASTERMIND: SubclassTemplate = {
  id: "mastermind",
  classId: "rogue",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "master_of_intrigue",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "mimic_speech_patterns" }],
        tags: ["proficiency", "tool", "language", "roleplay"],
      },
      {
        id: "master_of_tactics",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "master_of_tactics" }],
        tags: ["utility", "advantage"],
      },
    ],

    9: [
      {
        id: "insightful_manipulator",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "insightful_manipulator" }],
        tags: ["roleplay", "utility"],
      },
    ],

    13: [
      {
        id: "misdirection",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "misdirection" }],
        tags: ["defense", "reaction"],
      },
    ],

    17: [
      {
        id: "soul_of_deceit",
        source: "subclass" as const,
        level: 17,
        tags: ["passive", "roleplay", "defense"],
      },
    ],
  },
};
