// screens/AddProductionScreen.js

import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button, Alert, StyleSheet, ScrollView
} from 'react-native';
import { getDatabase, ref, push, get } from 'firebase/database';
import { Picker } from '@react-native-picker/picker';

const AddProductionScreen = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [feedingType, setFeedingType] = useState('');
  const [feedingQuantity, setFeedingQuantity] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const db = getDatabase();
        const animalsRef = ref(db, 'animals');
        const snapshot = await get(animalsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const animalList = Object.keys(data).map(key => ({
            id: key,
            name: data[key].name || `${data[key].animalType} (${key.slice(0, 4)})`,
            ...data[key]
          }));
          setAnimals(animalList);
        }
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const handleSaveProduction = async () => {
    if (!selectedAnimalId || !productType || !quantity) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    try {
      const db = getDatabase();
      const productionRef = ref(db, 'productions');
      await push(productionRef, {
        animalId: selectedAnimalId,
        productType,
        quantity: parseFloat(quantity),
        feedingType,
        feedingQuantity: feedingQuantity ? parseFloat(feedingQuantity) : null,
        notes,
        date: new Date().toISOString()
      });

      Alert.alert('Success', 'Production data saved successfully!');
      setProductType('');
      setQuantity('');
      setFeedingType('');
      setFeedingQuantity('');
      setNotes('');
      setSelectedAnimalId('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save production data.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Production</Text>

      <Text style={styles.label}>Select Animal:</Text>
      <Picker
        selectedValue={selectedAnimalId}
        onValueChange={(itemValue) => setSelectedAnimalId(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-- Select an animal --" value="" />
        {animals.map(animal => (
          <Picker.Item key={animal.id} label={animal.name} value={animal.id} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Product Type (e.g., Milk)"
        value={productType}
        onChangeText={setProductType}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity (e.g., 5)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Feeding Type (optional)"
        value={feedingType}
        onChangeText={setFeedingType}
      />
      <TextInput
        style={styles.input}
        placeholder="Feeding Quantity (optional)"
        value={feedingQuantity}
        onChangeText={setFeedingQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Notes (optional)"
        value={notes}
        onChangeText={setNotes}
      />

      <Button title="Save Production" onPress={handleSaveProduction} />
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
  label: {
    marginBottom: 5,
    fontWeight: '600'
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 15,
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

export default AddProductionScreen;
