import { ResourceBound, ResourceTemplate } from "./resource-template";

export type SpellSlotTemplate = ResourceTemplate & {
  tier: ResourceBound;
};
