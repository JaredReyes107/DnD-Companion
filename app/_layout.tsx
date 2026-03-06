import { Stack } from "expo-router";
import { useEffect } from "react";

import { registerMainScalings } from "@/game/data/base/scaling/main-scalings";
import { registerClassScalings } from "@/game/data/base/scaling/class-scalings";
import { CharacterProvider } from "@/lib/utilities/character-provider";

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
