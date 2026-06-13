import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TOTEM_WARRIOR: SubclassTemplate = {
  id: "totem_warrior",
  classId: "barbarian",
  name: "Totem Warrior",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "spirit_seeker",
        label: "Spirit Seeker",
        source: "subclass",
        level: 3,
        description:
          "You gain the ability to cast Beast Sense and Speak with Animals as rituals.",
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
      {
        id: "totem_spirit",
        label: "Totem Spirit",
        source: "subclass",
        level: 3,
        description:
          "Choose a totem spirit — Bear, Eagle, or Wolf. You gain its benefit while raging. Bear: resistance to all damage except psychic. Eagle: enemies have disadvantage on opportunity attacks against you, Dash as bonus action while raging. Wolf: your allies have advantage on melee attacks against creatures within 5ft of you.",
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook (conditional modifiers per totem choice)
      },
    ],

    6: [
      {
        id: "aspect_of_the_beast",
        label: "Aspect of the Beast",
        source: "subclass",
        level: 6,
        description:
          "Choose a totem animal — Bear, Eagle, or Wolf. You gain its aspect. Bear: carry capacity doubles, advantage on STR checks. Eagle: see up to 1 mile clearly, dim light doesn't impose disadvantage on Perception. Wolf: track at fast pace without penalty.",
        tags: ["passive", "exploration", "build-choice"],
        // TODO: build-choice system
      },
    ],

    10: [
      {
        id: "spirit_walker",
        label: "Spirit Walker",
        source: "subclass",
        level: 10,
        description:
          "You can cast Commune with Nature as a ritual, calling on your totem spirit.",
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
    ],

    14: [
      {
        id: "totemic_attunement",
        label: "Totemic Attunement",
        source: "subclass",
        level: 14,
        description:
          "Choose a totem animal — Bear, Eagle, or Wolf. Bear: while raging, creatures within 5ft have disadvantage on attacks against anyone but you. Eagle: while raging, you have a flying speed equal to your walking speed. Wolf: while raging, you can knock a Large or smaller creature prone as a bonus action after hitting with a melee attack.",
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook (conditional per totem choice)
      },
    ],
  },
};
