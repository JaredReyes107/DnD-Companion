import React from "react";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import { ResourceElement } from "./ResourceElement";

import { Character } from "@/core/entities/character/Character";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import {
  buildResourceContext,
  resourceMax,
  resourceCurrent,
} from "@/core/rules/character/resource-max";

import styles from "@/styles/combat/tab-resource";
import { ui } from "@/services/localization/ui-localization-resolver";

type ResourceItem = {
  template: ResourceTemplate;
  instance: ResourceInstance;
};

type Props = {
  category: ResourceCategory;
  resources: ResourceItem[];
  character: Character;
  onUpdate: (updated: Character) => void;
};

export const ResourceSection = ({
  category,
  resources,
  character,
  onUpdate,
}: Props) => {
  const ctx = React.useMemo(() => buildResourceContext(character), [character]);

  const rows = resources
    .map(({ template, instance }) => ({
      template,
      max: resourceMax(character, template.id, ctx),
      current: resourceCurrent(character, template.id, ctx),
      instance,
    }))
    .filter((r) => r.max > 0); // hides unreached/removed resources (e.g. slot levels at 0)

  if (rows.length === 0) return null;

  const handleChange = (
    resourceId: string,
    max: number,
    newCurrent: number,
  ) => {
    if (!Number.isFinite(max)) return; // TODO(unlimited): Rage 20 has nothing to track
    onUpdate({
      ...character,
      resources: {
        ...character.resources,
        [resourceId]: {
          ...character.resources[resourceId],
          spent: Math.min(max, Math.max(0, max - newCurrent)),
        },
      },
    });
  };

  return (
    <ThemedView style={styles.resourceCategoryContainer}>
      <ThemedText style={styles.resourceCategoryTitle}>
        {ui("resourceSection." + category.toString())}
      </ThemedText>

      <ThemedView style={styles.resourceElementsList}>
        {rows.map(({ template, max, current }) => (
          <ResourceElement
            key={template.id}
            label={template.id}
            current={current}
            max={max}
            onChange={(v) => handleChange(template.id, max, v)}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};
