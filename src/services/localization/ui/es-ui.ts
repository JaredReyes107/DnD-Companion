export const es = {
  combatTabs: {
    sheet: "Estadísticas",
    stats: "Estado",
    actions: "Acciones",
    resources: "Recursos",
    equipment: "Equipamiento",
  },
  character: {
    singular: "Personaje",
    plural: "Personajes",
    create: "Crear Personaje",
    save: "Guardar Personaje",
    input: "Nombre del personaje",
  },
  race: {
    singular: "Raza",
    input: "Selecciona una raza",
  },
  alignment: {
    singular: "Alineamiento",
    input: "Selecciona un alineamiento",
  },
  xp: {
    full: "Puntos de experiencia",
  },
  class: {
    singular: "Clase",
    plural: "Clases",
    main: "Clase principal",
    input: "Selecciona una clase",
  },
  subclass: {
    singular: "Subclase",
    input: "Selecciona una subclase",
  },
  stats: {
    abilityScores: "Características",
    skills: "Habilidades",
    speed: "Velocidad",
  },
  savingThrows: {
    full: "Tiradas de Salvación",
    death: "Tiradas de salvación de muerte",
    successes: "Éxitos",
    failures: "Fallos",
  },
  pb: {
    full: "Bonificador de competencia",
    segmented: "Bonificador de {value} Competencia",
    short: "BC",
  },
  hp: {
    full: "Puntos de golpe",
    short: "HP",
    segmented: "Puntos de {value} golpe base",
    total: "HP Total",
    temporal: "HP Temporal",
    hitDice: "Dados de golpe",
  },
  ac: {
    full: "Clase de armadura",
    short: "CA",
    segmented: "Clase de {value} Armadura",
  },
  initiative: {
    full: "Iniciativa",
    bonus: "Bonus de iniciativa",
    order: "Orden de {value} Iniciativa",
  },
  actionEconomy: {
    action: "Acción",
    bonusAction: "Acción extra",
    reaction: "Reacción",
  },
  rest: {
    long: "Descanso largo",
    short: "Descanso corto",
  },
  measurements: {
    feet: "Pies",
    grid: "Casillas",
    meters: "Metros",
  },
  button: {
    accept: "Aceptar",
    confirm: "Confirmar",
    cancel: "Cancelar",
    close: "Cerrar",
    exit: "Salir",
  },
  picker: {
    selectOption: "Selecciona una opción",
    selectAlignment: "Selecciona un alineamiento",
    selectClass: "Selecciona una clase",
    addClass: "Añadir clase",
    selectSubclass: "Selecciona una subclase",
  },
  //tab-stats.tsx
  action: {
    takenDamage: "Daño recibido",
    newTempHp: "Vida temporal nueva",
    receivedHealing: "Curación recibida",
    useHitDice: "Usar dados de golpe",
  },
  //tab-actions.tsx
  actionSection: {
    action: "Acciones",
    bonusAction: "Acciones Adicionales",
    reaction: "Reacciones",
    instantaneous: "Inmediatas",
  },
  timeIntervals: {
    startTurn: "Comenzar Nuevo Turno",
    endTurn: "Terminar Turno",
    startRound: "Comenzar Nueva Ronda",
  },
  //tab-resources.tsx
  resourceSection: {
    spell_slots: "Espacios de conjuro",
    pact_slots: "Espacios de pacto",
    class_features: "De clase",
    subclass_features: "De subclase",
    racial_features: "Raciales",
    feats: "De dotes",
    homebrew: "Homebrew",
  },
  settings: {
    language: "Idioma",
    languageSelf: "Español",
  },
  error: {
    mainClassMissing: "La clase principal no puede estar vacía",
  },
} as const;
