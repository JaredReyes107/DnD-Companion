import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ClassPicker from "@/components/ClassPicker";
import { ClassTemplate } from "@/game/types/templates/class-template";

import styles from "@/stylesheets/character-creation.styles";

type ClassDraft = {
  id: string; // UUID interno del slot
  classTemplateId: string | null;
  level: number;
};

type Props = {
  value: ClassDraft;
  classTemplates: ClassTemplate[];
  onChange: (value: ClassDraft) => void;
  onRemove: () => void;
};

export const SecondaryClassesForm = ({
  value,
  classTemplates,
  onChange,
  onRemove,
}: Props) => {
  return (
    <View style={[styles.subfieldContainer]}>
      <View style={styles.fieldClassContainer}>
        <View style={styles.pickerClassContainer}>
          <View style={styles.pickerContainer}>
            <ClassPicker
              classTemplates={classTemplates}
              selectedClassId={value.classTemplateId}
              onChange={(id) => onChange({ ...value, classTemplateId: id })}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.removeClassButton} onPress={onRemove}>
          <MaterialIcons name="close" style={styles.removeClassButtonText} />
        </TouchableOpacity>

        <View style={styles.counterContainer}>
          <Text style={styles.counterInput}>{value.level}</Text>
          <View style={styles.counterButtonsContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() =>
                onChange({ ...value, level: Math.max(1, value.level - 1) })
              }
            >
              <MaterialIcons name="remove" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() =>
                onChange({ ...value, level: Math.min(20, value.level + 1) })
              }
            >
              <MaterialIcons name="add" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
