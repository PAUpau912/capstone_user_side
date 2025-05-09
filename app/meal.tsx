import { StyleSheet, TextInput, Button, Alert, ScrollView, Platform, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const MealTracker = () => {
  const [meal, setMeal] = useState('');
  const [cupOfRice, setCupOfRice] = useState('');
  const [drinks, setDrinks] = useState('');
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes] = useState('');

  const onTimeChange = (event: any, selectedTime?: Date) => {
    setShowPicker(false);
    if (event.type === 'set' && selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleSubmit = () => {
    if (!meal || !cupOfRice || !time) {
      Alert.alert('Please fill in meal, cups of rice, and time.');
      return;
    }

    Alert.alert(
      'Meal Tracked',
      `Dish: ${meal}\nCup of Rice: ${cupOfRice}\nTime: ${time.toLocaleTimeString()}\nNotes: ${notes}`
    );

    setMeal('');
    setCupOfRice('');
    setTime(new Date());
    setNotes('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>🍽️ Meal Tracker</Text>

        <Text style={styles.label}>Dish</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Adobo"
          value={meal}
          onChangeText={setMeal}
        />

        <Text style={styles.label}>No. of Cup of Rice</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 2"
          value={cupOfRice}
          keyboardType="numeric"
          onChangeText={setCupOfRice}
        />

        <Text style={styles.label}>Drinks</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g.,water"
          value={drinks}
          onChangeText={setDrinks}
        />

        <Text style={styles.label}>Time of Meal</Text>
        <View style={{ marginBottom: 16 }}>
          <Button
            title={`🕒 Pick Time (${time.toLocaleTimeString()})`}
            onPress={() => setShowPicker(true)}
            color="#067425"
          />
          {showPicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={false}
              onChange={onTimeChange}
            />
          )}
        </View>

        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Any extra notes..."
          multiline
          numberOfLines={4}
          value={notes}
          onChangeText={setNotes}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>💾 Save Entry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MealTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#067425',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#374151',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#067425',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
