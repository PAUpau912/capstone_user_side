import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView,TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const Insulin = () => {
  // Form state
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes] = useState('');

  // Handle time selection
  const onTimeChange = (event: any, selectedTime?: Date) => {
    setShowPicker(false); // Hide the picker
    if (event.type === 'set' && selectedTime) {
      setTime(selectedTime); // Update the time if set
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!dosage || !time) {
      Alert.alert('Please fill in both dosage and time.');
      return;
    }

    // Show an alert with the form data
    Alert.alert(
      'Insulin Tracked',
      `Dosage: ${dosage}\nTime: ${time.toLocaleTimeString()}\nNotes: ${notes}`
    );

    // Reset form fields after submission
    setDosage('');
    setTime(new Date());
    setNotes('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style = {styles.card}>
        <Text style={styles.heading}>💉Insulin Tracker</Text>

        <Text style={styles.label}>Dosage (in units)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 10"
          keyboardType="numeric"
          value={dosage}
          onChangeText={setDosage}
        />
        <View style={{ marginBottom: 16 }}>
        <Text style={styles.label}>Time of Injection</Text>
          <Button
            title={`🕒 Pick Time (${time.toLocaleTimeString()})`} // Display current time
            onPress={() => setShowPicker(true)} // Show picker on button press
            color="#067425"
          />
          {showPicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'} // Different display mode based on platform
              is24Hour={false}
              onChange={onTimeChange} // Update the time when selected
            />
          )}
        </View>

        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={[styles.input, { height: 100 }]} // Customize height for multiline input
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

export default Insulin;

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
