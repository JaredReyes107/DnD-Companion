export interface ScenarioParticipant {
  id: string;
  initiative: number;
  dexModifier: number;
}

export interface CombatScenario {
  name: string;
  participants: ScenarioParticipant[];
  rounds: number;
}
