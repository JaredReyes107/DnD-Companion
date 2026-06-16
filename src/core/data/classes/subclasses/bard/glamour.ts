import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLAMOUR: SubclassTemplate = {
  id: "glamour",
  classId: "bard",
  name: "College of Glamour",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "mantle_of_inspiration",
        label: "Mantle of Inspiration",
        source: "subclass" as const,
        level: 3,
        description: "",
        actions: ["mantle_of_inspiration"],
        tags: [],
      },
      {
        id: "enthralling_performance",
        label: "Enthralling Performance",
        source: "subclass" as const,
        level: 3,
        description: "",
        resources: ["enthralling_performance"],
        tags: [],
      },
    ],

    6: [
      {
        id: "mantle_of_majesty",
        label: "Mantle of Majesty",
        source: "subclass" as const,
        level: 6,
        description: "",
        actions: ["mantle_of_majesty"],
        resources: ["mantle_of_majesty"],
        tags: [],
      },
    ],

    14: [
      {
        id: "unbreakable_majesty",
        label: "Unbreakable Majesty",
        source: "subclass" as const,
        level: 14,
        description: "",
        actions: ["unbreakable_majesty"],
        resources: ["unbreakable_majesty"],
        tags: [],
      },
    ],
  },
};
