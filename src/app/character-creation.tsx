import React from "react";
import CharacterForm from "@/components/ui/CharacterForm";
import { Character } from "@/core/entities/character/Character";
import { CharacterRepository } from "@/repositories/CharacterRepository";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";
import { useCharacterStore } from "@/store/characterStore";

const CreateCharacterScreen = () => {
  const characterNavigator = useCharacterNavigator();
  const setCharacters = useCharacterStore((s) => s.setCharacters);

  const handleCreate = async (character: Character) => {
    const all = await CharacterRepository.getAll();
    const updated = [...all, character];
    await CharacterRepository.saveAll(updated);

    // Sync the store so the list re-renders immediately without a reload.
    setCharacters(updated);

    characterNavigator.goBack();
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
