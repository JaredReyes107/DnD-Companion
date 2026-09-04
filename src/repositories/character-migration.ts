import { Character } from "@/core/entities/character/Character";
import { ClassInstance } from "@/core/entities/character/class-instance";
import { CharacterClasses } from "@/core/entities/character/character-classes";
import {
  defaultScalarFields,
  defaultCharacterClasses,
} from "./character-defaults";

/**
 * Normalizes a raw, possibly-stale object from AsyncStorage into a valid
 * Character. Runs on every read so schema changes never crash the UI on
 * old saved data.
 *
 * Strategy: static scalar/object fields are backfilled from
 * defaultScalarFields when missing or malformed. Dynamic maps
 * (keyed by runtime IDs) default to {} wholesale rather than being
 * merged key-by-key. `classes` gets dedicated shape migration since its
 * legacy shape doesn't structurally resemble the current one.
 */
export function hydrateCharacter(raw: unknown): Character {
  const record = asRecord(raw);

  return {
    ...defaultScalarFields,
    ...record,
    classes: hydrateCharacterClasses(record.classes),
    features: hydrateMap(record.features),
    featureChoices: hydrateMap(record.featureChoices),
    resources: hydrateMap(record.resources),
    actions: hydrateMap(record.actions),
    statModifiers: hydrateMap(record.statModifiers),
    skills: hydrateMap(record.skills),
  } as Character;
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : {};
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Defaults any dynamic, runtime-keyed map field to {} if missing/malformed. */
function hydrateMap<T>(raw: unknown): Record<string, T> {
  return isRecord(raw) ? (raw as Record<string, T>) : {};
}

function hydrateCharacterClasses(raw: unknown): CharacterClasses {
  if (isRecord(raw) && Array.isArray(raw.order) && isRecord(raw.byId)) {
    // Already the current { byId, order } shape.
    return raw as unknown as CharacterClasses;
  }

  // Legacy shape assumed: a plain array of class-like objects.
  // Confirm/adjust once the real legacy shape is known — currently
  // unverified, since no pre-{byId,order} character was inspected.
  const legacyArray = Array.isArray(raw) ? raw : [];
  const byId: Record<string, ClassInstance> = {};
  const order: string[] = [];

  for (const entry of legacyArray) {
    const classEntry = asRecord(entry);
    const classId = classEntry.classId as string | undefined;
    if (!classId) continue;

    byId[classId] = {
      classId,
      level: typeof classEntry.level === "number" ? classEntry.level : 1,
      subclassId: classEntry.subclassId as string | undefined,
      spellcastingInstance: classEntry.spellcastingInstance as
        | ClassInstance["spellcastingInstance"]
        | undefined,
    };
    order.push(classId);
  }

  return order.length > 0 ? { byId, order } : defaultCharacterClasses;
}
