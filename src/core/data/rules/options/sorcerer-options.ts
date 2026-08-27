import { OptionTemplate } from "@/core/entities/rules/option-template";

export const SORCERER_OPTIONS: Record<string, OptionTemplate> = {
  careful_spell: {
    id: "careful_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "control"],
    grants: [{ type: "action", id: "metamagic_careful_spell" }],
  },
  distant_spell: {
    id: "distant_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "utility"],
    grants: [{ type: "action", id: "metamagic_distant_spell" }],
  },
  empowered_spell: {
    id: "empowered_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "damage"],
    grants: [{ type: "action", id: "metamagic_empowered_spell" }],
    // TODO: reroll damage dice — roll-affecting.
  },
  extended_spell: {
    id: "extended_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "utility"],
    grants: [{ type: "action", id: "metamagic_extended_spell" }],
  },
  heightened_spell: {
    id: "heightened_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "control"],
    grants: [{ type: "action", id: "metamagic_heightened_spell" }],
    // TODO: disadvantage on the target's save — roll-affecting.
  },
  quickened_spell: {
    id: "quickened_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "action-economy"],
    grants: [{ type: "action", id: "metamagic_quickened_spell" }],
  },
  subtle_spell: {
    id: "subtle_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "utility"],
    grants: [{ type: "action", id: "metamagic_subtle_spell" }],
  },
  twinned_spell: {
    id: "twinned_spell",
    poolIds: ["metamagic"],
    tags: ["metamagic", "utility"],
    grants: [{ type: "action", id: "metamagic_twinned_spell" }],
    // TODO: variable sorcery point cost equal to spell level (min 1)
    // — variable resource cost, deferred post-MVP per your note.
  },

  //Seeking + Transmuted
};
