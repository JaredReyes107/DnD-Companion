import { FeatureGrant } from "./feature-template";

// Options cannot grant further choice pools — prevents circular resolution
// and keeps the selection model simple. Revisit if Pact of the Tome
// or similar cross-pool unlocks need modeling.
export type OptionGrant = Exclude<FeatureGrant, { type: "choice" }>;

export type OptionTemplate = {
  id: string;
  poolId: string;
  grants?: OptionGrant[];
  tags?: string[];
};
