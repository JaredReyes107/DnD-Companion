import { Feature } from "@/types";
import { Class, Subclass } from "@/types/Class";

const CLASS_FEATURES: Feature[] =
[
  {
    name: "Rage",
    label: "Furia",
    level: 1,
    featureSource: "class",
    description:
      `
        Durante tu turno, puedes dejarte llevar por la furia como acción adicional. Mientras estás en furia, consigues los siguientes beneficios si no llevas armadura pesada:
        - Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza.
        - Cuando realizas un ataque con armas cuerpo a cuerpo usando Fuerza, recibes un bonificador a la tirada de daño que aumenta según vas subiendo niveles de bárbaro, como se muestra en la columna «Daño de furia» de la tabla del bárbaro.
        - Tienes resistencia al daño contundente, perforante y cortante.
        - Si sabes lanzar conjuros, no puedes lanzarlos ni concentrarte en ellos mientras estás en furia.
        Tu furia dura un minuto. Acaba antes si te quedas inconsciente o, si antes de que acabe tu turno, no has atacado a una criatura hostil o no has recibido daño desde tu último turno. También puedes terminar tu furia durante tu turno como acción adicional.
        `,
    charges: {
      scaling: {
        type: 'level',
        values: [2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,6,6,Infinity],
      },
      recharge: "longRest"
    },
    data: {
      rageDamageBonus: { base: 2, increasesAt: [9, 16], max: 4 },
      duration: "1 minute"
    },
    tags: ["combat", "damage", "resistance"]
  },
  {
    name: "Unarmored Defense",
    label: "Defensa sin armadura",
    level: 1,
    featureSource: "class",
    description:
      `
        Mientras no llevas la armadura, tu CA es igual a 10 + tu modificador por Destreza + tu modificador por Constitución
      `,
    data: {
      acFormula: "10 + DEX + CON"
    },
    tags: ["defense", "passive"]
  },
  {
    name: "Reckless Attack",
    label: "Ataque Temerario",
    level: 2,
    featureSource: "class",
    description:
      `
        Cuando ataques por primera vez en tu turno, puedes hacer un ataque temerario, que, durante ese turno, te da ventaja en las tiradas de ataque con armas cuerpo a cuerpo utilizando Fuerza, 
        pero, a cambio, las tiradas de ataque que se hagan contra ti tienen ventaja hasta tu siguiente turno.
      `,
    tags: ["combat", "tactical"]
  },
  {
    name: "Sentido del Peligro",
    level: 2,
    featureSource: "class",
    description:
      `
        Tienes ventaja en las tiradas de salvación de Destreza contra efectos que puedes ver, como trampas y conjuros. 
        Para conseguir este beneficio, no puedes estar cegado, ensordecido ni incapacitado.
      `,
    tags: ["defense", "awareness"]
  },
  {
    name: "Primal Path",
    level: 3,
    featureSource: "class",
    description:
      `
        En el nivel 3 inicias una senda de tu elección. Tu elección te concede rasgos en los niveles 3, 6, 10 y 14.
      `,
    tags: ["subclass"]
  },
  {
    name: "Mejora de característica",
    level: 4,
    featureSource: "class",
    description:
      `
        Incrementa una característica de tu elección en 2 o dos características en 1. 
        Alternativamente, puedes obtener un dote.
      `,
    tags: ["improvement", "scaling"]
  },
  {
    name: "Ataque Adicional",
    level: 5,
    featureSource: "class",
    description:
      `
        Puedes atacar dos veces en lugar de una cuando realices la acción de atacar en tu turno
      `,
    tags: ["combat"]
  },
  {
    name: "Movimiento Rápido",
    level: 5,
    featureSource: "class",
    description:
      `
        Tu velocidad aumenta en 10 pies mientras no lleves armadura pesada
      `,
    data: {
      speedBonus: 10
    },
    tags: ["mobility"]
  },
  {
    name: "Instinto Salvaje",
    level: 7,
    featureSource: "class",
    description:
      `
        Tienes ventaja en las tiradas de iniciativa. 
        Además, si estás sorprendido al principio del combate pero no incapacitado, puedes actuar con normalidad en tu primer turno si entras en furia antes de hacer cualquier otra cosa.
      `,
    tags: ["awareness", "initiative"]
  },
  {
    name: "Crítico Brutal",
    level: 9,
    featureSource: "class",
    description:
      `
        Puedes tirar dados adicionales de daño del arma cuando determines el daño adicional de un golpe crítico con un ataque cuerpo a cuerpo.
      `,
    data: {
      extraCritDice: { base: 1, increasesAt: [13, 17], max: 3 }
    },
    tags: ["damage"]
  },
  //Aquí termina
  {
    name: "Relentless Rage",
    level: 11,
    featureSource: "class",
    description:
      "If you drop to 0 hit points while raging and don't die outright, you can make a DC 10 Constitution saving throw. On a success, you drop to 1 hit point instead. The DC increases by 5 each time you succeed, resetting on a short or long rest.",
    tags: ["survivability"]
  },
  {
    name: "Persistent Rage",
    level: 15,
    featureSource: "class",
    description:
      "Your rage is so fierce that it ends early only if you fall unconscious or choose to end it.",
    tags: ["combat"]
  },
  {
    name: "Indomitable Might",
    level: 18,
    featureSource: "class",
    description:
      "If your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
    tags: ["utility"]
  },
  {
    name: "Primal Champion",
    level: 20,
    featureSource: "class",
    description:
      "Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
    data: {
      strCapIncrease: 4,
      conCapIncrease: 4
    },
    tags: ["capstone", "scaling"]
  }
]

export const BARBARIAN: Class = 
{
  value: 'Barbarian',
  label: 'Bárbaro',
  hitDie: 12,
  savingThrows: [0, 2],       // STR, CON
  primaryAbilities: [0, 2],   // STR, CON
  casterType: 'None',
  classFeatures: CLASS_FEATURES,
}