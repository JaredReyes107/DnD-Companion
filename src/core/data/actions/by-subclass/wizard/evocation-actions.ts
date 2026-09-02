import { ActionInstance } from "@/core/entities/actions/action-instance";

export const EVOCATION_ACTIONS: Record<string, ActionInstance> = {
  overchannel: {
    id: "overchannel",
    sourceId: "evocation",
    boards: ["combat"],
    duration: { kind: "instantaneous" }, //Alongside spellcasting, no action cost
    effects: [],
  },
};
