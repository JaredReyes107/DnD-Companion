import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLAMOUR: SubclassTemplate = {
  id: "glamour",
  classId: "bard",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "mantle_of_inspiration",
        source: "subclass" as const,
        level: 3,
        actions: ["mantle_of_inspiration"],
        tags: [],
      },
      {
        id: "enthralling_performance",
        source: "subclass" as const,
        level: 3,
        actions: ["enthralling_performance"],
        resources: ["enthralling_performance"],
        tags: [],
      },
    ],

    6: [
      {
        id: "mantle_of_majesty",
        source: "subclass" as const,
        level: 6,
        actions: ["mantle_of_majesty"],
        resources: ["mantle_of_majesty"],
        tags: [],
      },
    ],

    14: [
      {
        id: "unbreakable_majesty",
        source: "subclass" as const,
        level: 14,
        actions: ["unbreakable_majesty"],
        resources: ["unbreakable_majesty"],
        tags: [],
      },
    ],
  },
};
