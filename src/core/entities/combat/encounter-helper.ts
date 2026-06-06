import * as Crypto from "expo-crypto";

import { Character } from "../character/Character";
import { buildCombatState } from "./combat-helper";
import { EncounterState } from "@/core/entities/combat/encounter-state";
import { EncounterRepository } from "@/repositories/EncounterRepository";

export async function startEncounter(
  participants: Character[],
): Promise<EncounterState> {
  const encounter = buildEncounterState(participants);
  await EncounterRepository.save(encounter);
  return encounter;
}

export function buildEncounterState(participants: Character[]): EncounterState {
  const combatStates: EncounterState["participants"] = {};

  for (const character of participants) {
    combatStates[character.id] = buildCombatState(character);
  }

  return {
    id: Crypto.randomUUID(),
    currentRound: 1,
    currentTurnIndex: 0,
    participants: combatStates,
  };
}
