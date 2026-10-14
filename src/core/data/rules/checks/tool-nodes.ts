import { CheckNode } from "@/core/entities/rules/check/check-node";

export const TOOL_NODES: Record<string, CheckNode> = {
  // Abstract root — all tool nodes descend from here, enabling modifiers
  // that target all tools with a single StatModel (e.g. Fire Rune passive).
  "tool.root": {
    id: "tool.root",
    category: "toolCheck",
    parentIds: [],
    abstract: true,
  },

  //#region Artisan's Tools
  "tool.artisan": {
    id: "tool.artisan",
    category: "toolCheck",
    parentIds: ["tool.root"],
    abstract: true,
  },
  "tool.alchemistsSupplies": {
    id: "tool.alchemistsSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.brewersSupplies": {
    id: "tool.brewersSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.calligraphersSupplies": {
    id: "tool.calligraphersSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.carpenterSupplies": {
    id: "tool.carpenterSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "STR",
  },
  "tool.cartographersTools": {
    id: "tool.cartographersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.cobblersTools": {
    id: "tool.cobblersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "STR",
  },
  "tool.cooksUtensils": {
    id: "tool.cooksUtensils",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.glassblowersTools": {
    id: "tool.glassblowersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.jewelersTools": {
    id: "tool.jewelersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.leatherworksTools": {
    id: "tool.leatherworksTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.masonsTools": {
    id: "tool.masonsTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "STR",
  },
  "tool.paintersSupplies": {
    id: "tool.paintersSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.pottersTools": {
    id: "tool.pottersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.smithsTools": {
    id: "tool.smithsTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "STR",
  },
  "tool.tinkersTools": {
    id: "tool.tinkersTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.weaversTools": {
    id: "tool.weaversTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  "tool.woodcarversTools": {
    id: "tool.woodcarversTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "DEX",
  },
  //#endregion

  "tool.disguiseKit": {
    id: "tool.disguiseKit",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "WIS",
  },
  "tool.forgeryKit": {
    id: "tool.forgeryKit",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "INT",
  },

  //#region Gaming Set
  "tool.gamingSet": {
    id: "tool.gamingSet",
    category: "toolCheck",
    parentIds: ["tool.root"],
    abstract: true,
  },
  "tool.diceSet": {
    id: "tool.diceSet",
    category: "toolCheck",
    parentIds: ["tool.gamingSet"],
    ability: "DEX",
  },
  "tool.dragonchessSet": {
    id: "tool.dragonchessSet",
    category: "toolCheck",
    parentIds: ["tool.gamingSet"],
    ability: "INT",
  },
  "tool.playingCardSet": {
    id: "tool.playingCardSet",
    category: "toolCheck",
    parentIds: ["tool.gamingSet"],
    ability: "CHA",
  },
  "tool.threeDragonAnteSet": {
    id: "tool.threeDragonAnteSet",
    category: "toolCheck",
    parentIds: ["tool.gamingSet"],
    ability: "INT",
  },
  //#endregion

  "tool.herbalismKit": {
    id: "tool.herbalismKit",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "WIS",
  },

  //#region Musical Instrument
  "tool.musicalInstrument": {
    id: "tool.musicalInstrument",
    category: "toolCheck",
    parentIds: ["tool.root"],
    abstract: true,
  },
  "tool.bagpipes": {
    id: "tool.bagpipes",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "CON",
  },
  "tool.drum": {
    id: "tool.drum",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.dulcimer": {
    id: "tool.dulcimer",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.flute": {
    id: "tool.flute",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.lute": {
    id: "tool.lute",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.lyre": {
    id: "tool.lyre",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "CHA",
  },
  "tool.horn": {
    id: "tool.horn",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "CON",
  },
  "tool.panFlute": {
    id: "tool.panFlute",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.shawm": {
    id: "tool.shawm",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  "tool.viol": {
    id: "tool.viol",
    category: "toolCheck",
    parentIds: ["tool.musicalInstrument"],
    ability: "DEX",
  },
  //#endregion

  "tool.navigatorsTools": {
    id: "tool.navigatorsTools",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "INT",
  },
  "tool.poisonersKit": {
    id: "tool.poisonersKit",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "INT",
  },
  "tool.thievesTools": {
    id: "tool.thievesTools",
    category: "toolCheck",
    parentIds: ["tool.root"],
    ability: "DEX",
  },
};
