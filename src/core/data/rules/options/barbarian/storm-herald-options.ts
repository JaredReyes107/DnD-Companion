import { OptionTemplate } from "@/core/entities/rules/option-template";

const environment = (
  e: "desert" | "sea" | "tundra",
): [string, OptionTemplate] => [
  `storm_environment_${e}`,
  {
    id: `storm_environment_${e}`,
    poolIds: ["storm_aura_environment"],
    tags: ["combat", "aura"],
    grants: [
      { type: "action", id: `storm_aura_${e}` },
      { type: "action", id: `raging_storm_${e}` },
    ],
  },
];

export const STORM_HERALD_OPTIONS: Record<string, OptionTemplate> =
  Object.fromEntries([
    environment("desert"),
    environment("sea"),
    environment("tundra"),
  ]);
