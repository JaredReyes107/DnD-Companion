import { Character } from "@/core/entities/character/Character";
import {
  buildResourceContext,
  ResourceContext,
  resourceCurrent,
  resourceMax,
} from "./resource-max";

/** Sets `current` (clamped to [0, max]). Unbounded resources track nothing. */
export function setResourceCurrent(
  character: Character,
  id: string,
  current: number,
  ctx: ResourceContext = buildResourceContext(character),
): Character {
  const instance = character.resources[id];
  if (!instance) return character;
  const max = resourceMax(character, id, ctx);
  if (!Number.isFinite(max)) return character;
  const spent = Math.min(max, Math.max(0, max - current));
  if (spent === instance.spent) return character;
  return {
    ...character,
    resources: { ...character.resources, [id]: { ...instance, spent } },
  };
}

/** amount < 0 spends, > 0 recovers. */
export function applyResourceDelta(
  character: Character,
  id: string,
  amount: number,
  ctx: ResourceContext = buildResourceContext(character),
): Character {
  if (!character.resources[id]) return character;
  return setResourceCurrent(
    character,
    id,
    resourceCurrent(character, id, ctx) + amount,
    ctx,
  );
}
