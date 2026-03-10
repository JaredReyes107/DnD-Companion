import { rollInitiative } from "../src/core/systems/combat/initiative-system";
import { startCombat, nextTurn } from "../src/core/systems/combat/combatEngine";
import { RandomDiceProvider } from "../src/core/systems/dice/RandomDiceProvider";

import { CombatScenario } from "./scenario-types";

export function runScenario(scenario: CombatScenario) {
  const dice = new RandomDiceProvider();

  console.log("=================================");
  console.log(`⚔️ SCENARIO: ${scenario.name} ⚔️`);
  console.log("=================================\n");

  const participantsRecord: Record<
    string,
    { id: string; initiative: number; dexModifier: number }
  > = {};
  for (const p of scenario.participants) {
    participantsRecord[p.id] = p;
  }

  const initiative = rollInitiative(participantsRecord, dice);

  console.log("Initiative order:", initiative.order);
  console.log("Initiative scores:", initiative.scores);
  console.log("\n---------------------------------\n");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockParticipantsState: any = {};
  for (const id of initiative.order) {
    mockParticipantsState[id] = { id, statVersion: 1 };
  }

  let state = startCombat(mockParticipantsState, initiative);

  const totalTurns = scenario.rounds * initiative.order.length;

  for (let i = 0; i < totalTurns; i++) {
    const active = initiative.order[state.activeTurn];

    console.log(`[Round ${state.round}] — Turn: ${active}`);

    state = nextTurn(state);
  }

  console.log("\n=================================");
  console.log(`🏁 SCENARIO END: ${scenario.name} 🏁`);
  console.log("=================================\n");
}
