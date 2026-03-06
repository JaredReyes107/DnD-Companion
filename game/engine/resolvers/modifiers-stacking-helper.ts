import { Character } from "@/game/domain/character/Character";

export function applyStackingRule(
  character: Character,
  templateId: string,
  stacking: "refresh" | "override" | "ignore" | undefined,
): Character {
  if (!character.combatState) return character;

  const runtimeModifiers = { ...character.combatState.runtimeModifiers };

  const existingEntries = Object.entries(runtimeModifiers).filter(
    ([, instance]) => instance.modifier.templateId === templateId,
  );

  if (existingEntries.length === 0) return character;

  switch (stacking) {
    case "ignore":
      return character;

    case "override":
      for (const [id] of existingEntries) {
        delete runtimeModifiers[id];
      }
      break;

    case "refresh":
      for (const [id] of existingEntries) {
        delete runtimeModifiers[id];
      }
      break;
  }

  return {
    ...character,
    combatState: {
      ...character.combatState,
      runtimeModifiers,
    },
  };
}
