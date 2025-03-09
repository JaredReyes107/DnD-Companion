export type Personaje = 
{
  //Internal Id
  id: string;

  icon: string;

  //Character data which needs to be captured
  Name: string;
  Class: string;
  Race: string;
  Level: number;
  Speed: number;
  HitPoints: number;
    
  //Standard Order: Strength, Dexterity, Constitution, Intelligence, Wisdom and Charisma
  Stats: number[];
  StatModifiers: number[];
  SavingThrowsProficiencies: boolean[];
  SavingThrowModifiers: number[];
  //By alfabetical order, in Spanish
  SkillProficiencies: boolean[];
  SkillExpertises: boolean[];
  SkillModifiers: number[];

  //Calculated data
  ProficiencyBonus: number;
  ArmorClass: number;
  InitiativeBonus: number;
}

export type Arma = 
{
  id: string; // Unique identifier
  icon: string; // Icon name
  fields: { [key: string]: string }; // Dynamic fields as key-value pairs
};
  