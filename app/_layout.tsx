import { Stack } from "expo-router";
import { useEffect } from "react";

import { registerMainScalings } from "@/game/base-data/scaling/main-scalings";
import { registerClassScalings } from "@/game/base-data/scaling/class-scalings";

const RootLayout = () => {
  useEffect(() => {
    registerMainScalings();
    registerClassScalings();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auto-nests the views inside the root folder ('app')*/}
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen
        name="character-creation"
        options={{ title: "Nuevo Personaje" }}
      />
      <Stack.Screen
        name="character-sheet"
        options={{ title: "Hoja de Personaje" }}
      />
    </Stack>
  );
};

export default RootLayout;
export const ssr = false;
