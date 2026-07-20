import { OptionTemplate } from "@/core/entities/rules/option-template";
import { BASE_OPTIONS } from "@/core/data/rules/options/options";

const homebrewOptions: Record<string, OptionTemplate> = {};

export function registerHomebrewOption(option: OptionTemplate) {
  homebrewOptions[option.id] = option;
}

export function getOptionRegistry(): Record<string, OptionTemplate> {
  return {
    ...BASE_OPTIONS,
    ...homebrewOptions,
  };
}

export function getOptionById(id: string): OptionTemplate {
  const option = getOptionRegistry()[id];
  if (!option) {
    throw new Error(`OptionTemplate not found: ${id}`);
  }
  return option;
}

export function getOptionsForPool(poolId: string): OptionTemplate[] {
  return Object.values(getOptionRegistry()).filter(
    (o) => o.poolIds.includes(poolId),
  );
}
