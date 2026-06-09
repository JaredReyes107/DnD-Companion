import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ClassPicker from "@/components/ui/ClassPicker";
import SubclassPicker from "@/components/ui/SubclassPicker";
import { getSubclassUnlockLevel } from "@/core/rules/character/subclass-helper";

import styles from "@/styles/character-creation.styles";
import { ui } from "@/services/localization/ui-localization-resolver";

type ClassDraft = {
  id: string;
  classTemplateId: string | null;
  level: number;
  subclassId: string | null;
};

type Props = {
  value: ClassDraft;
  onChange: (value: ClassDraft) => void;
};

export const MainClassForm = ({ value, onChange }: Props) => {
  const unlockLevel =
    value.classTemplateId !== null
      ? getSubclassUnlockLevel(value.classTemplateId)
      : null;

  const showSubclassPicker =
    value.classTemplateId !== null &&
    unlockLevel !== null &&
    value.level >= unlockLevel;

  return (
    <View style={[styles.fieldContainer, { zIndex: 95 }]}>
      <Text style={styles.fieldHeader}>{ui("class.main")}</Text>

      <View style={styles.fieldClassContainer}>
        <View style={styles.pickerClassContainer}>
          <View style={styles.pickerContainer}>
            <ClassPicker
              value={value.classTemplateId}
              onChange={(id) =>
                onChange({ ...value, classTemplateId: id, subclassId: null })
              }
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

      {showSubclassPicker && (
        <View style={styles.pickerContainer}>
          <SubclassPicker
            classId={value.classTemplateId!}
            value={value.subclassId}
            onChange={(id) => onChange({ ...value, subclassId: id })}
          />
        </View>
      )}
    </View>
  );
};
