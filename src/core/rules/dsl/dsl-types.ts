import { z } from "zod";
import { ExecutionNode } from "../execution/execution-node";

export const ModifierDSLLayout = z.object({
  stat: z.string(),
  type: z.enum(["additive", "multiplicative", "set"]),
  value: z.union([z.string(), z.number()]),
  condition: z.string().optional(),
});

export const RuleDSLLayout = z.object({
  id: z.string(),
  type: z.enum(["spell", "feature", "condition"]),
  duration: z
    .object({
      type: z.enum(["rounds", "turns", "permanent"]),
      value: z.number().optional(),
    })
    .optional(),

  trigger: z.nativeEnum(ExecutionNode).optional(),
  condition: z.string().optional(),
  reaction: z.boolean().optional(),

  modifiers: z.array(ModifierDSLLayout).optional(),
  stacking: z.enum(["highest", "stack"]).optional(),
  tags: z.array(z.string()).optional(),
  conflicts: z.array(z.any()).optional(),
});

export type ModifierDSL = z.infer<typeof ModifierDSLLayout>;
export type RuleDSL = z.infer<typeof RuleDSLLayout>;
