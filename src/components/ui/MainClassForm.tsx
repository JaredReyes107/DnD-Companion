import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ClassPicker from "@/components/ui/ClassPicker";

import styles from "@/styles/character-creation.styles";

type ClassDraft = {
  id: string; // UUID interno del slot
  classTemplateId: string | null;
  level: number;
};

type Props = {
  value: ClassDraft;
  onChange: (value: ClassDraft) => void;
};

export const MainClassForm = ({ value, onChange }: Props) => {
  return (
    <View style={[styles.fieldContainer, { zIndex: 95 }]}>
      <Text style={styles.fieldHeader}>Clase principal</Text>

      <View style={styles.fieldClassContainer}>
        <View style={styles.pickerClassContainer}>
          <View style={styles.pickerContainer}>
            <ClassPicker
              value={value.classTemplateId}
              onChange={(id) => onChange({ ...value, classTemplateId: id })}
            />
          </View>
        </View>

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
