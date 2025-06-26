import { Feature } from "@/app/Types";
import { Class, Subclass } from "@/app/Types/Class";

const CLASS_FEATURES: Feature[] =
[
  {
    name: "Inspiración Bárdica (d6)",
    level: 1,
    source: "class",
    description:
      `
        Puedes usar una acción adicional durante tu turno para elegir una criatura a menos de 60 pies de ti que no seas tú mismo y que pueda oírte. Esa criatura recibe un dado de inspiración bárdica.
            
        Una vez durante los siguientes diez minutos, la criatura puede tirar el dado y sumar el resultado a una prueba de característica, tirada de ataque o tirada de salvación. Puede esperar hasta después de haber tirado el d20 para decidir si usa el dado de inspiración de bardo, pero debe decidirlo antes de que el director de juego diga si la tirada ha tenido éxito o ha fallado. Una vez se tira el dado de inspiración de bardo, se pierde. 
        Una criatura solo puede tener un dado de inspiración de bardo a la vez.
            
        Puedes usar este rasgo tantas veces como tu modificador de Carisma (mínimo 1). Recuperas los usos que hayas gastado cuando finalices un descanso largo.
      `,
      tags: ["combat"],

      charges: 
      {
        scaling: 
        {
          type: 'ability',
          abilityIndex: 5,
        },
        recharge: "longRest"
      },
    },
    {
      name: "Canción de descanso",
      level: 3,
      source: "class",
      description:
        "Supongamos que esto es un Lorem Ipsum.",
      tags: ["utility"]
    },
    {
      name: "Secretos mágicos",
      level: 5,
      source: "class",
      description:
        "Solo otro placeholder más.",
      data: {
        strCapIncrease: 4,
        conCapIncrease: 4
      },
    tags: ["capstone", "scaling"]
  }  
]

export const BARD: Class = 
{
  value: 'Bard',
  label: 'Bardo',
  hitDie: 8,
  savingThrows: [1, 5],       // DEX, CHA
  primaryAbilities: [5],      // CHA
  casterType: 'Full',
  spellcastingAbility: 5,
  classFeatures: CLASS_FEATURES,
}