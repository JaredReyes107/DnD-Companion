import { Character } from "@/core/entities/character/Character";
import { CostOption } from "@/core/entities/actions/cost-option";
import {
  ResourceContext,
  resourceCurrent,
  resourceMax,
} from "@/core/rules/character/resource-max";
import { ResolvedCostChoice } from "@/core/rules/costs/resolve-cost-choices";
import {
  getLocalizedName,
  getLocalizedShortName,
} from "@/services/localization/localization-helper";

const resourceLabel = (id: string) =>
  getLocalizedShortName("resources", id) ?? getLocalizedName("resources", id);

export function costChoiceLabel(
  character: Character,
  ctx: ResourceContext,
  choice: ResolvedCostChoice,
  option: CostOption,
): string {
  const chosen = Object.values(choice.params).flatMap((p) =>
    p.kind === "resource" ? [p.resourceId] : [],
  )[0];
  if (chosen) {
    return `${resourceLabel(chosen)}\n${resourceCurrent(character, chosen, ctx)}/${resourceMax(character, chosen, ctx)}`;
  }
  const named = getLocalizedName("costOptions", choice.optionId, "");
  if (named) return named;
  const first = option.lines.flatMap((l) =>
    "resourceId" in l.resource ? [l.resource.resourceId] : [],
  )[0];
  return first ? resourceLabel(first) : choice.optionId;
}
