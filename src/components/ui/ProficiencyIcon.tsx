import { Entypo, MaterialIcons } from "@expo/vector-icons";

export const ProficiencyIcon = ({
  hasProficiency: proficient,
}: {
  hasProficiency: boolean;
}) => (
  <MaterialIcons
    name={proficient ? "circle" : "radio-button-unchecked"}
    size={14}
    color="#cccccc"
  />
);

export const proficiencyExpertiseIcon = (
  proficient: boolean,
  expertise: boolean,
) => {
  if (expertise)
    return <Entypo name="circle-with-cross" size={14} color="#cccccc" />;
  return (
    <MaterialIcons
      name={proficient ? "circle" : "radio-button-unchecked"}
      size={14}
      color="#cccccc"
    />
  );
};
