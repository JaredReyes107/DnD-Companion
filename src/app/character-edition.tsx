import React from "react";
import CharacterForm from "@/components/ui/CharacterForm";
import { useCharacter } from "@/utils/character-provider";
import { Character } from "@/core/entities/character/Character";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";

const EditCharacterScreen = () => {
  const characterNavigator = useCharacterNavigator();
  const { character, saveCharacter, loading } = useCharacter();

  if (loading || !character) return null;

  const handleUpdate = async (updated: Character) => {
    await saveCharacter(updated);
    characterNavigator.goBack();
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
