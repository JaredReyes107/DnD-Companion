import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { loadCharacterFromStorage } from '../Utilities/storage';
import { Character } from '../Types/';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Entypo, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

import genericStyles from '../Stylesheets/GenericStyles';
import styles from '../Stylesheets/Play/index';
import { router } from 'expo-router';

export default function App() 
{
  const [character, setCharacter] = useState<Character>();
  
  const [tempHP, setTempHP] = useState<number | null>(null);
  const [currentHP, setCurrentHP] = useState<number | null>(null);

  const totalHP = (tempHP ?? 0) + (currentHP ?? 0);
  
  const fetchCharacter = async () => {
    const selectedCharacter = await loadCharacterFromStorage();
    if (selectedCharacter)
    {
      setCharacter(selectedCharacter);
      setTempHP(selectedCharacter.TempHP);
      setCurrentHP(selectedCharacter.HP); // Set current HP to character's max HP
    }
  };

  //Load details of the selected character whenever this view is loaded
  useEffect(() => {    
    fetchCharacter();
  }, []);

  return (
    <ThemedView style={[genericStyles.rootContainer, { alignItems: 'center' }]}>
      
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => { router.replace('./') }}>
          <Entypo name="arrow-with-circle-left" size={48} color={'#FFFFFF'}/>
        </TouchableOpacity>
      </View>

      <View style={[styles.blockContainer, { backgroundColor: '#466BC2' }]}>
        <Text style={styles.blockTitle}>HP Total</Text>
        <View style={styles.blockBody}>
          <Text style={styles.blockButton}></Text>
          <Text style={styles.blockValue}>{totalHP}</Text>
          <Text style={styles.blockButton}></Text>
        </View>
      </View>
      <View style={[styles.blockContainer, { backgroundColor: '#27B086' /*'#9c27b0'*/ }]}>
        <Text style={styles.blockTitle}>HP Temporal</Text>
        <View style={styles.blockBody}>
          <TouchableOpacity 
            onPress={() => tempHP !== null && setTempHP(Math.max(0, tempHP - 1))}
          >
            <Text style={styles.blockButton}>−</Text>
          </TouchableOpacity>
          <Text style={styles.blockValue}>{tempHP}</Text>
          <TouchableOpacity 
            onPress={() => tempHP !== null && setTempHP(tempHP + 1)}
          >
            <Text style={styles.blockButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.blockContainer, { backgroundColor: '#d32f2f' }]}>
        <Text style={styles.blockTitle}>HP</Text>
        <View style={styles.blockBody}>
          <TouchableOpacity 
            onPress={() => currentHP !== null && setCurrentHP(Math.max(0, currentHP - 1))}
          >
            <Text style={styles.blockButton}>−</Text>
          </TouchableOpacity>
          <Text style={styles.blockValue}>{currentHP}</Text>
          <TouchableOpacity 
            onPress={() => currentHP !== null && character != null && setCurrentHP(Math.min(character.HP, currentHP + 1))}
          >
            <Text style={styles.blockButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{}}>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="bed-empty" size={48} color="#FFFFFF"/>
            <ThemedText>Descanso largo</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome6 name="campground" size={48} color="#FFFFFF" />
            <ThemedText>Descanso corto</ThemedText>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Ejemplo Lorem Ipsum</Text>
        </View>
      </View>
    </ThemedView>
  );
}