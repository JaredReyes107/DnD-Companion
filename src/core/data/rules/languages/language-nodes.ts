import { LanguageNode } from "@/core/entities/rules/language/language-node";

export const LANGUAGE_NODES: Record<string, LanguageNode> = {
  // Standard Languages
  "language.common": {
    id: "language.common",
    parentIds: [],
    classification: "standard",
  },
  "language.dwarvish": {
    id: "language.dwarvish",
    parentIds: [],
    classification: "standard",
  },
  "language.elvish": {
    id: "language.elvish",
    parentIds: [],
    classification: "standard",
  },
  "language.giant": {
    id: "language.giant",
    parentIds: [],
    classification: "standard",
  },
  "language.gnomish": {
    id: "language.gnomish",
    parentIds: [],
    classification: "standard",
  },
  "language.goblin": {
    id: "language.goblin",
    parentIds: [],
    classification: "standard",
  },
  "language.halfling": {
    id: "language.halfling",
    parentIds: [],
    classification: "standard",
  },
  "language.orc": {
    id: "language.orc",
    parentIds: [],
    classification: "standard",
  },

  // Exotic Languages
  "language.abyssal": {
    id: "language.abyssal",
    parentIds: [],
    classification: "exotic",
  },
  "language.celestial": {
    id: "language.celestial",
    parentIds: [],
    classification: "exotic",
  },
  "language.draconic": {
    id: "language.draconic",
    parentIds: [],
    classification: "exotic",
  },
  "language.deepSpeech": {
    id: "language.deepSpeech",
    parentIds: [],
    classification: "exotic",
  },
  "language.infernal": {
    id: "language.infernal",
    parentIds: [],
    classification: "exotic",
  },
  "language.primordial": {
    id: "language.primordial",
    parentIds: [],
    classification: "exotic",
  },
  "language.primordial.aquan": {
    id: "language.primordial.aquan",
    parentIds: ["language.primordial"],
    classification: "exotic",
  },
  "language.primordial.auran": {
    id: "language.primordial.auran",
    parentIds: ["language.primordial"],
    classification: "exotic",
  },
  "language.primordial.ignan": {
    id: "language.primordial.ignan",
    parentIds: ["language.primordial"],
    classification: "exotic",
  },
  "language.primordial.terran": {
    id: "language.primordial.terran",
    parentIds: ["language.primordial"],
    classification: "exotic",
  },
  "language.sylvan": {
    id: "language.sylvan",
    parentIds: [],
    classification: "exotic",
  },
  "language.undercommon": {
    id: "language.undercommon",
    parentIds: [],
    classification: "exotic",
  },
};
