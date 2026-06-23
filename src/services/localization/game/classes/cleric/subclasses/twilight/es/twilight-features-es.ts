import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const twilight_features_es: GameLocalizationCategory = {
  twilight_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description: "Ganas competencia con armas marciales y armaduras pesadas.",
  },
  eyes_of_night: {
    name: "Ojos Nocturnos",
    description: `Puedes ver en la oscuridad más absoluta. Tienes visión en la oscuridad hasta 300 pies. En ese radio, puedes ver con luz tenue como si hubiera luz brillante, y en la oscuridad como si hubiera luz tenue.
      Como acción, puedes compartir mágicamente la visión en la oscuridad de este rasgo con una cantidad de criaturas voluntarias que puedas ver hasta 10 pies o menos de ti igual a tu modificador por Sabiduría o menos (mínimo una criatura). La visión en la oscuridad compartida dura 1 hora. Una vez que la compartas, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes un espacio de conjuro de cualquier nivel para compartirla otra vez.`,
  },
  vigilant_blessing: {
    name: "Bendición Vigilante",
    description: "La noche te ha enseñado a estar alerta. Como acción, proporcionas ventaja a una criatura que toques (incluido tú) en la siguiente tirada de iniciativa que haga. Este beneficio finaliza inmediatamente después de la tirada o si vuelves a usar este rasgo.",
  },
  channel_divinity_twilight_sanctuary: {
    name: "Canalizar Divinidad: Santuario del Crepúsculo",
    description: `Puedes usar tu rasgo Canalizar Divinidad para revitalizar a tus aliados con un crepúsculo relajante.
      Como acción, muestras tu símbolo sagrado y de ti emana una esfera crepuscular. La esfera está centrada en ti, tiene un radio de 30 pies y brilla con luz tenue. La esfera se mueve a la vez que tú y dura 1 minuto o hasta que quedes incapacitado o mueras. Siempre que una criatura (incluyéndote a ti) termine su turno en la esfera, puedes concederle una cantidad puntos de golpe temporales igual a 1d6 más tu nivel de clérigo. Alternativamente, puedes acabar con un efecto que hace que esté hechizada o asustada.`,
  },
  steps_of_night: {
    name: "Pasos Nocturnos",
    description: "Puedes aprovechar el poder místico de la noche para elevarte por el aire. Como acción adicional si hay luz tenue u oscuridad, puedes concederte mágicamente una velocidad volando igual a tu velocidad caminando durante 1 minuto. Puedes usar esta acción adicional una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.",
  },
  divine_strike: {
    name: "Golpe Divino",
    description: "Obtienes la capacidad de insuflar energía divina a los golpes de tu arma. Una vez en cada uno de tus turnos, cuando impactes a una criatura con un ataque con arma, podrás hacer que el ataque inflija 1d8 de daño radiante adicional. Cuando alcanzas el nivel 14, el daño adicional aumenta a 2d8.",
  },
  twilight_shroud: {
    name: "Velo Crepuscular",
    description: "El crepúsculo que invocas proporciona un manto protector: tú y tus aliados tienen cobertura media mientras estén en la esfera creada por tu Santuario Crepuscular.",
  },
};
