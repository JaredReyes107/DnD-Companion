import { Feature } from "@/game/types/templates/feature";

export const RAGE: Feature = {
  id: "Rage",
  name: "Furia",
  source: "class",
  level: 1,

  description: `
      Durante tu turno, puedes dejarte llevar por la furia como acción adicional. Mientras estás en furia, consigues los siguientes beneficios si no llevas armadura pesada:
      - Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza.
      - Cuando realizas un ataque con armas cuerpo a cuerpo usando Fuerza, recibes un bonificador a la tirada de daño que aumenta según vas subiendo niveles de bárbaro, como se muestra en la columna «Daño de furia» de la tabla del bárbaro.
      - Tienes resistencia al daño contundente, perforante y cortante.
      - Si sabes lanzar conjuros, no puedes lanzarlos ni concentrarte en ellos mientras estás en furia.
      Tu furia dura un minuto. Acaba antes si te quedas inconsciente o, si antes de que acabe tu turno, no has atacado a una criatura hostil o no has recibido daño desde tu último turno. También puedes terminar tu furia durante tu turno como acción adicional.
      `,
  tags: ["combat", "damage", "resistance"],

  combatRole: "active",
  actionSlot: "bonusAction",

  charges: {
    scaling: {
      type: "level",
      values: [
        2,
        2,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        Infinity,
      ],
    },
    recharge: "longRest",
  },
  data: {
    rageDamageBonus: { base: 2, increasesAt: [9, 16], max: 4 },
    duration: "1 minute",
  },
};
