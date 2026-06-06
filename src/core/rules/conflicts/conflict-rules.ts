import { Effect } from "../../entities/modifiers/Effect";
import { ConflictType } from "./conflict-types";

export interface ConflictRule {
  type: ConflictType;
  applies(a: Effect, b: Effect): boolean;
  resolve(a: Effect, b: Effect): Effect | null;
}
