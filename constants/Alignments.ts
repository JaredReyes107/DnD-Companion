export type Alignment =
  | 'Lawful Good'
  | 'Neutral Good'
  | 'Chaotic Good'
  | 'Lawful Neutral'
  | 'Neutral'
  | 'Chaotic Neutral'
  | 'Lawful Evil'
  | 'Neutral Evil'
  | 'Chaotic Evil';

  export const ALIGNMENTS: { value: Alignment, label: string; }[] = [
    { value: 'Lawful Good', label: 'Legal Bueno'},
    { value: 'Neutral Good', label: 'Neutral Bueno'},
    { value: 'Chaotic Good', label: 'Caótico Bueno'},
    { value: 'Lawful Neutral', label: 'Legal Neutral'},
    { value: 'Neutral', label: 'Neutral'},
    { value: 'Chaotic Neutral', label: 'Caótico Neutral'},
    { value: 'Lawful Evil', label: 'Legal Malvado'},
    { value: 'Neutral Evil', label: 'Neutral Malvado'},
    { value: 'Chaotic Evil', label: 'Caótico Malvado'},
  ];