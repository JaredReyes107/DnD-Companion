import { Ability } from "../ability/ability.types";

export type SavingThrowInstance = {
  hasProficiency: boolean;
};

export type CharacterSavingThrows = Record<Ability, SavingThrowInstance>;
