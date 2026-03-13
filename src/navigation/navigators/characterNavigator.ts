import { useMemo } from "react";
import { useRouter, Href } from "expo-router";
import { Paths } from "../paths";

export const useCharacterNavigator = () => {
  const router = useRouter();

  return useMemo(
    () => ({
      goToCreation: () => {
        router.push(Paths.characterCreation as Href);
      },
      goToEdition: () => {
        router.push(Paths.characterEdition as Href);
      },
      goBack: () => {
        router.back();
      },
    }),
    [router],
  );
};
