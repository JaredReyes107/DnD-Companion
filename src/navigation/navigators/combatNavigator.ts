import { useMemo } from "react";
import { useRouter, Href } from "expo-router";
import { Paths, CombatTab } from "../paths";

export const useCombatNavigator = () => {
  const router = useRouter();

  return useMemo(
    () => ({
      enterCombat: (characterId: string) => {
        router.push(Paths.combat(characterId) as Href);
      },
      goToTab: (characterId: string, tab: CombatTab) => {
        router.push(Paths.combatTab(characterId, tab) as Href);
      },
      goBack: () => {
        router.back();
      },
    }),
    [router],
  );
};
