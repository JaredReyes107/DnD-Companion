import { XP_TABLE } from "./XP_Table";

export function getNextXPThreshold(currentLevel: number) {
  const nextLevel = XP_TABLE.find((l) => l.level === currentLevel + 1);
  if (!nextLevel) return null; // already max level

  return nextLevel.minXP;
}

export function getXPToNextLevel(currentLevel: number, currentXP: number) {
  const nextLevel = XP_TABLE.find((l) => l.level === currentLevel + 1);
  if (!nextLevel) return null; // already max level

  return Math.max(0, nextLevel.minXP - currentXP);
}
