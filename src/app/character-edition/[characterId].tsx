import React from "react";
import { useLocalSearchParams } from "expo-router";
import CharacterForm from "@/components/ui/CharacterForm";
import { CharacterProvider, useCharacter } from "@/utils/character-provider";
import { Character } from "@/core/entities/character/Character";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";

const EditCharacterScreenInner = () => {
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

const EditCharacterScreen = () => {
  const { characterId } = useLocalSearchParams<{ characterId: string }>();

  return (
    <CharacterProvider initialCharacterId={characterId}>
      <EditCharacterScreenInner />
    </CharacterProvider>
  );
};

export default EditCharacterScreen;
