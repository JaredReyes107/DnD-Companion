import { CheckNode } from "@/core/entities/rules/check/check-node";

import {
  SAVING_THROW_ABILITY_NODES,
  SKILL_CHECK_ABILITY_NODES,
} from "./ability-nodes";
import { SAVING_THROW_NODES } from "./saving-throw-nodes";
import { SKILL_NODES } from "./skill-nodes";
import { TOOL_NODES } from "./tool-nodes";
import { WEAPON_NODES } from "./weapon-nodes";
import { ARMOR_NODES } from "./armor-nodes";

export const BASE_CHECK_NODES: Record<string, CheckNode> = {
  ...SAVING_THROW_ABILITY_NODES,
  ...SAVING_THROW_NODES,
  ...SKILL_CHECK_ABILITY_NODES,
  ...SKILL_NODES,
  ...TOOL_NODES,
  ...WEAPON_NODES,
  ...ARMOR_NODES,
};
