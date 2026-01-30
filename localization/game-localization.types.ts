export type GameLocale = "en" | "es";

export type LocalizationNamespace =
  | "alignments"
  | "races"
  | "abilities"
  | "classes"
  | "features"
  | "resources"
  | "actions"
  | "skills"
  | "equipment"
  | "spells";

/**
 * What textual data can exist for any game entity.
 * Not all entities need all fields.
 */
export type GameLocalizedEntry = {
  name?: string;
  shortName?: string;
  description?: string;
};

/**
 * One category of game things.
 * Keys are IDs already used in the game.
 */
export type GameLocalizationCategory = Record<
  string, // entity id (e.g. "bardic-inspiration")
  GameLocalizedEntry
>;

/**
 * Full game localization for a language.
 */
export type GameLocalization = {
  alignments?: GameLocalizationCategory;
  abilities?: GameLocalizationCategory;
  races?: GameLocalizationCategory;
  classes?: GameLocalizationCategory;
  features?: GameLocalizationCategory;
  resources?: GameLocalizationCategory;
  actions?: GameLocalizationCategory;
  skills?: GameLocalizationCategory;

  // future-proofing
  equipment?: GameLocalizationCategory;
  spells?: GameLocalizationCategory;
};
