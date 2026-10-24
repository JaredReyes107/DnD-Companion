export type ResourceInstance = {
  resourceId: string;
  /** Uses consumed. current = max - spent; max is derived from the template (never stored). */
  spent: number;
};
