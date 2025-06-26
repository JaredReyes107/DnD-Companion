export type Armor = 
{
  id: string; // Unique identifier
  icon: string; // Icon name
  fields: { [key: string]: string }; // Dynamic fields as key-value pairs
};