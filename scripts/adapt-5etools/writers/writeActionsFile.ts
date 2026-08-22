import { ParsedSubclass } from "../parsers/parseSubclass";

/**
 * Always emits a valid, importable file — even when the subclass has no
 * unique actions of its own. Same rationale as the localization empty
 * stubs: a missing import (rather than an empty one) is what breaks
 * registry aggregation, not an empty Record.
 *
 * Action effects are behavioral/mechanical (resourceId costs, action
 * slots, etc.) and aren't derivable from 5etools data — this is left
 * empty for manual authoring, same as the "TODO: resources, actions"
 * left on every generated feature.
 */
export function writeActionsFile(sub: ParsedSubclass): string {
  const constName = `${sub.id.toUpperCase()}_ACTIONS`;

  return `import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ${constName}: Record<string, ActionInstance> = {
  some_action: {
    id: "some_action",
    sourceId: "${sub.id}",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
`;
}
