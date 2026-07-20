import { OptionTemplate } from "@/core/entities/rules/option-template";

export const BEAST_OPTIONS: Record<string, OptionTemplate> = {
  // TODO: form_of_the_beast weapons — onActivation, grants are defined
  // but won't be resolved until the activation system supports it.
  // Defined now so localization and UI can reference them.

  beast_weapon_bite: {
    id: "beast_weapon_bite",
    poolId: "form_of_the_beast_weapon",
    tags: ["combat", "natural-weapon"],
    grants: [{ type: "action", id: "beast_bite" }],
  },

  beast_weapon_claws: {
    id: "beast_weapon_claws",
    poolId: "form_of_the_beast_weapon",
    tags: ["combat", "natural-weapon"],
    grants: [{ type: "action", id: "beast_claws" }],
  },

  beast_weapon_tail: {
    id: "beast_weapon_tail",
    poolId: "form_of_the_beast_weapon",
    tags: ["combat", "natural-weapon"],
    grants: [{ type: "action", id: "beast_tail" }],
  },

  bestial_soul_climb: {
    id: "bestial_soul_climb",
    poolId: "bestial_soul_movement",
    tags: ["passive", "movement"],
    grants: [{ type: "modifier", id: "bestial_soul_climb_speed" }],
  },

  bestial_soul_swim: {
    id: "bestial_soul_swim",
    poolId: "bestial_soul_movement",
    tags: ["passive", "movement"],
    grants: [{ type: "modifier", id: "bestial_soul_swim_speed" }],
  },

  bestial_soul_fly: {
    id: "bestial_soul_fly",
    poolId: "bestial_soul_movement",
    tags: ["passive", "movement"],
    // Fly speed equal to walking speed, but only 30ft max and must
    // land at end of turn — limited enough that a flat speed modifier
    // overstates it. Deferred until movement system can express
    // conditional/temporary fly speed.
    grants: [],
  },
};
