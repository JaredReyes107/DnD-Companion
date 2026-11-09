import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DRUNKEN_MASTER: SubclassTemplate = {
  id: "drunken_master",
  classId: "monk",
  source: "Xanathar's Guide to Everything",

  progression: {
    3: [
      "monk.drunken_master.bonus_proficiencies_drunken_master",
      "monk.drunken_master.drunken_technique",
    ],
    6: ["monk.drunken_master.tipsy_sway"],
    11: ["monk.drunken_master.drunkards_luck"],
    17: ["monk.drunken_master.intoxicated_frenzy"],
  },

  featuresByLevel: {
    3: [
      {
        id: "monk.drunken_master.bonus_proficiencies_drunken_master",
        source: "subclass",
        level: 3,
        tags: ["skill", "proficiency", "tool"],
        // TODO: proficiency with brewer's supplies and Performance
      },
      {
        id: "monk.drunken_master.drunken_technique",
        source: "subclass",
        level: 3,
        tags: ["passive", "movement", "combat"],
        // TODO: extends flurry_of_blows â€” Also gain the disengage modifier and +10ft speed
      },
    ],

    6: [
      {
        id: "monk.drunken_master.tipsy_sway",
        source: "subclass",
        level: 6,
        grants: [{ type: "action", id: "redirect_attack" }],
        tags: ["movement", "utility"],
      },
    ],

    11: [
      {
        id: "monk.drunken_master.drunkards_luck",
        source: "subclass",
        level: 11,
        grants: [{ type: "action", id: "dunkards_luck" }],
        tags: ["passive", "resource"],
      },
    ],

    17: [
      {
        id: "monk.drunken_master.intoxicated_frenzy",
        source: "subclass",
        level: 17,
        tags: ["passive", "combat"],
        // TODO: extends flurry_of_blows â€” descriptive, function deferred
      },
    ],
  },
};
