export type SpellSlotLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SpellSlotInstance = {
  max: number;
  used: number;
};

export type SpellSlots = {
  [level in SpellSlotLevel]?: SpellSlotInstance;
};
