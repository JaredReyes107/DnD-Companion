import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";
import { OptionTemplate } from "@/core/entities/rules/option-template";

export function buildProficiencyPool(args: {
  id: string;
  sourceId: string;
  classId: string;
  nodeIds: string[];
  picks: number;
  level?: number;
}): { pool: ChoicePoolTemplate; options: Record<string, OptionTemplate> } {
  const options = Object.fromEntries(
    args.nodeIds.map((nodeId) => {
      const id = `${args.id}_${nodeId}`;
      return [
        id,
        {
          id,
          poolIds: [args.id],
          tags: ["passive", "proficiency"],
          grants: [{ type: "proficiency", nodeId }],
        } satisfies OptionTemplate,
      ];
    }),
  );
  return {
    pool: {
      id: args.id,
      sourceId: args.sourceId,
      classId: args.classId,
      selectionTrigger: "onLevelUp",
      optionIds: Object.keys(options),
      picksAtLevel: { [args.level ?? 1]: args.picks },
      allowDuplicates: false,
    },
    options,
  };
}
