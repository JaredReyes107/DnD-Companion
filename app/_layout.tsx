import { Stack } from "expo-router";

const RootLayout = () => {
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
