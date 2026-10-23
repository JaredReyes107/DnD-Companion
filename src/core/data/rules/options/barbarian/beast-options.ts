import { OptionTemplate } from "@/core/entities/rules/option-template";

export const BEAST_OPTIONS: Record<string, OptionTemplate> = {
  bestial_soul_swim: {
    id: "bestial_soul_swim",
    poolIds: ["bestial_soul_movement"],
    tags: ["passive", "movement"],
    grants: [],
  },
  bestial_soul_climb: {
    id: "bestial_soul_climb",
    poolIds: ["bestial_soul_movement"],
    tags: ["passive", "movement"],
    grants: [],
  },
  bestial_soul_jump: {
    id: "bestial_soul_jump",
    poolIds: ["bestial_soul_movement"],
    tags: ["passive", "movement"],
    grants: [],
  },
};
