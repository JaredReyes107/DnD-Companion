import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const armorer_actions_es: GameLocalizationCategory = {
  arcane_armor_create: {
    name: "Crear Armadura Arcana",
    description: `Conviertes una armadura que lleves puesta en Armadura Arcana, siempre que tengas a mano herramientas de herrero.`,
  },
  arcane_armor_don_doff: {
    name: "Alternar Armadura Arcana",
    description: `Te pones o quitas tu armadura arcana.`,
  },
  change_armor_model: {
    name: "Cambiar Modelo de Armadura",
    description: `Cambias el modelo de tu armadura arcana al finalizar un descanso corto o largo, siempre que tengas herramientas de herrero a mano.`,
  },
  thunder_gauntlets: {
    name: "Guanteletes de Trueno",
    description: `Realizas un ataque de arma cuerpo a cuerpo sencilla usando estos guantes que infligen 1d8 de daño de trueno. Si impactas a una criatura,  tendrá desventaja en las tiradas de ataque contra cualquier objetivo que no seas tú hasta el principio de tu siguiente turno.`,
  },
  defensive_field: {
    name: "Campo Defensivo",
    description: `Obtienes una cantidad de puntos de golpe temporales igual a tu nivel en esta clase. Si te quitas la armadura, perderás estos puntos de golpe temporales.`,
  },
  lightning_launcher: {
    name: "Lanzadores de Relámpagos",
    description: `Realizas un ataque de arma a distancia sencilla usando estos lanzadores, con un alcance normal de 90 pies y un alcance largo de 300 pies. El ataque inflige 1d6 de daño de relámpago.`,
  },
  lightning_launcher_burst: {
    name: "Lanzadores de Relámpagos",
    description: `Cuando impactas un ataque con tus 'Lanzadores de Relámpago' a una criatura, infliges 1d6 de daño de relámpago adicional.`,
  },
  perfected_armor_guardian: {
    name: "Guardián Perfeccionado",
    description: `Cuando una criatura Enorme o más pequeña que puedas ver termine su turno a 30 pies o menos de ti, la obligas a realizar una tirada de salvación de Fuerza frente a tu CD de salvación de conjuros, lo que atraerá a esa criatura 30 pies hacia ti hasta un espacio sin ocupar. Si acercas el objetivo a un espacio a 5 pies o menos de ti, podrás hacer un ataque con arma cuerpo a cuerpo contra él como parte de esta reacción.`,
  },
};
