import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auto-nests the views inside the root folder ('app')*/}
      {/*
        <Stack.Screen name="index" options={{title: 'Inicio'}}/>
        <Stack.Screen name="characterCreation" options={{title: 'Nuevo Personaje'}}/>
        <Stack.Screen name="characterDetails" options={{title: 'Hoja de Personaje'}}/>
      */}
    </Stack>
  );
}
