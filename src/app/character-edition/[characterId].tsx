import React, { useCallback } from "react";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import CharacterForm from "@/components/ui/CharacterForm";
import { useCharacter } from "@/utils/character-provider";
import { Character } from "@/core/entities/character/Character";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";
import { ui } from "@/services/localization/ui-localization-resolver";

const EditCharacterScreen = () => {
  const { characterId } = useLocalSearchParams<{ characterId: string }>();
  const characterNavigator = useCharacterNavigator();
  const { character, saveCharacter, loading, loadCharacterById } =
    useCharacter();

  useFocusEffect(
    useCallback(() => {
      loadCharacterById(characterId);
    }, [characterId, loadCharacterById]),
  );

  if (loading || !character) return null;

  const handleUpdate = async (updated: Character) => {
    await saveCharacter(updated);
    characterNavigator.goBack();
  };

  return (
    <CharacterForm
      initialCharacter={character}
      onSubmit={handleUpdate}
      submitLabel={ui("character.save")}
    />
  );
};

export default EditCharacterScreen;
