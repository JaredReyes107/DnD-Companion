import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import styles from './Stylesheets/styles';
import { Personaje } from './types'; // Import custom types

import AsyncStorage from '@react-native-async-storage/async-storage';

const IndexScreen = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<Personaje[]>([]);

  //Función para llamar a cargar objetos
  const loadItemsFromStorage = async () => {
    try 
    {
      const storedItems = await AsyncStorage.getItem('characters');
      if (storedItems) 
      {
        setCharacters(JSON.parse(storedItems));
      }
    } 
    catch (error) 
    {
      Alert.alert('Error', 'Failed to load items');
    }
  };

  //Load characters whenever this view is loaded
  useEffect(() => {
    loadItemsFromStorage();
  }, []);

  const deleteItem = async (id: string) => {
    const updatedItems = characters.filter((item) => item.id !== id);
    
    setCharacters(updatedItems);    
  };

  useEffect(() => {
    // Save in local storage whenever an item is added, modified or deleted
    AsyncStorage.setItem('characters', JSON.stringify(characters));
  }, [characters])

  const loadCharacterDetails = async (id: string) => {
    try 
    {
      await AsyncStorage.setItem('selectedCharacterId', id);
    } 
    catch (error) 
    {
      console.error('Error saving string:', error);
    }

    router.push('/characterDetails')
  }

  const renderListItem = ({ item }: { item: Personaje }) => (
    <View>
      <TouchableOpacity onPress={ () => loadCharacterDetails(item.id)} style={styles.characterCard}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="face" size={24} color="white" />
        </View>
        <View style={styles.characterCard_TextContainer}>
          <Text key="Nombre" style={styles.characterCard_Title}>
            {item.Name}
          </Text>
          <Text key="Raza" style={styles.characterCard_Text}>
            {item.Race}
          </Text>
          <Text key="Clase" style={styles.characterCard_Text}>
            {item.Class}
          </Text>
        </View>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Personajes</Text>
        <TouchableOpacity onPress={ () => router.push('/characterCreation')}>
          <View style={styles.iconButton}>
            <MaterialIcons name="add" size={24} color="white"></MaterialIcons>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        style={styles.list}
      />
    </View>
  );
};

export default IndexScreen;
