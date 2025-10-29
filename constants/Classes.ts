/* eslint-disable prettier/prettier */
import { ClassName, Class, Subclass } from "@/types/Class";
import { BARBARIAN, BARD } from "./Classes/";

export const CLASSES: Record<ClassName, Class> = 
{
  Barbarian: BARBARIAN,
  Bard: BARD,
  Cleric: {
    name: 'Cleric',
    label: 'Clérigo',
    hitDie: 8,
    savingThrows: [4, 5],       // WIS, CHA
    primaryAbilities: [4],      // WIS
    casterType: 'Full',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Druid: {
    name: 'Druid',
    label: 'Druida',
    hitDie: 8,
    savingThrows: [2, 4],       // CON, WIS
    primaryAbilities: [4],      // WIS
    casterType: 'Full',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Fighter: {
    name: 'Fighter',
    label: 'Guerrero',
    hitDie: 10,
    savingThrows: [0, 2],       // STR, CON
    primaryAbilities: [0, 1],   // STR or DEX
    casterType: 'None',
    classFeatures: [],
  },
  Monk: {
    name: 'Monk',
    label: 'Monje',
    hitDie: 8,
    savingThrows: [0, 1],       // STR, DEX
    primaryAbilities: [0, 4],   // DEX, WIS
    casterType: 'None',
    classFeatures: [],
  },
  Paladin: {
    name: 'Paladin',
    label: 'Paladín',
    hitDie: 10,
    savingThrows: [0, 5],       // STR, CHA
    primaryAbilities: [0, 5],   // STR, CHA
    casterType: 'Half',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Ranger: {
    name: 'Ranger',
    label: 'Explorador',
    hitDie: 8,
    savingThrows: [0, 1],       // STR, DEX
    primaryAbilities: [1, 4],   // DEX, WIS
    casterType: 'Half',
    spellcastingAbility: 4,
    classFeatures: [],
  },
  Rogue: {
    name: 'Rogue',
    label: 'Pícaro',
    hitDie: 8,
    savingThrows: [1, 3],       // DEX, INT
    primaryAbilities: [1],      // DEX
    casterType: 'None',
    classFeatures: [],
  },
  Sorcerer: {
    name: 'Sorcerer',
    label: 'Hechicero',
    hitDie: 6,
    savingThrows: [2, 5],       // CON, CHA
    primaryAbilities: [5],      // CHA
    casterType: 'Full',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Warlock: {
    name: 'Warlock',
    label: 'Brujo',
    hitDie: 8,
    savingThrows: [4, 5],       // WIS, CHA
    primaryAbilities: [5],      // CHA
    casterType: 'Full',
    spellcastingAbility: 5,
    classFeatures: [],
  },
  Wizard: {
    name: 'Wizard',
    label: 'Mago',
    hitDie: 6,
    savingThrows: [3, 4],       // INT, WIS
    primaryAbilities: [3],      // INT
    casterType: 'Full',
    spellcastingAbility: 3,
    classFeatures: [],
  },
  Artificer: {
    name: 'Artificer',
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
    { name: 'Path of the Berserker', label: 'Senda del Berserker', source: 'PHB' },
    { name: 'Path of the Totem Warrior', label: 'Senda del Guerrero Totémico', source: 'PHB' },
    { name: 'Path of the Ancestral Guardian', label: 'Senda del Guardián Ancestral', source: 'XGE' },
    { name: 'Path of the Storm Herald', label: 'Senda del Heraldo de las Tormentas', source: 'XGE' },
    { name: 'Path of the Zealot', label: 'Senda del Fanático', source: 'XGE' },
    { name: 'Path of the Beast', label: 'Senda de la Bestia', source: 'TCE' },
    { name: 'Path of Wild Magic', label: 'Senda de la Magia Salvaje', source: 'TCE' },
  ],
  Bard: [
    { name: 'College of Lore', label: 'Colegio del Conocimiento', source: 'PHB' },
    { name: 'College of Valor', label: 'Colegio del Valor', source: 'PHB' },
    { name: 'College of Glamour', label: 'Colegio del Glamour', source: 'XGE' },
    { name: 'College of Swords', label: 'Colegio de las Espadas', source: 'XGE' },
    { name: 'College of Whispers', label: 'Colegio de los Susurros', source: 'XGE' },
    { name: 'College of Creation', label: 'Colegio de la Creación', source: 'TCE' },
    { name: 'College of Elocuence', label: 'Colegio de la Elocuencia', source: 'TCE' },
  ],
  Cleric: [
    { name: 'Knowledge Domain', label: 'Dominio del Conocimiento', source: 'PHB' },
    { name: 'Life Domain', label: 'Dominio de la Vida', source: 'PHB' },
    { name: 'Light Domain', label: 'Dominio de la Luz', source: 'PHB' },
    { name: 'Nature Domain', label: 'Dominio de la Naturaleza', source: 'PHB' },
    { name: 'Tempest Domain', label: 'Dominio de la Tempestad', source: 'PHB' },
    { name: 'Trickery Domain', label: 'Dominio del Engaño', source: 'PHB' },
    { name: 'War Domain', label: 'Dominio de la Guerra', source: 'PHB' },
    { name: 'Forge Domain', label: 'Dominio de la Forja', source: 'XGE' },
    { name: 'Grave Domain', label: 'Dominio de la Sepultura', source: 'XGE' },
    { name: 'Order Domain', label: 'Dominio del Orden', source: 'TCE' },
    { name: 'Peace Domain', label: 'Dominio de la Paz', source: 'TCE' },
    { name: 'Twilight Domain', label: 'Dominio del Crepúsculo', source: 'TCE' },
  ],
  Druid: [
    { name: 'Circle of the Land', label: 'Círuclo de la Tierra', source: 'PHB' },
    { name: 'Circle of the Moon', label: 'Círculo de la Luna', source: 'PHB' },
    { name: 'Circle of Dreams', label: 'Círculo de los Sueños', source: 'XGE' },
    { name: 'Circle of the Shepherd', label: 'Círculo del Pastor', source: 'XGE' },
    { name: 'Circle of Spores', label: 'Círculo de las Esporas', source: 'TCE' },
    { name: 'Circle of Stars', label: 'Círculo del Fuego Salvaje', source: 'TCE' },
    { name: 'Circle of Wildfire', label: 'Círculo de las Esporas', source: 'TCE' },
  ],
  Fighter: [
    { name: 'Champion', label: 'Campeón', source: 'PHB' },
    { name: 'Battle Master', label: 'Caballero Arcano', source: 'PHB' },
    { name: 'Battle Master', label: 'Maestro de la Batalla', source: 'PHB' },
    { name: 'Arcane Archer', label: 'Arquero Arcano', source: 'XGE' },
    { name: 'Cavalier', label: 'Caballero', source: 'XGE' },
    { name: 'Samurai', label: 'Samurái', source: 'XGE' },
    { name: 'Psi Warrior', label: 'Caballero Psiónico', source: 'TCE' },
    { name: 'Rune Knight', label: 'Caballero Rúnico', source: 'TCE' },
  ],
  Monk: [
    { name: 'Way of the Open Hand', label: 'Camino de la Mano Abierta', source: 'PHB' },
    { name: 'Way of Shadow', label: 'Camino de los Cuatro Elementos', source: 'PHB' },
    { name: 'Way of the Four Elements', label: 'Camino de la Sombra', source: 'PHB' },
    { name: 'Way of the Drunken Master', label: 'Camino del Maestro Borracho', source: 'XGE' },
    { name: 'Way of the Kensei', label: 'Camino del Kensei', source: 'XGE' },
    { name: 'Way of the Sun Soul', label: 'Camino del Alma Solar', source: 'XGE' },
    { name: 'Way of Mercy', label: 'Camino de la Misericordia', source: 'TCE' },
    { name: 'Way of the Astral Self', label: 'Camino del Ser Astral', source: 'TCE' },
  ],
  Paladin: [
    { name: 'Oath of Devotion', label: 'Juramento de Devoción', source: 'PHB' },
    { name: 'Oath of the Ancients', label: 'Juramento de los Antiguos', source: 'PHB' },
    { name: 'Oath of Vengeance', label: 'Juramento de Venganza', source: 'PHB' },
    { name: 'Oath of Conquest', label: 'Juramento de Conquista', source: 'XGE' },
    { name: 'Oath of Redemption', label: 'Juramento de Redención', source: 'XGE' },
    { name: 'Oath of Glory', label: 'Juramento de Gloria', source: 'TCE' },
    { name: 'Oath of the Watchers', label: 'Juramento de los Vigilantes', source: 'TCE' },
  ],
  Ranger: [
    { name: 'Hunter', label: 'Cazador', source: 'PHB' },
    { name: 'Beast Master', label: 'Señor de las Bestias', source: 'PHB' },
    { name: 'Gloom Stalker', label: 'Acechador Sombrío', source: 'XGE' },
    { name: 'Horizon Walker', label: 'Caminante del Horizonte', source: 'XGE' },
    { name: 'Monster Slayer', label: 'Asesino de Monstruos', source: 'XGE' },
    { name: 'Fey Wanderer', label: 'Errante Feérico', source: 'TCE' },
    { name: 'Swarmkeeper', label: 'Guardaenjambres', source: 'TCE' },
  ],
  Rogue: [
    { name: 'Thief', label: 'Ladrón', source: 'PHB' },
    { name: 'Assassin', label: 'Asesino', source: 'PHB' },
    { name: 'Arcane Trickster', label: 'Embaucador Arcano', source: 'PHB' },
    { name: 'Inquisitive', label: 'Inquisitivo', source: 'XGE' },
    { name: 'Mastermind', label: 'Mente Maestra', source: 'XGE' },
    { name: 'Scout', label: 'Batidor', source: 'XGE' },
    { name: 'Swashbuckler', label: 'Espadachín', source: 'XGE' },
    { name: 'Phantom', label: 'Fantasma', source: 'TCE' },
    { name: 'Soulknife', label: 'Rebanaalmas', source: 'TCE' },
  ],
  Sorcerer: [
    { name: 'Draconic Bloodline', label: 'Linaje de Dragón', source: 'PHB' },
    { name: 'Wild Magic', label: 'Magia Salvaje', source: 'PHB' },
    { name: 'Divine Soul', label: 'Alma Divina', source: 'XGE' },
    { name: 'Shadow Magic', label: 'Magia de Sombras', source: 'XGE' },
    { name: 'Storm Sorcery', label: 'Hechicería de la Tormenta', source: 'XGE' }, // previously SCAG, reprinted in XGE
    { name: 'Aberrant Mind', label: 'Mente Aberrante', source: 'TCE' },
    { name: 'Clockwork Soul', label: 'Alma Mecánica', source: 'TCE' },
  ],
  Warlock: [
    { name: 'The Archfey', label: 'El Señor Feérico', source: 'PHB' },
    { name: 'The Fiend', label: 'Ser Infernal', source: 'PHB' },
    { name: 'The Great Old One', label: 'El Primigenio', source: 'PHB' },
    { name: 'The Celestial', label: 'El Celestial', source: 'XGE' },
    { name: 'The Hexblade', label: 'El Filo Maléfico', source: 'XGE' },
    { name: 'The Fathomless', label: 'El Insondable', source: 'TCE' },
    { name: 'The Genie', label: 'El Genio', source: 'TCE' },
  ],
  Wizard: [
    { name: 'School of Abjuration', label: 'Escuela de Abjuración', source: 'PHB' },
    { name: 'School of Conjuration', label: 'Escuela de Conjuración', source: 'PHB' },
    { name: 'School of Divination', label: 'Escuela de Adivinación', source: 'PHB' },
    { name: 'School of Enchantment', label: 'Escuela de Encantamiento', source: 'PHB' },
    { name: 'School of Evocation', label: 'Escuela de Evocación', source: 'PHB' },
    { name: 'School of Illusion', label: 'Escuela de Ilusión', source: 'PHB' },
    { name: 'School of Necromancy', label: 'Escuela de Nigromancia', source: 'PHB' },
    { name: 'School of Transmutation', label: 'Escuela de Transmutación', source: 'PHB' },
    { name: 'War Magic', label: 'Magia de Guerra', source: 'XGE' },
    { name: 'Bladesinging', label: 'Canto de la Hoja', source: 'TCE' },
    { name: 'Order of Scribes', label: 'Orden de los Escribas', source: 'TCE' },
  ],
  Artificer: [
    { name: 'Alchemist', label: 'Alquimista', source: 'TCE' },
    { name: 'Armorer', label: 'Armero', source: 'TCE' },
    { name: 'Artillerist', label: 'Artillero', source: 'TCE' },
    { name: 'Battle Smith', label: 'Maestro de Batalla', source: 'TCE' },
  ],
};
