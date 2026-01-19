import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ResourceElement } from "./ResourceElement";

import { Character } from "@/game/types/instances/character";
import { ResourceCategory } from "@/game/types/templates/resource-template";
import { ResourceInstance } from "@/game/types/instances/resource-instance";
import { ResourceTemplate } from "@/game/types/templates/resource-template";

import styles from "@/stylesheets/combat/tab-resource";

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
        {category.toString()}
      </ThemedText>

      <ThemedView style={styles.resourceCategoryContainer}>
        {resources.map(({ template, instance }) => (
          <ResourceElement
            key={template.id}
            label={template.label}
            current={instance.current}
            max={instance.max}
            onChange={(value) => handleChange(template.id, value)}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};
