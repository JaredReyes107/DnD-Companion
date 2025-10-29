export type DamageType =
  | "Bludgeoning"
  | "Piercing"
  | "Slashing"
  | "Acid"
  | "Cold"
  | "Fire"
  | "Force"
  | "Lightning"
  | "Necrotic"
  | "Radiant"
  | "Thunder"
  | "Poison"
  | "Psychic"
  | "None";

export type EffectivenessType =
  | "Neutral"
  | "Resistant"
  | "Inmune"
  | "Vulnerable";

export const BaseDamageEffectiveness: Record<DamageType, EffectivenessType> = {
  Bludgeoning: "Neutral",
  Piercing: "Neutral",
  Slashing: "Neutral",
  Acid: "Neutral",
  Cold: "Neutral",
  Fire: "Neutral",
  Force: "Neutral",
  Lightning: "Neutral",
  Necrotic: "Neutral",
  Radiant: "Neutral",
  Thunder: "Neutral",
  Poison: "Neutral",
  Psychic: "Neutral",
  None: "Neutral",
};
