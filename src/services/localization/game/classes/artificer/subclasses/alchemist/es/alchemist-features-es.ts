import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const alchemist_features_es: GameLocalizationCategory = {
  alchemist_spells: {
    name: "Conjuros de Alquimista",
    description: `Siempre tienes algunos conjuros preparados cuando alcanzas determinados niveles en esta clase, tal y como aparece en la tabla "Conjuros de alquimista". Estos conjuros se consideran, en lo que a ti respecta, conjuros de artífice, pero no cuentan para el total de conjuros de artífice que preparas.`,
  },
  tool_proficiency_alchemist: {
    name: "Competencia con Herramientas",
    description: `Obtienes competencia con suministros de alquimista. Si ya tienes esta competencia, obtienes competencia con otro tipo de herramientas de artesano que elijas.`,
  },
  experimental_elixir: {
    name: "Elixir Experimental",
    description: `Tras finalizar un descanso largo puedes crear mágicamente un elixir experimental en un frasco vacío que toques. Haz una tirada y consulta la tabla "Elixir experimental" para ver el efecto del elixir, que se activará cuando alguien lo beba. Como acción, una criatura puede beber el elixir o administrárselo a una criatura incapacitada.
      Puedes crear más elixires experimentales si gastas un espacio de conjuro de nivel 1 o superior para cada uno. Si lo haces, usas esta acción para crear el elixir en un frasco vacío que toques y eliges su efecto en la tabla "Elixires experimentales".
      Para crear un elixir experimental, necesitas tener contigo suministros de alquimista y los elixires que crees con este rasgo durarán hasta que se beban o hasta el final de tu siguiente descanso largo.
      Cuando alcances ciertos niveles en esta clase, podrás hacer más elixires tras un descanso largo: dos en el nivel 6 y tres en el 15. Tira el dado para ver el efecto de cada elixir por separado. Cada elixir necesita su propio frasco.
      Elixires Experimentales:
      - Curación. La criatura que lo bebe recupera una cantidad de puntos de golpe igual a 2d4 + tu modificador por Inteligencia.
      - Rapidez. La velocidad caminando de la criatura que lo bebe aumenta en 10 pies durante 1 hora.
      - Resistencia. La criatura que lo bebe recibe un bonificador de +1 a la CA durante 10 minutos.
      - Audacia. La criatura que lo bebe puede tirar un d4 y sumar el resultado a cada tirada de ataque y de salvación que haga durante el siguiente minuto.
      - Volar. La criatura que lo bebe consigue una velocidad volando de 10 pies durante 10 minutos.
      - Transformación. El cuerpo de la criatura que lo bebe se transforma como con el conjuro Alterar el propio aspecto. La criatura que lo bebe decide qué transformación causa el conjuro, cuyos efectos duran 10 minutos.`,
  },
  alchemical_savant: {
    name: "Experto en Alquimia",
    description: `Has conseguido un dominio de experto de los elementos químicos mágicos, de forma que potencias la curación y el daño que produces a través de ellos. Siempre que lances un conjuro con tus suministros de alquimista como canalizador mágico, conseguirás un bonificador para una tirada del conjuro. Esa tirada debe hacer recuperar puntos de golpe o ser una tirada de daño que cause daño de ácido, de fuego, necrótico o de veneno, y el bonificador es igual a tu modificador por Inteligencia (mínimo de +1).`,
  },
  restorative_reagents: {
    name: "Reactivos Restablecedores",
    description: `Puedes incluir reactivos restablecedores en algunas de tus obras:
      - Cuando una criatura beba un elixir experimental que hayas creado tú, conseguirá una cantidad puntos de golpe temporales igual a 2d6 + tu modificador por Inteligencia (mínimo de 1 punto de golpe temporal).
      - Puedes lanzar Restablecimiento menor sin gastar un espacio de conjuro y sin preparar el conjuro, siempre que utilices suministros de alquimista como canalizador mágico. Puedes hacerlo una cantidad de veces igual a tu modificador por Inteligencia (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  chemical_mastery: {
    name: "Dominio de la Química",
    description: `Te has expuesto a tantos elementos químicos que apenas suponen un riesgo para ti y los puedes utilizar para terminar rápidamente con algunas dolencias:
      - Consigues resistencia al daño de ácido y de veneno y eres inmune al estado "envenenado".
      - Puedes lanzar Restablecimiento mayor y Curar sin gastar un espacio de conjuro, sin preparar el conjuro y sin componentes materiales, siempre que utilices suministros de alquimista como canalizador mágico. Cuando lances un conjuro con este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo.`,
  },
};
