import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import { E } from "@/core/entities/rules/expr/expr";

const halfPB = E.div(E.pb(), E.n(2), "floor");
const notProficient = E.when({ type: "targetProficiency" }, E.n(0), halfPB);

const jackSkills = Object.fromEntries(
  ABILITIES.map((a) => [
    `jack_of_all_trades_${a}`,
    {
      id: `jack_of_all_trades_${a}`,
      sourceId: "jack_of_all_trades",
      statModel: { type: "check", nodeId: `skillCheck.${a}` },
      type: ModifierType.ADDITIVE,
      value: notProficient,
    } satisfies ModifierTemplate,
  ]),
);

export const JACK_OF_ALL_TRADES_IDS = [
  ...ABILITIES.map((a) => `jack_of_all_trades_${a}`),
  "jack_of_all_trades_tools",
  "jack_of_all_trades_initiative",
];

export const BARD_MODIFIERS: Record<string, ModifierTemplate> = {
  mantle_of_majesty_active: {
    id: "mantle_of_majesty_active",
    sourceId: "mantle_of_majesty",
    statModel: { type: "custom", key: "isActive" },
    type: ModifierType.ADDITIVE,
    value: 0,
  },

  ...jackSkills,
  jack_of_all_trades_tools: {
    id: "jack_of_all_trades_tools",
    sourceId: "jack_of_all_trades",
    statModel: { type: "check", nodeId: "tool.root" },
    type: ModifierType.ADDITIVE,
    value: notProficient,
  },
  /* NOTE: Might already be covered by initiative being a skill check node already. Needs testing.
  jack_of_all_trades_initiative: {
    id: "jack_of_all_trades_initiative",
    sourceId: "jack_of_all_trades",
    statModel: { type: "derived", key: "initiative" },
    type: ModifierType.ADDITIVE,
    value: halfPB,
  },
  */
};
