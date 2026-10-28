import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const STARS_RESOURCES: Record<string, ResourceTemplate> = {
  star_map_guiding_bolt: {
    id: "star_map_guiding_bolt",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "star_map_guiding_bolt",
        obtainedVia: { via: "subclass", classId: "druid", subclassId: "stars" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  cosmic_omen: {
    id: "cosmic_omen",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cosmic_omen",
        obtainedVia: { via: "subclass", classId: "druid", subclassId: "stars" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["reaction", "support"],
  },
};
