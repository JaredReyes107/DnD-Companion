import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ELOQUENCE: SubclassTemplate = {
  id: "eloquence",
  classId: "bard",
  name: "College of Eloquence",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "silver_tongue",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["passive", "social"],
      },
      {
        id: "unsettling_words",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        actions: ["unsettling_words"],
        tags: ["combat", "debuff"],
      },
    ],

    6: [
      {
        id: "unfailing_inspiration",
        label: "Unfailing Inspiration",
        source: "subclass" as const,
        level: 6,
        description: "",
        tags: ["passive", "utility"],
      },
      {
        id: "universal_speech",
        label: "Universal Speech",
        source: "subclass" as const,
        level: 6,
        description: "",
        resources: ["universal_speech"],
        actions: ["universal_speech"],
        tags: [],
      },
    ],

    14: [
      {
        id: "infectious_inspiration",
        label: "Infectious Inspiration",
        source: "subclass" as const,
        level: 14,
        description: "",
        resources: ["infectious_inspiration"],
        actions: ["infectious_inspiration"],
        tags: ["utility"],
      },
    ],
  },
};
