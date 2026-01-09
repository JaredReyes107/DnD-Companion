import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auto-nests the views inside the root folder ('app')*/}
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen
        name="CharacterCreation"
        options={{ title: "Nuevo Personaje" }}
      />
      <Stack.Screen
        name="CharacterSheet"
        options={{ title: "Hoja de Personaje" }}
      />
    </Stack>
  );
}
export const ssr = false;
