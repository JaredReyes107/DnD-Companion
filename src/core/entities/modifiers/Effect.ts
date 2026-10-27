import { Duration } from "./Duration";
import { DslParsedModifier } from "../../rules/dsl/dsl-parser";

export interface Effect {
  id: string;
  effectId: string;
  sourceId: string;
  modifiers: DslParsedModifier[];
  duration?: Duration;
  tags?: string[];
}
