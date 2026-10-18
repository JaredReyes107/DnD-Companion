import { OptionTemplate } from "@/core/entities/rules/option-template";

export const TOTEM_WARRIOR_OPTIONS: Record<string, OptionTemplate> = {
  //#region Totem Spirit (Lv. 3)
  totem_spirit_bear: {
    id: "totem_spirit_bear",
    poolIds: ["totem_spirit"],
    tags: ["passive", "defense", "rage"],
    grants: [], // TODO: Resistances. All but psychic
  },

  totem_spirit_eagle: {
    id: "totem_spirit_eagle",
    poolIds: ["totem_spirit"],
    tags: ["passive", "combat", "rage"],
    grants: [{ type: "action", id: "totem_eagle_dash" }],
  },

  totem_spirit_wolf: {
    id: "totem_spirit_wolf",
    poolIds: ["totem_spirit"],
    tags: ["passive", "support", "rage"],
    // Allies have advantage on melee attacks vs. enemies adjacent to you —
    // affects other actors, not self. Deferred.
    grants: [],
  },

  totem_spirit_elk: {
    id: "totem_spirit_elk",
    poolIds: ["totem_spirit"],
    tags: ["passive", "movement", "rage"],
    grants: [{ type: "modifier", id: "totem_elk_speed" }],
  },

  totem_spirit_tiger: {
    id: "totem_spirit_tiger",
    poolIds: ["totem_spirit"],
    tags: ["passive", "movement", "rage"],
    // TODO: Extra speed on jumps. While raging
    grants: [],
  },
  //#endregion

  //#region Aspect of the Beast (level 6)

  aspect_bear: {
    id: "aspect_bear",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    //TODO: Advantage. Partial. Str checks for pushing/etc.
  },

  aspect_eagle: {
    id: "aspect_eagle",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "perception"],
    grants: [],
    // TODO: Senses. Ignore disadvantage when Status = Dim Light
  },

  aspect_wolf: {
    id: "aspect_wolf",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    // Unmodeled. Travel speed
  },

  aspect_elk: {
    id: "aspect_elk",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "movement"],
    grants: [
      // Unmodeled. Travel speed
    ],
  },

  aspect_tiger: {
    id: "aspect_tiger",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    //TODO: Skills. Proficiency in two skills from a list (Athletics, Acrobatics, Stealth, Survival)
  },
  //#endregion

  //#region Totemic Attunement (level 14)

  attunement_bear: {
    id: "attunement_bear",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "support", "rage"],
    grants: [],
    // TODO: Encounter. Disadvantage for others
  },

  attunement_eagle: {
    id: "attunement_eagle",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "movement", "rage"],
    grants: [],
    // TODO: Movement. Flight, while raging
  },

  attunement_wolf: {
    id: "attunement_wolf",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [{ type: "action", id: "totemic_attunement_wolf" }],
  },

  attunement_elk: {
    id: "attunement_elk",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [{ type: "action", id: "totemic_attunement_elk" }],
  },

  attunement_tiger: {
    id: "attunement_tiger",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [{ type: "action", id: "totemic_attunement_tiger" }],
  },
  //#endregion
};
