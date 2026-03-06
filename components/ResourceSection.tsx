import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ResourceElement } from "./ResourceElement";

import { Character } from "@/game/domain/character/Character";
import { ResourceCategory } from "@/game/data/templates/resource-template";
import { ResourceInstance } from "@/game/domain/resources/resource-instance";
import { ResourceTemplate } from "@/game/data/templates/resource-template";

import styles from "@/stylesheets/combat/tab-resource";
import { ui } from "@/localization/ui-localization-resolver";

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
  if (resources.length === 0) return null;

  const handleChange = (resourceId: string, newValue: number) => {
    const next: Character = {
      ...character,
      resources: {
        ...character.resources,
        [resourceId]: {
          ...character.resources[resourceId],
          current: newValue,
        },
      },
    };

    onUpdate(next);
  };

  return (
    <ThemedView style={styles.resourceCategoryContainer}>
      <ThemedText style={styles.resourceCategoryTitle}>
        {ui("resourceSection." + category.toString())}
      </ThemedText>

      <ThemedView style={styles.resourceElementsList}>
        {resources.map(({ template, instance }) => (
          <ResourceElement
            key={template.id}
            label={template.id}
            current={instance.current}
            max={instance.max}
            onChange={(value) => handleChange(template.id, value)}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};
