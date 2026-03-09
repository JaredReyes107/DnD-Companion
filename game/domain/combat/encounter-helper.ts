import * as Crypto from "expo-crypto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../character/Character";
import { buildCombatState } from "./combat-helper";
import { EncounterState } from "@/game/domain/combat/encounter-state";

const STORAGE_KEY = "encounters";

async function getAll(): Promise<Record<string, EncounterState>> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export async function saveEncounter(encounter: EncounterState): Promise<void> {
  const encounters = await getAll();

  encounters[encounter.id] = encounter;

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(encounters));
}

export async function loadEncounter(
  encounterId: string,
): Promise<EncounterState | null> {
  const encounters = await getAll();

  return encounters[encounterId] ?? null;
}

export async function deleteEncounter(encounterId: string): Promise<void> {
  const encounters = await getAll();

  delete encounters[encounterId];

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(encounters));
}

export async function listEncounters(): Promise<EncounterState[]> {
  const encounters = await getAll();
  return Object.values(encounters);
}

export async function startEncounter(participants: Character[]) {
  const encounter = buildEncounterState(participants);

  await saveEncounter(encounter);

  return encounter;
}

export function buildEncounterState(participants: Character[]): EncounterState {
  const combatStates: EncounterState["participants"] = {};

  console.log("Creating encounter");

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
