import React from "react";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import { ResourceElement } from "./ResourceElement";

import { Character } from "@/core/entities/character/Character";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import {
  resourceMax,
  resourceCurrent,
  ResourceContext,
} from "@/core/rules/character/resource-max";

import styles from "@/styles/combat/tab-resource";
import { ui } from "@/services/localization/ui-localization-resolver";
import { setResourceCurrent } from "@/core/rules/character/resource-spend";

type ResourceItem = {
  template: ResourceTemplate;
  instance: ResourceInstance;
};

type Props = {
  category: ResourceCategory;
  resources: ResourceItem[];
  character: Character;
  ctx: ResourceContext;
  onUpdate: (updated: Character) => void;
};

export const ResourceSection = ({
  category,
  resources,
  character,
  ctx,
  onUpdate,
}: Props) => {
  const rows = resources
    .map(({ template }) => ({
      id: template.id,
      max: resourceMax(character, template.id, ctx),
      current: resourceCurrent(character, template.id, ctx),
    }))
    .filter((r) => r.max > 0);
  if (rows.length === 0) return null;

  return (
    <ThemedView style={styles.resourceCategoryContainer}>
      <ThemedText style={styles.resourceCategoryTitle}>
        {ui("resourceSection." + category)}
      </ThemedText>
      <ThemedView style={styles.resourceElementsList}>
        {rows.map(({ id, max, current }) => (
          <ResourceElement
            key={id}
            label={id}
            current={current}
            max={max}
            onChange={(v) =>
              onUpdate(setResourceCurrent(character, id, v, ctx))
            }
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};
