import { Character } from "./character";

export type Action = {
  actionId: string;
  sourceId: string;
  //origin: "Players Handbook", //For distinguishing official rules and homebrew
  actionSlot: "action" | "bonusAction" | "reaction" | "free";

  execute: (ctx: {
    character: Character;
    dispatch: (update: Partial<Character>) => void;
    log: (text: string) => void;
  }) => void;
};
