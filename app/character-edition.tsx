import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import CharacterForm from "@/components/CharacterForm";
import { useCharacter } from "@/lib/utilities/character-provider";
<<<<<<< HEAD
import { Character } from "@/game/domain/character/Character";
=======
import { Character } from "@/game/types/instances/Character";
>>>>>>> main
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
  }, []);

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
