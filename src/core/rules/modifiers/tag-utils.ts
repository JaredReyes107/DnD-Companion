export function hasTag(tags: string[] | undefined, tag: string): boolean {
  if (!tags) return false;
  return tags.includes(tag);
}

export function matchAnyTag(
  targetTags: string[] | undefined,
  requiredTags: string[],
): boolean {
  if (!targetTags) return false;
  return targetTags.some((tag) => requiredTags.includes(tag));
}

export function matchAllTags(
  targetTags: string[] | undefined,
  requiredTags: string[],
): boolean {
  if (!targetTags) return false;
  return requiredTags.every((tag) => targetTags.includes(tag));
}
