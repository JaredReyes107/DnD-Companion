import { Character } from "../../types";

let character: Character;

export function startCombat(playableCharacter: Character) {
  character = playableCharacter;

  // ! If 'playableCharacter' is modified, so is 'character'
  //character.ArmorClass += 2;
  //console.log("AC increased from " + playableCharacter.ArmorClass + " to " + character.ArmorClass);
}

export function takeLongRest(playableCharacter: Character): Partial<Character> {
  playableCharacter.CurrentHP = character.HP;

  return playableCharacter;
}

export function takeShortRest(
  playableCharacter: Character,
): Partial<Character> {
  playableCharacter.CurrentHP += Math.round(character.HP / 2);

  return playableCharacter;
}
