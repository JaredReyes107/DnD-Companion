import { Stack } from "expo-router";
import { useEffect } from "react";

import { registerMainScalings } from "@/core/data/rules/scaling/main-scalings";
import { registerClassScalings } from "@/core/data/rules/scaling/class-scalings";
import { CharacterProvider } from "@/utils/character-provider";

const RootLayout = () => {
  useEffect(() => {
    registerMainScalings();
    registerClassScalings();
  }, []);

  return (
    <CharacterProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Auto-nests the views inside the root folder ('app')*/}
        <Stack.Screen name="index" options={{ title: "Inicio" }} />
        <Stack.Screen
          name="character-creation"
          options={{ title: "Nuevo Personaje" }}
        />
        <Stack.Screen
          name="character-edition"
          options={{ title: "Editar Personaje" }}
        />
      </Stack>
    </CharacterProvider>
  );
};

export default RootLayout;
export const ssr = false;
