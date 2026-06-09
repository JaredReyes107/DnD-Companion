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
        label: "Improved Critical",
        source: "subclass",
        level: 3,
        description:
          "Your weapon attacks score a critical hit on a roll of 19 or 20.",
        tags: ["passive", "combat"],
        // TODO: dice-roll hook (crit threshold override)
      },
    ],

    7: [
      {
        id: "remarkable_athlete",
        label: "Remarkable Athlete",
        source: "subclass",
        level: 7,
        description:
          "You can add half your proficiency bonus to any Strength, Dexterity, or Constitution check that doesn't already use your proficiency bonus.",
        tags: ["passive", "ability-checks"],
        // TODO: proficiency partial bonus system
      },
    ],

    10: [
      {
        id: "additional_fighting_style",
        label: "Additional Fighting Style",
        source: "subclass",
        level: 10,
        description:
          "You can choose a second option from the Fighting Style class feature.",
        tags: ["passive", "build-choice"],
        // TODO: ASI / build-choice system
      },
    ],

    15: [
      {
        id: "superior_critical",
        label: "Superior Critical",
        source: "subclass",
        level: 15,
        description:
          "Your weapon attacks score a critical hit on a roll of 18–20.",
        tags: ["passive", "combat"],
        // TODO: dice-roll hook (crit threshold override)
      },
    ],

    18: [
      {
        id: "survivor",
        label: "Survivor",
        source: "subclass",
        level: 18,
        description:
          "At the start of each of your turns in combat, you regain HP equal to 5 + your Constitution modifier if you have no more than half your HP remaining and you aren't at 0 HP.",
        tags: ["passive", "healing", "combat"],
        // TODO: turn-start hook
      },
    ],
  },
};
