import React, { useEffect, useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from "expo-router";

import genericStyles from './Stylesheets/styles';
import styles from './Stylesheets/styles_characterCreation';
import { Personaje } from './types'; // Import custom types

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const AddCharacterScreen = () => {
  const router = useRouter();

  const [characters, setCharacters] = useState<Personaje[]>([]);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const [CharacterName, setCharacterName] = useState('');
  const [CharacterRace, setCharacterRace] = useState('');
  const [CharacterClass, setCharacterClass] = useState('Artífice');
  const [CharacterLevel, setCharacterLevel] = useState(1);
  const [CharacterSpeed, setCharacterSpeed] = useState(0);
  const [CharacterHP, setCharacterHP] = useState(0);

  const [CharacterStats, setCharacterStats] = useState([10, 10, 10, 10, 10, 10]);
  const [CharacterSTProficiencies, setCharacterSTProficiencies] = useState([false, false, false, false, false, false]);
  const [CharacterSkillProficiencies, setCharacterSkillProficiencies] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [CharacterSkillExpertises, setCharacterSkillExpertises] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  
  const [newField, setNewField] = useState('');
  const [newFieldValue, setNewFieldValue] = useState('');

  const loadCharactersFromStorage = async () => 
  {
    try 
    {
      const storedCharacters = await AsyncStorage.getItem('characters');
      if (storedCharacters) 
      {
        setCharacters(JSON.parse(storedCharacters));      
      }
    } 
    catch (error) 
    {
      Alert.alert('Error', 'Failed to load items');
    }
  };

  //Load already existing characters whenever this view is loaded
  useEffect(() => {    
    loadCharactersFromStorage();
  }, []);

  const addCharacter = () => 
  {
    if(CharacterName)
    {
      const PB = Math.trunc((CharacterLevel + 3) / 4) + 1;

      const newCharacter: Personaje = 
      {
        id: (String)(new Date()),
        icon: 'face',

        Name: CharacterName,
        Race: CharacterRace ? CharacterRace : "Humano",
        Class: CharacterClass,
        Level: CharacterLevel,
        Speed: CharacterSpeed ? CharacterSpeed : 30,
        HitPoints: CharacterHP ? CharacterHP : 1,

        Stats: CharacterStats,
        SavingThrowsProficiencies: CharacterSTProficiencies,
        SkillProficiencies: CharacterSkillProficiencies,
        SkillExpertises: CharacterSkillExpertises,

        ProficiencyBonus: PB,
        ArmorClass: 10 + Math.trunc((CharacterStats[1] - 10) / 2),
        InitiativeBonus: Math.trunc((CharacterStats[1] - 10) / 2),

        StatModifiers: [
          Math.round((CharacterStats[0] - 10.5) / 2), 
          Math.round((CharacterStats[1] - 10.5) / 2),
          Math.round((CharacterStats[2] - 10.5) / 2),
          Math.round((CharacterStats[3] - 10.5) / 2), 
          Math.round((CharacterStats[4] - 10.5) / 2),
          Math.round((CharacterStats[5] - 10.5) / 2),
        ],

        SavingThrowModifiers: [
          CharacterSTProficiencies[0] ? Math.trunc((CharacterStats[0] - 10) / 2) + PB : Math.trunc((CharacterStats[0] - 10) / 2),  
          CharacterSTProficiencies[1] ? Math.trunc((CharacterStats[1] - 10) / 2) + PB : Math.trunc((CharacterStats[1] - 10) / 2),
          CharacterSTProficiencies[2] ? Math.trunc((CharacterStats[2] - 10) / 2) + PB : Math.trunc((CharacterStats[2] - 10) / 2),
          CharacterSTProficiencies[3] ? Math.trunc((CharacterStats[3] - 10) / 2) + PB : Math.trunc((CharacterStats[3] - 10) / 2), 
          CharacterSTProficiencies[4] ? Math.trunc((CharacterStats[4] - 10) / 2) + PB : Math.trunc((CharacterStats[4] - 10) / 2),
          CharacterSTProficiencies[5] ? Math.trunc((CharacterStats[5] - 10) / 2) + PB : Math.trunc((CharacterStats[5] - 10) / 2)
        ],

        SkillModifiers : [
          Math.trunc((CharacterStats[1] - 10) / 2) + (CharacterSkillProficiencies[0]  ? (CharacterSkillExpertises[0]  ? 2*PB : PB) : 0), //Acrobacias
          Math.trunc((CharacterStats[3] - 10) / 2) + (CharacterSkillProficiencies[1]  ? (CharacterSkillExpertises[1]  ? 2*PB : PB) : 0), //Arcanos
          Math.trunc((CharacterStats[0] - 10) / 2) + (CharacterSkillProficiencies[2]  ? (CharacterSkillExpertises[2]  ? 2*PB : PB) : 0), //Atletismo
          Math.trunc((CharacterStats[5] - 10) / 2) + (CharacterSkillProficiencies[3]  ? (CharacterSkillExpertises[3]  ? 2*PB : PB) : 0), //Engañar
          Math.trunc((CharacterStats[3] - 10) / 2) + (CharacterSkillProficiencies[4]  ? (CharacterSkillExpertises[4]  ? 2*PB : PB) : 0), //Historia
          Math.trunc((CharacterStats[5] - 10) / 2) + (CharacterSkillProficiencies[5]  ? (CharacterSkillExpertises[5]  ? 2*PB : PB) : 0), //Interpretación
          Math.trunc((CharacterStats[5] - 10) / 2) + (CharacterSkillProficiencies[6]  ? (CharacterSkillExpertises[6]  ? 2*PB : PB) : 0), //Intimidación
          Math.trunc((CharacterStats[3] - 10) / 2) + (CharacterSkillProficiencies[7]  ? (CharacterSkillExpertises[7]  ? 2*PB : PB) : 0), //Investigación
          Math.trunc((CharacterStats[1] - 10) / 2) + (CharacterSkillProficiencies[8]  ? (CharacterSkillExpertises[8]  ? 2*PB : PB) : 0), //Juego de Manos
          Math.trunc((CharacterStats[4] - 10) / 2) + (CharacterSkillProficiencies[9]  ? (CharacterSkillExpertises[9]  ? 2*PB : PB) : 0), //Medicina
          Math.trunc((CharacterStats[3] - 10) / 2) + (CharacterSkillProficiencies[10] ? (CharacterSkillExpertises[10] ? 2*PB : PB) : 0), //Naturaleza
          Math.trunc((CharacterStats[4] - 10) / 2) + (CharacterSkillProficiencies[11] ? (CharacterSkillExpertises[11] ? 2*PB : PB) : 0), //Percepción
          Math.trunc((CharacterStats[4] - 10) / 2) + (CharacterSkillProficiencies[12] ? (CharacterSkillExpertises[12] ? 2*PB : PB) : 0), //Perspicacia
          Math.trunc((CharacterStats[5] - 10) / 2) + (CharacterSkillProficiencies[13] ? (CharacterSkillExpertises[13] ? 2*PB : PB) : 0), //Persuasión
          Math.trunc((CharacterStats[3] - 10) / 2) + (CharacterSkillProficiencies[14] ? (CharacterSkillExpertises[14] ? 2*PB : PB) : 0), //Religión
          Math.trunc((CharacterStats[1] - 10) / 2) + (CharacterSkillProficiencies[15] ? (CharacterSkillExpertises[15] ? 2*PB : PB) : 0), //Sigilo    
          Math.trunc((CharacterStats[4] - 10) / 2) + (CharacterSkillProficiencies[16] ? (CharacterSkillExpertises[16] ? 2*PB : PB) : 0), //Supervivencia
          Math.trunc((CharacterStats[4] - 10) / 2) + (CharacterSkillProficiencies[17] ? (CharacterSkillExpertises[17] ? 2*PB : PB) : 0), //Trato con Animales
        ],

        Equipment: {
          Armas: [],
          Armaduras: [],
        },
      };

      setCharacters([...characters, newCharacter]);      
      
      router.push('/');
    }
    else
    {
      console.log("El nombre no puede estar vacío");     
    }
  }
  
  // Save in local storage whenever a character is added, modified or deleted
  useEffect(() => 
  {    
    AsyncStorage.setItem('characters', JSON.stringify(characters));    
  }, [characters])

  const modifyCharacterStat = (index: number, isIncreasing: boolean) => 
  {
    const updatedStats = [...CharacterStats];
    if(isIncreasing)
    {
      updatedStats[index] += 1;
    }
    else
    {
      updatedStats[index] -= 1;
    }
    
    setCharacterStats(updatedStats);
  }

  const modifyCharacterSTProficiencies = (index: number) => 
  {
    const updatedProficiencies = [...CharacterSTProficiencies];
      
    updatedProficiencies[index] = !updatedProficiencies[index];
      
    setCharacterSTProficiencies(updatedProficiencies);
  }

  const modifyCharacterSkillProficiencies = (index: number) => 
  {
    const updatedSkillProficiencies = [...CharacterSkillProficiencies];
        
    if(updatedSkillProficiencies[index])
    {
      updatedSkillProficiencies[index] = false;

      const updatedSkillExpertises = [...CharacterSkillExpertises];
      updatedSkillExpertises[index] = false;

      setCharacterSkillExpertises(updatedSkillExpertises);
    }
    else
    {
      updatedSkillProficiencies[index] = true;
    }

    setCharacterSkillProficiencies(updatedSkillProficiencies);
  }

  const modifyCharacterSkillExpertises = (index: number) => 
  {
    const updatedSkills = [...CharacterSkillExpertises];
      
    updatedSkills[index] = !updatedSkills[index];
  
    setCharacterSkillExpertises(updatedSkills);
  }

  return (
    <ScrollView style={genericStyles.rootContainer}>
      <View style={genericStyles.customFieldContainer}>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Nombre del personaje</Text>
          <TextInput
            placeholder=""
            onChangeText={setCharacterName}
            style={styles.input}
          />
        </View>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Raza</Text>
          <TextInput
            placeholder=""
            onChangeText={setCharacterRace}
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Clase</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={CharacterClass}
              onValueChange={(itemValue: React.SetStateAction<string>) => setCharacterClass(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Artífice" value="Artífice" />
              <Picker.Item label="Bárbaro" value="Bárbaro" />
              <Picker.Item label="Bardo" value="Bardo" />
              <Picker.Item label="Brujo" value="Brujo" />
              <Picker.Item label="Clérigo" value="Clérigo" />
              <Picker.Item label="Druida" value="Druida" />
              <Picker.Item label="Explorador" value="Explorador" />
              <Picker.Item label="Guerrero" value="Guerrero" />
              <Picker.Item label="Hechicero" value="Hechicero" />
              <Picker.Item label="Mago" value="Mago" />
              <Picker.Item label="Monje" value="Monje" />
              <Picker.Item label="Paladín" value="Paladín" />
              <Picker.Item label="Pícaro" value="Pícaro" />
            </Picker>
          </View>
        </View>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Nivel</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterInput}>
              {CharacterLevel}
            </Text>
            <View style={styles.counterButtonsContainer}>
              <TouchableOpacity style={styles.counterButtons} onPress={() => setCharacterLevel(CharacterLevel > 1 ? CharacterLevel - 1 : 1)}>
                <MaterialIcons name="remove" size={16} color="white"></MaterialIcons>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counterButtons} onPress={() => setCharacterLevel(CharacterLevel < 20 ? CharacterLevel + 1 : 20)}>
                <MaterialIcons name="add" size={16} color="white"></MaterialIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Velocidad</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterInput}>
              {CharacterSpeed}
            </Text>
            <View style={styles.counterButtonsContainer}>
              <TouchableOpacity style={styles.counterButtons} onPress={() => setCharacterSpeed(CharacterSpeed > 0 ? CharacterSpeed - 5 : 0)}>
                <MaterialIcons name="remove" size={16} color="white"></MaterialIcons>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counterButtons} onPress={() => setCharacterSpeed(CharacterSpeed < 40 ? CharacterSpeed + 5 : 40)}>
                <MaterialIcons name="add" size={16} color="white"></MaterialIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Puntos de Golpe</Text>
          <TextInput
            placeholder=""
            onChangeText={(value) => setCharacterHP(isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10))}
            style={styles.input}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Estadísticas</Text>
          <View style={styles.statsContainer}>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Fuerza</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[0]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[0] > 0 ? modifyCharacterStat(0, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[0] < 20 ? modifyCharacterStat(0, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Destreza</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[1]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[1] > 0 ? modifyCharacterStat(1, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[1] < 20 ? modifyCharacterStat(1, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Constitución</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[2]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[2] > 0 ? modifyCharacterStat(2, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[2] < 20 ? modifyCharacterStat(2, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Inteligencia</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[3]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[3] > 0 ? modifyCharacterStat(3, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[3] < 20 ? modifyCharacterStat(3, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Sabiduría</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[4]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[4] > 0 ? modifyCharacterStat(4, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[4] < 20 ? modifyCharacterStat(4, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.statTitle}>Carisma</Text>
              <View style={styles.statDetailsContainer}>
                <Text style={styles.statValue}>{CharacterStats[5]}</Text>
                <View style={styles.statDetailsButtonsContainer}>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[5] > 0 ? modifyCharacterStat(5, false) : null}>
                    <MaterialIcons name="remove" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.statDetailsButtons} onPress={() => CharacterStats[5] < 20 ? modifyCharacterStat(5, true) : null}>
                    <MaterialIcons name="add" size={12} color="white"></MaterialIcons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
        </View>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Tiradas de salvación</Text>
          <View style={styles.statsContainer}>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(0)}>
                {!(CharacterSTProficiencies[0]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[0] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Fuerza</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(1)}>
                {!(CharacterSTProficiencies[1]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[1] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Destreza</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(2)}>
                {!(CharacterSTProficiencies[2]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[2] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Constitución</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(3)}>
                {!(CharacterSTProficiencies[3]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[3] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Inteligencia</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(4)}>
                {!(CharacterSTProficiencies[4]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[4] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Sabiduría</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSTProficiencies(5)}>
                {!(CharacterSTProficiencies[5]) && (
                <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSTProficiencies[5] && (
                <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              <Text style={styles.statTitle}>Carisma</Text>
            </View>

          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>Competencias y Pericia</Text>
          <View style={styles.statsContainer}>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(0)}>
                {!(CharacterSkillProficiencies[0]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[0] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[0] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(0)}>
                  {!(CharacterSkillExpertises[0]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[0] && CharacterSkillProficiencies[0] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[0] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Acrobacias</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(1)}>
                {!(CharacterSkillProficiencies[1]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[1] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[1] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(1)}>
                  {!(CharacterSkillExpertises[1]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[1] && CharacterSkillProficiencies[1] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[1] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Arcanos</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(2)}>
                {!(CharacterSkillProficiencies[2]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[2] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[2] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(2)}>
                  {!(CharacterSkillExpertises[2]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[2] && CharacterSkillProficiencies[2] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[2] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Atletismo</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(3)}>
                {!(CharacterSkillProficiencies[3]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[3] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[3] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(3)}>
                  {!(CharacterSkillExpertises[3]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[3] && CharacterSkillProficiencies[3] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[3] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Engañar</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(4)}>
                {!(CharacterSkillProficiencies[4]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[4] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[4] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(4)}>
                  {!(CharacterSkillExpertises[4]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[4] && CharacterSkillProficiencies[4] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[4] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Historia</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(5)}>
                {!(CharacterSkillProficiencies[5]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[5] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[5] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(5)}>
                  {!(CharacterSkillExpertises[5]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[5] && CharacterSkillProficiencies[5] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[5] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Interpretación</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(6)}>
                {!(CharacterSkillProficiencies[6]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[6] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[6] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(6)}>
                  {!(CharacterSkillExpertises[6]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[6] && CharacterSkillProficiencies[6] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[6] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Intimidación</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(7)}>
                {!(CharacterSkillProficiencies[7]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[7] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[7] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(7)}>
                  {!(CharacterSkillExpertises[7]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[7] && CharacterSkillProficiencies[7] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[7] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Investigación</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(8)}>
                {!(CharacterSkillProficiencies[8]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[8] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[8] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(8)}>
                  {!(CharacterSkillExpertises[8]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[8] && CharacterSkillProficiencies[8] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[8] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Juego de Manos</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(9)}>
                {!(CharacterSkillProficiencies[9]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[9] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[9] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(9)}>
                  {!(CharacterSkillExpertises[9]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[9] && CharacterSkillProficiencies[9] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[9] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Medicina</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(10)}>
                {!(CharacterSkillProficiencies[10]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[10] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[10] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(10)}>
                  {!(CharacterSkillExpertises[10]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[10] && CharacterSkillProficiencies[10] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[10] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Naturaleza</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(11)}>
                {!(CharacterSkillProficiencies[11]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[11] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[11] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(11)}>
                  {!(CharacterSkillExpertises[11]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[11] && CharacterSkillProficiencies[11] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[11] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Percepción</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(12)}>
                {!(CharacterSkillProficiencies[12]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[12] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[12] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(12)}>
                  {!(CharacterSkillExpertises[12]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[12] && CharacterSkillProficiencies[12] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[12] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Perspicacia</Text>
            </View>
            
            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(13)}>
                {!(CharacterSkillProficiencies[13]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[13] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[13] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(13)}>
                  {!(CharacterSkillExpertises[13]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[13] && CharacterSkillProficiencies[13] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[13] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Persuasión</Text>
            </View>
            
            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(14)}>
                {!(CharacterSkillProficiencies[14]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[14] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[14] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(14)}>
                  {!(CharacterSkillExpertises[14]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[14] && CharacterSkillProficiencies[14] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[14] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Religión</Text>
            </View>
            
            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(15)}>
                {!(CharacterSkillProficiencies[15]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[15] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[15] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(15)}>
                  {!(CharacterSkillExpertises[15]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[15] && CharacterSkillProficiencies[15] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[15] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Sigilo</Text>
            </View>
            
            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(16)}>
                {!(CharacterSkillProficiencies[16]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[16] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[16] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(16)}>
                  {!(CharacterSkillExpertises[16]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[16] && CharacterSkillProficiencies[16] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[16] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Supervivencia</Text>
            </View>
            
            <View style={styles.proficienciesContainer}>
              <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillProficiencies(17)}>
                {!(CharacterSkillProficiencies[17]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                )}
                {CharacterSkillProficiencies[17] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                )}
              </TouchableOpacity>
              {CharacterSkillProficiencies[17] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => modifyCharacterSkillExpertises(17)}>
                  {!(CharacterSkillExpertises[17]) && (
                  <MaterialIcons name="radio-button-unchecked" size={16} color="white"></MaterialIcons>
                  )}
                  {CharacterSkillExpertises[17] && CharacterSkillProficiencies[17] && (
                  <MaterialIcons name="circle" size={16} color="white"></MaterialIcons>
                  )}
                </TouchableOpacity>
              )}  
              {!CharacterSkillProficiencies[17] && (
                <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
                  <MaterialIcons name="radio-button-unchecked" size={16} color="#808080"></MaterialIcons>
                </TouchableOpacity>
              )}
              <Text style={styles.statTitle}>Trato con Animales</Text>
            </View>

          </View>
        </View>

        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={addCharacter} style={styles.addButton}>
            <Text style={styles.addButtonText}>Añadir Personaje</Text>
          </TouchableOpacity>
        </View>    

      </View>
    </ScrollView>
  );
};

export default AddCharacterScreen;