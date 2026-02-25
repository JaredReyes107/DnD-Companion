import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CharacterForm from "@/components/CharacterForm";
import { Character } from "@/game/types/instances/Character";

const CreateCharacterScreen = () => {
  const router = useRouter();

  const handleCreate = async (character: Character) => {
    const raw = await AsyncStorage.getItem("characters");
    const characters = raw ? JSON.parse(raw) : [];

    await AsyncStorage.setItem(
      "characters",
      JSON.stringify([...characters, character]),
    );

    router.push("/");
  };

  return (
    <CharacterForm
      initialCharacter={null}
      onSubmit={handleCreate}
      submitLabel="Crear Personaje"
    />
  );
};

export default CreateCharacterScreen;
