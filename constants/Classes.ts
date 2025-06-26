import { ClassName, Class, Subclass } from "@/app/Types/Class";
import { BARBARIAN, BARD } from "./Classes/";

export const CLASSES: Record<ClassName, Class> = 
{
  Barbarian: BARBARIAN,
  Bard: BARD,
  Cleric: {
    value: 'Cleric',
    label: 'Clérigo',
    hitDie: 8,
    savingThrows: [4, 5],       // WIS, CHA
    primaryAbilities: [4],      // WIS
    casterType: 'Full',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Druid: {
    value: 'Druid',
    label: 'Druida',
    hitDie: 8,
    savingThrows: [2, 4],       // CON, WIS
    primaryAbilities: [4],      // WIS
    casterType: 'Full',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Fighter: {
    value: 'Fighter',
    label: 'Guerrero',
    hitDie: 10,
    savingThrows: [0, 2],       // STR, CON
    primaryAbilities: [0, 1],   // STR or DEX
    casterType: 'None',
    classFeatures: [],
  },
  Monk: {
    value: 'Monk',
    label: 'Monje',
    hitDie: 8,
    savingThrows: [0, 1],       // STR, DEX
    primaryAbilities: [0, 4],   // DEX, WIS
    casterType: 'None',
    classFeatures: [],
  },
  Paladin: {
    value: 'Paladin',
    label: 'Paladín',
    hitDie: 10,
    savingThrows: [0, 5],       // STR, CHA
    primaryAbilities: [0, 5],   // STR, CHA
    casterType: 'Half',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Ranger: {
    value: 'Ranger',
    label: 'Explorador',
    hitDie: 8,
    savingThrows: [0, 1],       // STR, DEX
    primaryAbilities: [1, 4],   // DEX, WIS
    casterType: 'Half',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Rogue: {
    value: 'Rogue',
    label: 'Pícaro',
    hitDie: 8,
    savingThrows: [1, 3],       // DEX, INT
    primaryAbilities: [1],      // DEX
    casterType: 'None',
    classFeatures: [],
  },
  Sorcerer: {
    value: 'Sorcerer',
    label: 'Hechicero',
    hitDie: 6,
    savingThrows: [2, 5],       // CON, CHA
    primaryAbilities: [5],      // CHA
    casterType: 'Full',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Warlock: {
    value: 'Warlock',
    label: 'Brujo',
    hitDie: 8,
    savingThrows: [4, 5],       // WIS, CHA
    primaryAbilities: [5],      // CHA
    casterType: 'Full',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Wizard: {
    value: 'Wizard',
    label: 'Mago',
    hitDie: 6,
    savingThrows: [3, 4],       // INT, WIS
    primaryAbilities: [3],      // INT
    casterType: 'Full',
    spellcastingAbility: 3,
    classFeatures: [],
  },
  Artificer: {
    value: 'Artificer',
    label: 'Artífice',
    hitDie: 8,
    savingThrows: [2, 3],       // CON, INT
    primaryAbilities: [3],      // INT
    casterType: 'Half',
    spellcastingAbility: 3,
    classFeatures: [],
  },
};

export const SUBCLASSES: { [key in ClassName]?: Subclass[] } = {
  Barbarian: [
    { value: 'Path of the Berserker', name: 'Senda del Berserker', source: 'PHB' },
    { value: 'Path of the Totem Warrior', name: 'Senda del Guerrero Totémico', source: 'PHB' },
    { value: 'Path of the Ancestral Guardian', name: 'Senda del Guardián Ancestral', source: 'XGE' },
    { value: 'Path of the Storm Herald', name: 'Senda del Heraldo de las Tormentas', source: 'XGE' },
    { value: 'Path of the Zealot', name: 'Senda del Fanático', source: 'XGE' },
    { value: 'Path of the Beast', name: 'Senda de la Bestia', source: 'TCE' },
    { value: 'Path of Wild Magic', name: 'Senda de la Magia Salvaje', source: 'TCE' },
  ],
  Bard: [
    { value: 'College of Lore', name: 'Colegio del Conocimiento', source: 'PHB' },
    { value: 'College of Valor', name: 'Colegio del Valor', source: 'PHB' },
    { value: 'College of Glamour', name: 'Colegio del Glamour', source: 'XGE' },
    { value: 'College of Swords', name: 'Colegio de las Espadas', source: 'XGE' },
    { value: 'College of Whispers', name: 'Colegio de los Susurros', source: 'XGE' },
    { value: 'College of Creation', name: 'Colegio de la Creación', source: 'TCE' },
    { value: 'College of Elocuence', name: 'Colegio de la Elocuencia', source: 'TCE' },
  ],
  Cleric: [
    { value: 'Knowledge Domain', name: 'Dominio del Conocimiento', source: 'PHB' },
    { value: 'Life Domain', name: 'Dominio de la Vida', source: 'PHB' },
    { value: 'Light Domain', name: 'Dominio de la Luz', source: 'PHB' },
    { value: 'Nature Domain', name: 'Dominio de la Naturaleza', source: 'PHB' },
    { value: 'Tempest Domain', name: 'Dominio de la Tempestad', source: 'PHB' },
    { value: 'Trickery Domain', name: 'Dominio del Engaño', source: 'PHB' },
    { value: 'War Domain', name: 'Dominio de la Guerra', source: 'PHB' },
    { value: 'Forge Domain', name: 'Dominio de la Forja', source: 'XGE' },
    { value: 'Grave Domain', name: 'Dominio de la Sepultura', source: 'XGE' },
    { value: 'Order Domain', name: 'Dominio del Orden', source: 'TCE' },
    { value: 'Peace Domain', name: 'Dominio de la Paz', source: 'TCE' },
    { value: 'Twilight Domain', name: 'Dominio del Crepúsculo', source: 'TCE' },
  ],
  Druid: [
    { value: 'Circle of the Land', name: 'Círuclo de la Tierra', source: 'PHB' },
    { value: 'Circle of the Moon', name: 'Círculo de la Luna', source: 'PHB' },
    { value: 'Circle of Dreams', name: 'Círculo de los Sueños', source: 'XGE' },
    { value: 'Circle of the Shepherd', name: 'Círculo del Pastor', source: 'XGE' },
    { value: 'Circle of Spores', name: 'Círculo de las Esporas', source: 'TCE' },
    { value: 'Circle of Stars', name: 'Círculo del Fuego Salvaje', source: 'TCE' },
    { value: 'Circle of Wildfire', name: 'Círculo de las Esporas', source: 'TCE' },
  ],
  Fighter: [
    { value: 'Champion', name: 'Campeón', source: 'PHB' },
    { value: 'Battle Master', name: 'Caballero Arcano', source: 'PHB' },
    { value: 'Battle Master', name: 'Maestro de la Batalla', source: 'PHB' },
    { value: 'Arcane Archer', name: 'Arquero Arcano', source: 'XGE' },
    { value: 'Cavalier', name: 'Caballero', source: 'XGE' },
    { value: 'Samurai', name: 'Samurái', source: 'XGE' },
    { value: 'Psi Warrior', name: 'Caballero Psiónico', source: 'TCE' },
    { value: 'Rune Knight', name: 'Caballero Rúnico', source: 'TCE' },
  ],
  Monk: [
    { value: 'Way of the Open Hand', name: 'Camino de la Mano Abierta', source: 'PHB' },
    { value: 'Way of Shadow', name: 'Camino de los Cuatro Elementos', source: 'PHB' },
    { value: 'Way of the Four Elements', name: 'Camino de la Sombra', source: 'PHB' },
    { value: 'Way of the Drunken Master', name: 'Camino del Maestro Borracho', source: 'XGE' },
    { value: 'Way of the Kensei', name: 'Camino del Kensei', source: 'XGE' },
    { value: 'Way of the Sun Soul', name: 'Camino del Alma Solar', source: 'XGE' },
    { value: 'Way of Mercy', name: 'Camino de la Misericordia', source: 'TCE' },
    { value: 'Way of the Astral Self', name: 'Camino del Ser Astral', source: 'TCE' },
  ],
  Paladin: [
    { value: 'Oath of Devotion', name: 'Juramento de Devoción', source: 'PHB' },
    { value: 'Oath of the Ancients', name: 'Juramento de los Antiguos', source: 'PHB' },
    { value: 'Oath of Vengeance', name: 'Juramento de Venganza', source: 'PHB' },
    { value: 'Oath of Conquest', name: 'Juramento de Conquista', source: 'XGE' },
    { value: 'Oath of Redemption', name: 'Juramento de Redención', source: 'XGE' },
    { value: 'Oath of Glory', name: 'Juramento de Gloria', source: 'TCE' },
    { value: 'Oath of the Watchers', name: 'Juramento de los Vigilantes', source: 'TCE' },
  ],
  Ranger: [
    { value: 'Hunter', name: 'Cazador', source: 'PHB' },
    { value: 'Beast Master', name: 'Señor de las Bestias', source: 'PHB' },
    { value: 'Gloom Stalker', name: 'Acechador Sombrío', source: 'XGE' },
    { value: 'Horizon Walker', name: 'Caminante del Horizonte', source: 'XGE' },
    { value: 'Monster Slayer', name: 'Asesino de Monstruos', source: 'XGE' },
    { value: 'Fey Wanderer', name: 'Errante Feérico', source: 'TCE' },
    { value: 'Swarmkeeper', name: 'Guardaenjambres', source: 'TCE' },
  ],
  Rogue: [
    { value: 'Thief', name: 'Ladrón', source: 'PHB' },
    { value: 'Assassin', name: 'Asesino', source: 'PHB' },
    { value: 'Arcane Trickster', name: 'Embaucador Arcano', source: 'PHB' },
    { value: 'Inquisitive', name: 'Inquisitivo', source: 'XGE' },
    { value: 'Mastermind', name: 'Mente Maestra', source: 'XGE' },
    { value: 'Scout', name: 'Batidor', source: 'XGE' },
    { value: 'Swashbuckler', name: 'Espadachín', source: 'XGE' },
    { value: 'Phantom', name: 'Fantasma', source: 'TCE' },
    { value: 'Soulknife', name: 'Rebanaalmas', source: 'TCE' },
  ],
  Sorcerer: [
    { value: 'Draconic Bloodline', name: 'Linaje de Dragón', source: 'PHB' },
    { value: 'Wild Magic', name: 'Magia Salvaje', source: 'PHB' },
    { value: 'Divine Soul', name: 'Alma Divina', source: 'XGE' },
    { value: 'Shadow Magic', name: 'Magia de Sombras', source: 'XGE' },
    { value: 'Storm Sorcery', name: 'Hechicería de la Tormenta', source: 'XGE' }, // previously SCAG, reprinted in XGE
    { value: 'Aberrant Mind', name: 'Mente Aberrante', source: 'TCE' },
    { value: 'Clockwork Soul', name: 'Alma Mecánica', source: 'TCE' },
  ],
  Warlock: [
    { value: 'The Archfey', name: 'El Señor Feérico', source: 'PHB' },
    { value: 'The Fiend', name: 'Ser Infernal', source: 'PHB' },
    { value: 'The Great Old One', name: 'El Primigenio', source: 'PHB' },
    { value: 'The Celestial', name: 'El Celestial', source: 'XGE' },
    { value: 'The Hexblade', name: 'El Filo Maléfico', source: 'XGE' },
    { value: 'The Fathomless', name: 'El Insondable', source: 'TCE' },
    { value: 'The Genie', name: 'El Genio', source: 'TCE' },
  ],
  Wizard: [
    { value: 'School of Abjuration', name: 'Escuela de Abjuración', source: 'PHB' },
    { value: 'School of Conjuration', name: 'Escuela de Conjuración', source: 'PHB' },
    { value: 'School of Divination', name: 'Escuela de Adivinación', source: 'PHB' },
    { value: 'School of Enchantment', name: 'Escuela de Encantamiento', source: 'PHB' },
    { value: 'School of Evocation', name: 'Escuela de Evocación', source: 'PHB' },
    { value: 'School of Illusion', name: 'Escuela de Ilusión', source: 'PHB' },
    { value: 'School of Necromancy', name: 'Escuela de Nigromancia', source: 'PHB' },
    { value: 'School of Transmutation', name: 'Escuela de Transmutación', source: 'PHB' },
    { value: 'War Magic', name: 'Magia de Guerra', source: 'XGE' },
    { value: 'Bladesinging', name: 'Canto de la Hoja', source: 'TCE' },
    { value: 'Order of Scribes', name: 'Orden de los Escribas', source: 'TCE' },
  ],
  Artificer: [
    { value: 'Alchemist', name: 'Alquimista', source: 'TCE' },
    { value: 'Armorer', name: 'Armero', source: 'TCE' },
    { value: 'Artillerist', name: 'Artillero', source: 'TCE' },
    { value: 'Battle Smith', name: 'Maestro de Batalla', source: 'TCE' },
  ],
};
