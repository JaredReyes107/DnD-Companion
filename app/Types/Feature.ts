export type FeatureScaling = 
{
  base: number;
  increasesAt?: number[]; // levels at which the value increases
  max?: number;
};

export type FeatureCharges = 
{
  scaling: 
    | { type: "none"; value: number }
    | { type: "level"; values: number[] } // index = class level - 1
    | { type: "ability"; abilityIndex: number } // e.g., CHA modifier
    | { type: "proficiency" }
    | { type: "formula"; formula: string }; // e.g., "PB + CHA"
  max?: number;
  usesLeft?: number;

  recharge: 'longRest' | 'shortRest' | 'daily' | 'perTurn' | 'none' | 'custom';
};

export type Feature = 
{
  name: string;
  level: number; // the level at which this feature is gained
  source?: 'class' | 'subclass' | 'race' | 'feat' | 'background' | string;
  description: string;

  // Optional: Number of uses or charges per rest/type
  charges?: FeatureCharges;

  // Optional: Additional structured data for game logic
  data?: Record<string, number | string | boolean | FeatureScaling | FeatureCharges | any>;

  // Optional: Tags for filtering/searching features
  tags?: string[];
};
