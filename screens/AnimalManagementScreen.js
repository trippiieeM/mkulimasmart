

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { database } from '../firebaseConfig';
import { ref, push } from 'firebase/database';

const AnimalManagementScreen = () => {
  const [animalType, setAnimalType] = useState('');
  const [breed, setBreed] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSaveAnimal = async () => {
    if (!animalType || !breed) {
      Alert.alert('Error', 'Animal type and breed are required.');
      return;
    }

    try {
      const animalsRef = ref(database, 'animals');
    await push(animalsRef, newAnimal);

      const newAnimal = {
        animalType,
        breed,
        name,
        age: age ? parseInt(age) : null,
        createdAt: new Date().toISOString()
      };
      await push(animalsRef, newAnimal);
      Alert.alert('Success', 'Animal saved successfully!');
      setAnimalType('');
      setBreed('');
      setName('');
      setAge('');
    } catch (error) {
      Alert.alert('Error', 'Failed to save animal.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Animal</Text>

      <TextInput
        style={styles.input}
        placeholder="Animal Type (e.g., Cow, Goat)"
        value={animalType}
        onChangeText={setAnimalType}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Name (optional)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age (optional)"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Button title="Save Animal" onPress={handleSaveAnimal} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  }
});

export default AnimalManagementScreen;
