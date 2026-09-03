import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_features_es } from "../subclasses/abjuration/es/abjuration-features-es";
import { conjuration_features_es } from "../subclasses/conjuration/es/conjuration-features-es";
import { divination_features_es } from "../subclasses/divination/es/divination-features-es";
import { enchantment_features_es } from "../subclasses/enchantment/es/enchantment-features-es";
import { evocation_features_es } from "../subclasses/evocation/es/evocation-features-es";
import { illusion_features_es } from "../subclasses/illusion/es/illusion-features-es";
import { necromancy_features_es } from "../subclasses/necromancy/es/necromancy-features-es";
import { transmutation_features_es } from "../subclasses/transmutation/es/transmutation-features-es";

import { war_magic_features_es } from "../subclasses/war-magic/es/war-magic-features-es";

import { scribes_features_es } from "../subclasses/scribes/es/scribes-features-es";
import { bladesinging_features_es } from "../subclasses/bladesinging/es/bladesinging-features-es";

export const subclass_features: GameLocalizationCategory = {
  // PHB
  ...abjuration_features_es,
  ...conjuration_features_es,
  ...divination_features_es,
  ...enchantment_features_es,
  ...evocation_features_es,
  ...illusion_features_es,
  ...necromancy_features_es,
  ...transmutation_features_es,

  // XGE
  ...war_magic_features_es,

  // TCE
  ...bladesinging_features_es,
  ...scribes_features_es,
};

export const wizard_features_es: GameLocalizationCategory = {
  ...subclass_features,

  spellcasting_wizard: {
    name: "Lanzamiento de Conjuros",
    description: `Como estudiante de magia arcana, tienes un libro de conjuros que contiene conjuros que muestran los primeros destellos del verdadero poder.
      Trucos
        En el nivel 1, conoces tres trucos de tu elección de la lista de conjuros de mago. En niveles superiores aprenderás más, como se muestra en la columna «Trucos» de la tabla del mago.
      Libro de conjuros
        En el nivel 1, tienes un libro de conjuros con seis conjuros de mago de nivel 1 de tu elección. Tu libro de conjuros es un repositorio de los conjuros de mago que conoces, excepto los trucos, los cuales tienes memorizados.
      Preparar y lanzar conjuros
        La tabla del mago muestra cuántos espacios de conjuro tienes para lanzar tus conjuros. Para hacerlo, debes gastar un espacio del nivel del conjuro o superior. Recuperas todos los espacios de conjuro gastados cuanto termines un descanso prolongado.
        Tú preparas la lista de conjuros que puedes lanzar: elige un número de conjuros de mago de tu libro de conjuros igual a tu modificador por Inteligencia + tu nivel de mago (mínimo un conjuro). Los conjuros deben ser de un nivel para el que tengas espacios de conjuro.
      Por ejemplo, si eres un mago de nivel 3, tienes cuatro espacios de conjuro de nivel 1 y dos de nivel 2. Con Inteligencia 16, tu lista de conjuros preparados puede incluir seis conjuros de nivel 1 o 2, en cualquier combinación, elegidos del libro de conjuros. Si preparas el conjuro de nivel 1 Proyectil mágico, puedes lanzarlo usando un espacio de nivel 1 o un espacio de nivel 2. Lanzar el conjuro no hace que se elimine de la lista de conjuros preparados.
        Puedes cambiar tu lista de conjuros preparados durante un descanso prolongado. Preparar una nueva lista requiere pasar tiempo estudiando el libro de conjuros y memorizando los ensalmos y los gestos que hay que hacer para lanzar los conjuros: al menos 1 minuto por nivel de conjuro para cada conjuro de la lista.
      Característica para lanzar conjuros
        La característica con la que lanzas tus conjuros de mago es Inteligencia, dado que los aprendes a través del estudio y la memorización. Usas Inteligencia cuando un conjuro se refiera a tu característica para lanzar conjuros. Además, usas tu modificador por Inteligencia para establecer la CD de la tirada de salvación de los conjuros de mago que lances y cuando hagas una tirada de ataque con uno.
          CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Inteligencia
          Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Inteligencia
      Lanzamiento ritual
        Puedes lanzar cualquier conjuro de mago como si fuera un ritual si tiene la etiqueta «ritual» y si lo tienes en tu libro de conjuros. No necesitas tener el conjuro preparado.
      Foco para lanzar conjuros
        Puedes usar un foco arcano como foco para lanzar tus conjuros de mago.
      Aprender conjuros de nivel 1 y superior
        Cada vez que subes de nivel de mago, puedes añadir dos conjuros de mago de tu elección a tu libro de conjuros. Cada uno de estos conjuros debe ser de un nivel para el que tengas espacios de conjuro, como se indica en la tabla del mago. Durante tus aventuras, puedes encontrar otros conjuros que añadir (ver «Tu libro de conjuros»).`,
  },
  arcane_recovery: {
    name: "Recuperación Arcana",
    description: `Has aprendido a recuperar parte de tu energía arcana estudiando tu libro de conjuros. Una vez por día, cuando hagas un descanso breve, puedes recuperar espacios de conjuro. Los espacios de conjuro pueden tener un nivel combinado igual o menor que la mitad de tu nivel de mago (redondeando hacia arriba) y, como máximo, nivel 5. Por ejemplo, si eres un mago de nivel 4, puedes recuperar hasta un valor de dos niveles de espacios de conjuro. Puedes recuperar un espacio de conjuro de nivel 2 o dos espacios de conjuro de nivel 1.`,
  },
  arcane_tradition: {
    name: "Tradición Arcana",
    description: `Comienzas a seguir una tradición arcana, que moldea tu forma de practicar la magia. Tu elección te otorga rasgos en el nivel 2 y de nuevo en los niveles 6, 10 y 14.`,
  },
  spell_mastery: {
    name: "Maestría con Conjuros",
    description: `Has conseguido tal maestría con ciertos conjuros que puedes lanzarlos a voluntad. Elige un conjuro de mago de nivel 1 y otro de nivel 2 que estén en tu libro de conjuros. Puedes lanzarlos a su menor nivel sin gastar un espacio de conjuro cuando los tengas preparados. Para lanzarlos a un nivel superior, debes gastar un espacio de conjuro con normalidad.
      Dedicando 8 horas de estudio, puedes cambiar los conjuros por otros de mismo nivel.`,
  },
  signature_spells: {
    name: "Conjuros Insignia",
    description: `Consigues maestría con dos conjuros poderosos y puedes lanzarlos con poco esfuerzo. Elige dos conjuros de mago de nivel 3 de tu libro de conjuros como tus conjuros insignia. Siempre tienes esos conjuros preparados y no se cuentan entre el número de conjuros que tienes preparados. Puedes lanzar cada uno de ellos a nivel 3 sin gastar espacios de conjuro. Cuando lo hagas, no puedes volver a hacerlo hasta que no termines un descanso prolongado o breve.
      Si quieres lanzar cualquiera de estos conjuros a un nivel superior, debes gastar un espacio de conjuro con normalidad.`,
  },
};
