/* eslint-disable prettier/prettier */
export type CharacterSpellcasting = {
  knownSpellIds: string[];
  preparedSpellIds?: string[];

  slotState: {
    [spellLevel: number]: {
      max: number;
      used: number;
    };
  };
};
