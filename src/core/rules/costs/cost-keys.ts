import { CostLine, CostOption } from "@/core/entities/actions/cost-option";

/** The address an override uses for a line. */
export function lineKey(line: CostLine): string {
  if (line.key) return line.key;
  return "resourceId" in line.resource
    ? line.resource.resourceId
    : `param:${line.resource.param}`;
}

const duplicates = (keys: string[]) => [
  ...new Set(keys.filter((k, i) => keys.indexOf(k) !== i)),
];

export const duplicateLineKeys = (o: CostOption) =>
  duplicates(o.lines.map(lineKey));
export const duplicateParamIds = (o: CostOption) =>
  duplicates((o.params ?? []).map((p) => p.id));
export const duplicateOptionIds = (options: CostOption[]) =>
  duplicates(options.map((o) => o.id));
