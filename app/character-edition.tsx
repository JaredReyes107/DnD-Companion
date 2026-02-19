import React from "react";
import { useRouter } from "expo-router";
import CharacterForm from "@/components/CharacterForm";
import { useCharacter } from "@/hooks/useCharacter";
import { Character } from "@/game/types/instances/Character";

const EditCharacterScreen = () => {
  const router = useRouter();
  const { character, saveCharacter, loading } = useCharacter();

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
