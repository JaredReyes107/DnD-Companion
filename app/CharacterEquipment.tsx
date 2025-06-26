import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { useRouter } from "expo-router";

import genericStyles from './Stylesheets/GenericStyles';
import styles from './Stylesheets/CharacterDetails';
import { Character, Weapon} from './Types/'; // Import custom types

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CharacterSheet() {
  const [character, setCharacter] = useState<Character>();

  // Add a custom field to a selected item
  /*
  const addCustomField = () => 
    {
      if (selectedItem && newField) {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === selectedItem
              ? {
                  ...item,
                  fields: 
                  {
                    ...item.fields,
                    [newField]: newFieldValue,
                  },
                }
              : item
          )
        );
        setNewField('');
        setNewFieldValue('');
      }
    };
    */

  const renderWeaponItem = ({ item }: { item: Weapon }) => (
    <View>
      <TouchableOpacity onPress={ () => 0} style={genericStyles.characterCard}>
        <View style={genericStyles.iconContainer}>
          <MaterialIcons name="face" size={24} color="white" />
        </View>
        <View style={genericStyles.characterCard_TextContainer}>
          <Text key="Nombre" style={genericStyles.characterCard_Title}>
            {item.Name}
          </Text>
          <Text key="Tipo" style={genericStyles.characterCard_Text}>
            {item.Type}
          </Text>
          <Text key="Daño" style={genericStyles.characterCard_Text}>
            {item.Damage}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return(
    <ScrollView style={genericStyles.rootContainer}>
      <FlatList
          data={character?.Equipment.Armas}
          keyExtractor={(item) => item.id}
          renderItem={renderWeaponItem}
          style={genericStyles.list}
        />

      {/* Interface for adding custom fields
      {selectedItem && (
        <View style={genericStyles.customFieldContainer}>
          <TextInput
            placeholder="Field Name"
            value={newField}
            onChangeText={setNewField}
            style={styles.input}
          />
          <TextInput
            placeholder="Field Value"
            value={newFieldValue}
            onChangeText={setNewFieldValue}
            style={styles.input}
          />
          <Button title="Add Field" onPress={addCustomField} />
        </View>
      )}
      */}
    </ScrollView>
  );
}