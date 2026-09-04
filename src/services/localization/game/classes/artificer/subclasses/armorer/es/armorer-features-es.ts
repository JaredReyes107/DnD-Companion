import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const armorer_features_es: GameLocalizationCategory = {
  tools_of_the_trade: {
    name: "Herramientas del Oficio",
    description: `Obtienes competencia con armaduras pesadas. También obtienes competencia con herramientas de herrero. Si ya tienes esta competencia con herramientas, obtienes competencia con otro tipo de herramientas de artesano que elijas.`,
  },
  armorer_spells: {
    name: "Conjuros de Armero",
    description: `Siempre tienes algunos conjuros preparados cuando alcanzas determinados niveles en esta clase, tal y como aparece en la tabla "Conjuros de armero". Estos conjuros se consideran, en lo que a ti respecta, conjuros de artífice, pero no cuentan para el total de conjuros de artífice que preparas.`,
  },
  arcane_armor: {
    name: "Armadura Arcana",
    description: `Gracias a tus actividades con la metalurgia, las armaduras han llegado a ser un conducto para tu magia. Como acción, puedes convertir una armadura que lleves puesta en Armadura Arcana, siempre que tengas a mano herramientas de herrero. Obtienes los siguientes beneficios mientras la lleves puesta:
      - Sí normalmente la armadura tiene un requisito de Fuerza, la Armadura Arcana no lo tiene en tu caso.
      - Puedes utilizarla como canalizador mágico para tus conjuros de artífice.
      - La armadura se adhiere a ti y no te la pueden quitar contra tu voluntad. También se expande para cubrir todo tu cuerpo, aunque puedes retirar o desplegar el casco como acción adicional. Si te falta algún miembro, la armadura lo sustituirá y funcionará exactamente igual que el miembro al que sustituya.
      - Puedes ponerte o quitarte la armadura como acción.
      La armadura sigue siendo Armadura Arcana hasta que te pongas otra armadura o mueras.`,
  },
  armor_model: {
    name: "Modelos de Armadura",
    description: `Puedes personalizar tu Armadura Arcana. Para ello, puedes elegir uno de los siguientes modelos de armadura: guardián o infiltrado. El modelo que elijas te brinda beneficios especiales mientras lo llevas puesto.
      Cada modelo incluye un arma especial. Al atacar con esa arma, puedes añadir tu modificador por Inteligencia, en lugar de tu modificador por Fuerza o Destreza, a las tiradas de ataque y de daño. Puedes cambiar de modelo de armadura tras finalizar un descanso corto o largo, siempre que tengas herramientas de herrero a mano.
        Guardián. Diseñas tu armadura para estar en primera línea de batalla. Tiene los siguientes rasgos:
        - Guanteletes de Trueno. Cada uno de los guanteletes de la armadura cuenta como un arma cuerpo a cuerpo sencilla si no estás sujetando nada y causa 1d8 de daño de trueno si impacta. Si un guantelete impacta a una criatura, esta tendrá desventaja en las tiradas de ataque contra cualquier objetivo que no seas tú hasta el principio de tu siguiente turno, ya que la armadura emite mágica mente un halo distractor cada vez que la criatura ataca a alguien distinto a ti.
        - Campo Defensivo. Como acción adicional, puedes obtener una cantidad de puntos de golpe temporales igual a tu nivel en esta clase, que sustituirán a los puntos de golpe temporales que ya tengas. Si te quitas la armadura, perderás estos puntos de golpe temporales. Puedes usar esta acción adicional una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.
        Infiltrado. Personalizas tu armadura para llevar a cabo acciones sutiles. Tiene los siguientes rasgos:
        - Lanzador de Relámpagos. En uno de tus puños recubiertos por la armadura o en el pecho (a tu elección), aparece un nodo con aspecto de joya. Cuenta como un arma a distancia sencilla, con un alcance normal de 90 pies y un alcance largo de 300, y causa 1d6 de daño de relámpago si impacta. Una vez en cada uno de tus turnos, cuando impactas a una criatura con esta arma, puedes causar 1d6 de daño de relámpago adicional a ese objetivo.
        - Pasos potenciados. Tu velocidad caminando aumenta en 5 pies.
        - Campo Amortiguador. Tienes ventaja en las pruebas de Destreza (Sigilo). Si normalmente la armadura da desventaja en este tipo de pruebas, la ventaja y la desventaja se anulan entre sí de la forma habitual.`,
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: `Cuando lleves a cabo la acción de Atacar durante tu turno, podrás hacer dos ataques en lugar de uno.`,
  },
  armor_modifications: {
    name: "Modificaciones de Armadura",
    description: `Aprendes a utilizar las infusiones de artífice para modificar especialmente tu Armadura Arcana. A partir de ahora, las distintas partes de esa armadura se considerarán objetos independientes en lo que respecta al rasgo Imbuir Objeto: la armadura (la parte del pecho), las botas, el casco y su arma especial. Cada uno de estos elementos puede llevar una infusión y, si cambias el modelo de armadura con el rasgo Modelos de Armadura, la infusión también cambiará con él. Además, la cantidad máxima de objetos que puedes imbuir a la vez aumenta en 2, pero los objetos adicionales deben formar parte de tu Armadura Arcana.`,
  },
  perfected_armor: {
    name: "Armadura Perfeccionada",
    description: `Tu Armadura Arcana consigue beneficios adicionales en función del modelo, tal y como se explica a continuación.
      Guardián. Cuando una criatura Enorme o más pequeña que puedas ver termine su turno a 30 pies o menos de ti, puedes usar tu reacción para obligar mágicamente a esa criatura a realizar una tirada de salvación de Fuerza frente a tu CD de salvación de conjuros, lo que atraerá a esa criatura 30 pies hacia ti hasta un espacio sin ocupar. Si acercas el objetivo a un espacio a 5 pies o menos de ti, podrás hacer un ataque con arma cuerpo a cuerpo contra él como parte de esta reacción.
        Puedes usar esta reacción una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.
      Infiltrado. Cualquier criatura que reciba daño de relámpago de tu Lanzador de Relámpagos brillará con luz mágica hasta el principio de tu siguiente turno. La criatura reluciente emite luz tenue en un radio de 5 pies y tiene una desventaja en las tiradas de ataque contra ti, ya que la luz le da una descarga si te ataca. Además, tendrás ventaja en la siguiente tirada de ataque contra ella y, si el ataque impacta, el objetiv`,
  },
};
