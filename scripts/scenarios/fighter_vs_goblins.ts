import { CombatScenario } from "../scenario-types";

export const fighterVsGoblins: CombatScenario = {
  name: "fighter_vs_goblins",
  participants: [
    { id: "fighter", initiative: 5, dexModifier: 5 },
    { id: "goblin1", initiative: 2, dexModifier: 2 },
    { id: "goblin2", initiative: 2, dexModifier: 2 },
  ],
  rounds: 4,
};
