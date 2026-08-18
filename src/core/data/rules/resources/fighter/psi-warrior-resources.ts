import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PSI_WARRIOR_RESOURCES: Record<string, ResourceTemplate> = {
  psionic_dice: {
    id: "psionic_dice",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: [],
  },
  psionic_recovery: {
    id: "psionic_recovery",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
  telekinetic_movement: {
    id: "telekinetic_movement",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
  psi_powered_leap: {
    id: "psi_powered_leap",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  bulwark_of_force: {
    id: "bulwark_of_force",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  telekinetic_master: {
    id: "telekinetic_master",
    sourceId: "psi_warrior",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
