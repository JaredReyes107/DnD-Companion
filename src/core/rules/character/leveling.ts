import { XP_TABLE } from "../../data/rules/XP_Table";

export function getNextXPThreshold(currentLevel: number) {
  const nextLevel = XP_TABLE.find(
    (l: { level: number; minXP: number }) => l.level === currentLevel + 1,
  );
  if (!nextLevel) return null; // already max level

  return nextLevel.minXP;
}

export function getXPToNextLevel(currentLevel: number, currentXP: number) {
  const nextLevel = XP_TABLE.find(
    (l: { level: number; minXP: number }) => l.level === currentLevel + 1,
  );
  if (!nextLevel) return null; // already max level

  return Math.max(0, nextLevel.minXP - currentXP);
}
