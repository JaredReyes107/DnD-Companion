import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const artillerist_actions_es: GameLocalizationCategory = {
    eldritch_cannon_create: {
        name: "Crear Cañon Arcano",
        description: `Creas un cañon de tamaño Pequeño o Mediano en un espacio desocupado a 5 pies de ti, sobre una superficie horizontal. Un cañon Mediano ocupa su espacio, mientras que un cañon Pequeño cabe en una mano. Cuando lo haces, decides del tipo de cañon de entre 'Lanzallamas', 'Ballesta de Fuerza' y 'Protector', además de si tiene pies o no para permitir que se mueva.
            El cañon tiene un CA de 18, puntos de golpe igual a cinco veces tu nivel de artífice y todas sus puntuaciones de característica son de 10. Si lanzan el conjuro 'Reparar' sobre él, recupera 2d6 puntos de golpe.
            El cañon desaparece si lo reducen a 0 puntos de golpe o después de 1 hora.`,
    },
    eldritch_cannon_activate: {
        name: "Activar Cañon Arcano",
        description: `Activas uno de tus cañones arcanos a 60 pies de ti, y puedes hacer que camine o escale hasta 15 pies a un espacio desocupado simepre y cuando tenga pies. El efecto de activación varía según su tipo:
        - Lanzallamas: Cada criatura en un cono de 15 pies adyacente al cañon debe realizar una tirada de salvación de Destreza contra tu CD de conjuros, recibiendo 2d8 de daño de fuego si fallan o la mitad si tienen éxito. Todo objeto inflamable en el área que no esté portado o cargado se encienden en llamas.
        - Ballesta de Fuerza: Haces un ataque de conjuro a distancia desde la posición del cañon con un rango de 120 pies. El ataque inflige 2d8 de daño de fuerza y, si impacta una criatura, la empuja hasta 5 pies lejos del cañon. 
        - Protector: El cañon y cada criatura de tu elección a 10 pies de él reciben puntos de golpe temporales igual a 1d8 + tu modificador de Inteligencia (mínimo de 1).`,
    },
    eldritch_cannon_dismiss: {
        name: "Disipar Cañon Arcano",
        description: `Disipas uno de tus Cañones Arcanos.`,
    },
    arcane_firearm_create: {
        name: "Crear Arma Arcana",
        description: `Al terminar un descanso largo y si tienes herramientas de carpintero, transformas una varita, bastón o cetro en tu Arma Arcana.
            Cuenta como foco arcano para tus conjuros de artífice, y agregas 1d8 a una de las tiradas de daño de conjuros que lances usándola.`,
    },
    eldritch_cannon_detonate: {
        name: "Detonar Cañon Arcano",
        description: `Un cañon a 60 pies de ti se autodestruye, provocando que cada criatura a 20 pies de él realice una tirada de salvación de Destreza contra tu CD de conjuros, recibiendo 3d8 de daño de fuerza si fallan o la mitad si tienen éxito.`,
    },
};
