import { registerScaling } from "@/core/data/registries/resource-scaling.registry";

export function registerClassScalings() {
  registerScaling("rage", ({ character }) => {
    const barbarian = Object.values(character.classes.byId).find(
      (c) => c.classId === "barbarian",
    );

    if (!barbarian) return 0;

    const level = barbarian.level;

    if (level >= 20) return Infinity;
    if (level >= 17) return 6;
    if (level >= 12) return 5;
    if (level >= 6) return 4;
    if (level >= 3) return 3;
    return 2;
  });

  //Adapt to resolve conflicts with paladin
  registerScaling("channel-divinity", ({ character }) => {
    const clericClass = Object.values(character.classes.byId).find(
      (c) => c.classId === "cleric",
    );
    const paladinClass = Object.values(character.classes.byId).find(
      (c) => c.classId === "paladin",
    );

    if (!clericClass && !paladinClass) return 0;

    if (clericClass) {
      if (clericClass.level >= 18) return 3;
      if (clericClass.level >= 6) return 2;
    }

    return 1;
  });

  registerScaling("action-surge", ({ character }) => {
    const fighter = Object.values(character.classes.byId).find(
      (c) => c.classId === "fighter",
    );

    if (!fighter) return 0;

    const level = fighter.level;

    if (level >= 17) return 2;
    return 1;
  });

  registerScaling("indomitable", ({ character }) => {
    const fighter = Object.values(character.classes.byId).find(
      (c) => c.classId === "fighter",
    );

    if (!fighter) return 0;

    const level = fighter.level;

    if (level >= 17) return 3;
    if (level >= 13) return 2;
    return 1;
  });
}
