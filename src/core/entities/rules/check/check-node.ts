import { Ability } from "@/core/entities/rules/ability/ability.types";
import { CheckCategory } from "./check-category";

export type CheckNode = {
  id: string;
  category: CheckCategory;

  // Empty = root of its category. More than one entry = DAG membership
  // (e.g. a weapon under both "martial" and "ranged"). Single-parent is
  // the convention everywhere except weapons; nothing enforces that,
  // it's just what the base data happens to look like.
  parentIds: string[];

  // Default ability this node resolves against, if any. Absent for
  // node kinds with no default (most tools). Purely a registry default —
  // characters can override it per-node (see CharacterCheckState).
  ability?: Ability;
  // true = not a real check, just a parent for other nodes
  abstract?: boolean;
};
