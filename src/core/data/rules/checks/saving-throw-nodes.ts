import { CheckNode } from "@/core/entities/rules/check/check-node";

export const SAVING_THROW_NODES: Record<string, CheckNode> = {
  concentration: {
    id: "concentration",
    category: "savingThrow",
    parentIds: ["savingThrow.CON"],
    ability: "CON",
  },
};
