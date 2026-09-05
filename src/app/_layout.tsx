import { Stack } from "expo-router";

import { useCharacterStore } from "@/store/characterStore";
import { initializeCoreSystems } from "@/core/init";
import { View } from "react-native";

const RootLayout = () => {
  const hasHydrated = useCharacterStore((s) => s.hasHydrated);

  initializeCoreSystems();

  if (!hasHydrated) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Auto-nests the views inside the root folder ('app')*/}
        <Stack.Screen name="index" options={{ title: "Inicio" }} />
        <Stack.Screen
          name="character-creation"
          options={{ title: "Nuevo Personaje" }}
        />
        <Stack.Screen
          name="character-edition/[characterId]"
          options={{ title: "Editar Personaje" }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
export const ssr = false;
