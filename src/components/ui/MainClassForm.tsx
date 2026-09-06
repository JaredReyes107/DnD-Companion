import React from "react";
import { View, Text } from "react-native";

import SteppedNumberInput from "./SteppedNumberInput";
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

        <SteppedNumberInput
          value={value.level}
          onChange={(level) => onChange({ ...value, level })}
          min={1}
          max={20}
          containerStyle={styles.counterContainer}
          valueStyle={[styles.counterInput, { height: 41 }]}
          buttonsContainerStyle={styles.counterButtonsContainer}
          buttonStyle={styles.counterButton}
        />
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
