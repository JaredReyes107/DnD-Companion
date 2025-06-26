export type Weapon = 
{
  id: string; // Unique identifier
  icon: string; // Icon name

  Name: string,
  Type: string,
  Damage: string,
  
  fields: { [key: string]: string }; // Dynamic fields as key-value pairs
};