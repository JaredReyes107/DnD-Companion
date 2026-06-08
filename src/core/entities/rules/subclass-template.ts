import { SpellcastingTemplate } from "./spellcasting-template";
import { FeatureTemplate } from "./feature-template";

/**
 * A SubclassTemplate defines the static data for a D&D 5E subclass.
 *
 * Subclasses are always owned by a class (via classId) but are independent
 * data sources in the engine. Their features feed the same getActiveFeatures
 * pipeline as class features, and their resources/actions live in the same
 * flat registries — no special handling required.
 *
 * A subclass MAY define a spellcastingTemplate for subclasses that grant
 * spellcasting independently of their parent class (e.g. Eldritch Knight,
 * Arcane Trickster).
 */
export type SubclassTemplate = {
  id: string;         // e.g. "champion", "battle_master", "eldritch_knight"
  classId: string;    // e.g. "fighter" — the owning class
  name: string;       // TODO: remove once i18n covers subclasses

  source?: string;    // e.g. "Players Handbook", "Tasha's Cauldron" — for homebrew distinction

  /**
   * Subclass features keyed by character level (not subclass level).
   * Levels with no subclass features should be omitted or left as empty arrays.
   * The engine collects these via the same loop used for class features.
   */
  featuresByLevel: Record<number, FeatureTemplate[]>;

  /**
   * Optional — only for subclasses that independently grant spellcasting.
   * Examples: Eldritch Knight (fighter), Arcane Trickster (rogue).
   * Most subclasses leave this undefined.
   */
  spellcastingTemplate?: SpellcastingTemplate;
};
