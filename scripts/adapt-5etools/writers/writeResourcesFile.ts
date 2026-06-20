import { ParsedSubclass } from "../parsers/parseSubclass";

/**
 * Always emits a valid, importable file — even when the subclass has no
 * unique resources of its own. Same rationale as the localization empty
 * stubs and writeActionsFile: a missing import breaks registry
 * aggregation, an empty Record does not.
 *
 * Resource scaling/recharge rules are behavioral and aren't derivable
 * from 5etools data — left empty for manual authoring.
 */
export function writeResourcesFile(sub: ParsedSubclass): string {
  const constName = `${sub.id.toUpperCase()}_RESOURCES`;

  return `import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ${constName}: Record<string, ResourceTemplate> = {
  // TODO: add unique resources for this subclass, e.g.:
  // some_resource: {
  //   id: "some_resource",
  //   sourceId: "${sub.id}",
  //   category: "subclass_features",
  //   scalingType: "fixed:1",
  //   recharge: "longRest",
  //   tags: [],
  // },
};
`;
}
