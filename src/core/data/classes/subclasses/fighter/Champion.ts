import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

/**
 * Champion — Fighter subclass (Player's Handbook)
 *
 * The Champion focuses on raw physical power, honing it to deadly perfection.
 * It is the simplest Fighter subclass and a good reference implementation
 * for the subclass data pattern.
 *
 * Features reference resources and actions by ID.
 * Those IDs must exist in their respective flat registries.
 * The Champion has no unique resources or actions — its features are passive.
 */
export const CHAMPION: SubclassTemplate = {
  id: "champion",
  classId: "fighter",
  name: "Champion",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "improved_critical",
        source: "subclass",
        level: 3,
        tags: ["passive", "combat"],
        // TODO: dice-roll hook (crit threshold override)
      },
    ],

    7: [
      {
        id: "remarkable_athlete",
        source: "subclass",
        level: 7,
        tags: ["passive", "ability-checks"],
        // TODO: proficiency partial bonus system
      },
    ],

    10: [
      {
        id: "additional_fighting_style",
        source: "subclass",
        level: 10,
        tags: ["passive", "build-choice"],
        // TODO: ASI / build-choice system
      },
    ],

    15: [
      {
        id: "superior_critical",
        source: "subclass",
        level: 15,
        tags: ["passive", "combat"],
        // TODO: dice-roll hook (crit threshold override)
      },
    ],

    18: [
      {
        id: "survivor",
        source: "subclass",
        level: 18,
        tags: ["passive", "healing", "combat"],
        // TODO: turn-start hook
      },
    ],
  },
};
