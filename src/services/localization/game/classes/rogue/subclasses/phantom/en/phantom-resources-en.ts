import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const phantom_resources_en: GameLocalizationCategory = {
  wails_from_the_grave: {
    name: "Wails from the Grave",
    description: `Used to deal additional damage to a creature other than your Sneak Attack target. You regain all cahrges after a long rest.`,
  },
  soul_trinkets: {
    name: "Soul Trinkets",
    description: `It allows you to perform different actions and while you have at least one, you have advantage on death saving throws and Constitution saving throws. You can use you reaction to capture the essence of creature you can see dies within 30 feet of you to gain one charge.`,
  },
  ghost_walk: {
    name: "Ghost Walk",
    description: `It allows you to assume a spectral form for 10 minutes. It recharges after a long rest or if you destroy one of your soul trinkets to regain one charge.`,
  },
};
