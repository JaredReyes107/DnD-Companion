import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { getSpellcastingEntries } from "@/core/entities/spellcasting/spellcasting";
import { getPactCasterGrantors } from "./pact-magic-helper";
import { SpellSlotTemplate } from "@/core/entities/rules/spell-slot-template";
import { resolveBound } from "@/core/rules/character/resource-scaling";
import { ResourceGrantor } from "@/core/entities/rules/grantor";

function getStandardCasterGrantors(character: Character) {
  return getSpellcastingEntries(character)
    .filter((entry) => entry.spellcastingTemplate.kind === "standard")
    .map((entry) => ({
      system: "feature" as const,
      featureId: `spell_slots`,
      obtainedVia: {
        via: "class" as const,
        classId: entry.classInstance.classId,
      },
    }));
}

function buildStandardSlotTemplate(
  tier: number,
  grantors: ResourceGrantor[],
): SpellSlotTemplate {
  return {
    id: `spell_slot_${tier}`,
    category: "spell_slots",
    origin: { book: "PHB" },
    grantors,
    tier: { kind: "value", amount: tier },
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: `spell-slot-tier-${tier}` } },
    },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells"],
  };
}

function buildPactSlotTemplate(grantors: ResourceGrantor[]): SpellSlotTemplate {
  return {
    id: "pact_slots",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors,
    tier: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "pact-slot-tier" } },
    },
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "pact-slot-count" } },
    },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spellcasting"],
  };
}

export function buildSpellSlots(character: Character): CharacterResources {
  const resources: CharacterResources = {};
  const entries = getSpellcastingEntries(character);

  const hasStandardCaster = entries.some(
    (e) => e.spellcastingTemplate.kind === "standard",
  );
  const hasPactCaster = entries.some(
    (e) => e.spellcastingTemplate.kind === "pact",
  );

  if (hasStandardCaster) {
    const grantors = getStandardCasterGrantors(character);
    for (let tier = 1; tier <= 9; tier++) {
      const template = buildStandardSlotTemplate(tier, grantors);
      const max = resolveBound(template.max, character, template.grantors);

      if (max === "unbounded" || max > 0) {
        resources[template.id] = {
          resourceId: template.id,
          max,
          current: max === "unbounded" ? 0 : max,
          min: 0,
        };
      }
    }
  }

  if (hasPactCaster) {
    const grantors = getPactCasterGrantors(character);
    const template = buildPactSlotTemplate(grantors);
    const max = resolveBound(template.max, character, template.grantors);

    if (max === "unbounded" || max > 0) {
      resources[template.id] = {
        resourceId: template.id,
        max,
        current: max === "unbounded" ? 0 : max,
        min: 0,
      };
    }
  }

  return resources;
}
