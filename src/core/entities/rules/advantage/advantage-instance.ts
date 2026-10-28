import { ExpiryCondition } from "../duration/expiry-condition";
import { Condition } from "../../modifiers/Condition";

export type AdvantagePolarity = "advantage" | "disadvantage";

export type AdvantageInstance = {
  id: string; // unique instance id, same convention as RuntimeModifierInstance
  nodeId: string; // the CheckNode this applies to — no ancestor propagation, same as before
  polarity: AdvantagePolarity;
  sourceId: string; // "manual", a featureId, a spellId, etc. — used to revoke by source
  expiryConditions?: ExpiryCondition[];
  // When set, this instance only counts toward resolution when the condition is true.
  // Used for resource-gated passives (e.g. Cloud Rune: active while cloud_rune >= 1).
  condition?: Condition;
};
