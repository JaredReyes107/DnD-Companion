import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import CharacterForm from "@/components/ui/CharacterForm";
import { useCharacter } from "@/utils/character-provider";
import { Character } from "@/core/entities/character/Character";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditCharacterScreen = () => {
  const router = useRouter();
  const { character, saveCharacter, loading, loadCharacterById } =
    useCharacter();

  useEffect(() => {
    const init = async () => {
      const id = await AsyncStorage.getItem("selectedCharacterId");
      if (id) {
        await loadCharacterById(id);
      }
    };

    init();
  }, [loadCharacterById]);

  if (loading || !character) return null;

  const handleUpdate = async (updated: Character) => {
    await saveCharacter(updated);
    router.push("/");
  };

  return (
    <CharacterForm
      initialCharacter={character}
      onSubmit={handleUpdate}
      submitLabel="Guardar Cambios"
    />
  );
};

export default EditCharacterScreen;
