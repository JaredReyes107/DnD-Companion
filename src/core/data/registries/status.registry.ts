import { StatusTemplate } from "@/core/entities/rules/status/status-template";
import { BASE_STATUSES } from "@/core/data/rules/statuses/statuses";

const homebrewStatuses: Record<string, StatusTemplate> = {};

export function registerHomebrewStatus(template: StatusTemplate) {
  homebrewStatuses[template.id] = template;
}
export function getStatusRegistry(): Record<string, StatusTemplate> {
  return { ...BASE_STATUSES, ...homebrewStatuses };
}
export function getStatusTemplateById(id: string): StatusTemplate {
  const template = getStatusRegistry()[id];
  if (!template) throw new Error(`StatusTemplate not found: ${id}`);
  return template;
}
