import { Character } from "@/core/entities/character/Character";

export function applyStackingRule(
  character: Character,
  templateId: string,
  stacking: "overlap" | "refresh" | "override" | "ignore" | undefined,
): Character {
  if (!character.combatState) return character;

  const runtimeModifiers = { ...character.combatState.runtimeModifiers };

  const existingEntries = Object.entries(runtimeModifiers).filter(
    ([, instance]) => instance.modifier.templateId === templateId,
  );

  if (existingEntries.length === 0) return character;
  switch (stacking) {
    case "ignore":
      if (existingEntries.length > 0) return character;
      break;

    case "refresh":
      for (const [id] of existingEntries) {
        delete runtimeModifiers[id];
      }
      break;

    case "override":
    case "overlap":
      // allow multiple instances
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
