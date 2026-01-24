export function returnNaturalNumber(text: string): number {
  const sanitized = text.replace(/[^0-9]/g, "");

  // prevent negatives, decimals, etc
  const value = sanitized === "" ? 0 : parseInt(sanitized, 10);

  return value;
}
