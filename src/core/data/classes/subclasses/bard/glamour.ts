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
        grants: [{ type: "action", id: "mantle_of_inspiration"}],
        tags: [],
      },
      {
        id: "enthralling_performance",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "enthralling_performance"}, { type: "resource", id: "enthralling_performance"}],
        tags: [],
      },
    ],

    6: [
      {
        id: "mantle_of_majesty",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "mantle_of_majesty"}, { type: "resource", id: "mantle_of_majesty"}],
        tags: [],
      },
    ],

    14: [
      {
        id: "unbreakable_majesty",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "unbreakable_majesty"}, { type: "resource", id: "unbreakable_majesty"}],
        tags: [],
      },
    ],
  },
};
