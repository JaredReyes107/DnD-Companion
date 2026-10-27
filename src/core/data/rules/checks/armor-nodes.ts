import { CheckNode } from "@/core/entities/rules/check/check-node";

export const ARMOR_NODES: Record<string, CheckNode> = {
  "armor.light": { id: "armor.light", category: "armorCheck", parentIds: [] },
  "armor.medium": { id: "armor.medium", category: "armorCheck", parentIds: [] },
  "armor.heavy": { id: "armor.heavy", category: "armorCheck", parentIds: [] },
  "armor.shield": { id: "armor.shield", category: "armorCheck", parentIds: [] },
};
