export const en = {
  combatTabs: {
    sheet: "Stats",
    stats: "Status",
    actions: "Actions",
    resources: "Resources",
    equipment: "Equipment",
  },
  character: {
    singular: "Character",
    plural: "Characters",
    create: "Create Character",
    save: "Save Character",
    input: "Character's name",
  },
  race: {
    singular: "Race",
    input: "Select a race",
  },
  alignment: {
    singular: "Alignment",
    input: "Selecciona un alineamiento",
  },
  xp: {
    full: "Experience points",
  },
  class: {
    singular: "Class",
    plural: "Classes",
    main: "Main class",
    input: "Select a class",
  },
  subclass: {
    singular: "Subclass",
    input: "Select a subclass",
  },
  stats: {
    abilityScores: "Abilities",
    skills: "Skills",
    speed: "Speed",
  },
  savingThrows: {
    full: "Saving Throws",
    death: "Death Saving Throws",
    successes: "Passed",
    failures: "Failed",
  },
  pb: {
    full: "Proficiency bonus",
    segmented: "Proficiency {value} Bonus",
    short: "PB",
  },
  hp: {
    full: "Hit Points",
    short: "HP",
    segmented: "Hit {value} Points",
    total: "Total HP",
    temporal: "Temporal HP",
    hitDice: "Hit Dice",
  },
  ac: {
    full: "Armor class",
    short: "AC",
    segmented: "Armor {value} Class",
  },
  initiative: {
    full: "Initiative",
    bonus: "Initiative bonus",
    order: "Initiative {value} Order",
  },
  actionEconomy: {
    action: "Action",
    bonusAction: "Bonus Action",
    reaction: "Reaction",
  },
  rest: {
    long: "Long rest",
    short: "Short rest",
  },
  measurements: {
    feet: "Feet",
    grid: "Squares",
    meters: "Meters",
  },
  button: {
    accept: "Accept",
    confirm: "Confirm",
    cancel: "Cancel",
    close: "Close",
    exit: "Exit",
  },
  picker: {
    selectOption: "Select and option",
    selectAlignment: "Select an alignment",
    selectClass: "Select a class",
    addClass: "Add class",
    selectSubclass: "Select a subclass",
  },
  //tab-stats.tsx
  action: {
    takenDamage: "Damage received",
    newTempHp: "New temporal HP",
    receivedHealing: "Healing received",
    useHitDice: "Use hit die",
  },
  //tab-actions.tsx
  actionSection: {
    action: "Actions",
    bonusAction: "Bonus Actions",
    reaction: "Reactions",
    instantaneous: "Instantaneous",
  },
  timeIntervals: {
    startTurn: "Start New Turn",
    endTurn: "End Turn",
    startRound: "Start New Round",
  },
  //tab-resources.tsx
  resourceSection: {
    spell_slots: "Spell slots",
    pact_slots: "Pact slots",
    class_features: "Class",
    subclass_features: "Subclass",
    racial_features: "Racial",
    feats: "Feats",
    homebrew: "Homebrew",
  },
  resourceValues: {
    unbounded: "Unlimited",
  },
  settings: {
    language: "Language",
    languageSelf: "English",
  },
  error: {
    mainClassMissing: "Main class must not be empty",
  },
} as const;
