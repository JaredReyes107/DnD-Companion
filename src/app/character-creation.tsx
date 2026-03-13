import React from "react";
import CharacterForm from "@/components/ui/CharacterForm";
import { Character } from "@/core/entities/character/Character";
import { CharacterRepository } from "@/repositories/CharacterRepository";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";

const CreateCharacterScreen = () => {
  const characterNavigator = useCharacterNavigator();

  const handleCreate = async (character: Character) => {
    const all = await CharacterRepository.getAll();
    await CharacterRepository.saveAll([...all, character]);
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
