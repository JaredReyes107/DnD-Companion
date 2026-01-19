import { registerScaling } from "@/game/registries/resource-scaling.registry";

export function registerClassScalings() {
  registerScaling("rage-uses", ({ character }) => {
    const barbarian = Object.values(character.classes.byId).find(
      (c) => c.classId === "barbarian",
    );

    if (!barbarian) return 0;

    const level = barbarian.level;

    if (level >= 17) return 6;
    if (level >= 12) return 5;
    if (level >= 6) return 4;
    if (level >= 3) return 3;
    return 2;
  });

  registerScaling("channel-divinity-uses", ({ character }) => {
    const cleric = Object.values(character.classes.byId).find(
      (c) => c.classId === "cleric",
    );

    if (!cleric) return 0;
    return cleric.level >= 6 ? 2 : 1;
  });
}
