import { CheckNode } from "@/core/entities/rules/check/check-node";

export const LANGUAGE_NODES: Record<string, CheckNode> = {
  "language.common": {
    id: "language.common",
    category: "language",
    parentIds: [],
  },
  "language.primordial": {
    id: "language.primordial",
    category: "language",
    parentIds: [],
  },
  "language.primordial.aquan": {
    id: "language.primordial.aquan",
    category: "language",
    parentIds: ["language.primordial"],
  },
  "language.primordial.auran": {
    id: "language.primordial.auran",
    category: "language",
    parentIds: ["language.primordial"],
  },
  "language.primordial.ignan": {
    id: "language.primordial.ignan",
    category: "language",
    parentIds: ["language.primordial"],
  },
  "language.primordial.terran": {
    id: "language.primordial.terran",
    category: "language",
    parentIds: ["language.primordial"],
  },
};
