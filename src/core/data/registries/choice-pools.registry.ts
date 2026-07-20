import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";
import { BASE_POOLS } from "@/core/data/rules/choice-pools/choice-pools";

const homebrewPools: Record<string, ChoicePoolTemplate> = {};

export function registerHomebrewPool(pool: ChoicePoolTemplate) {
  homebrewPools[pool.id] = pool;
}

export function getChoicePoolRegistry(): Record<string, ChoicePoolTemplate> {
  return {
    ...BASE_POOLS,
    ...homebrewPools,
  };
}

export function getChoicePoolById(id: string): ChoicePoolTemplate {
  const pool = getChoicePoolRegistry()[id];
  if (!pool) {
    throw new Error(`ChoicePoolTemplate not found: ${id}`);
  }
  return pool;
}

export function getPoolsForClass(classId: string): ChoicePoolTemplate[] {
  return Object.values(getChoicePoolRegistry()).filter(
    (p) => p.classId === classId,
  );
}
