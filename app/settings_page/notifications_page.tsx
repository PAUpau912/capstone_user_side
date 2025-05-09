import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const notifications_page = () => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [medicationReminder, setMedicationReminder] = useState(false);
  const [glucoseReminder, setGlucoseReminder] = useState(false);
  const [mealReminder, setMealReminder] = useState(false);
  const [insulinReminder, setInsulinReminder] = useState(false);
  const [customReminder, setCustomReminder] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminderFrequency, setReminderFrequency] = useState('');

  const handleSave = () => {
    // Handle saving the preferences
    console.log('Saved preferences:', {
      pushNotifications,
      medicationReminder,
      glucoseReminder,
      mealReminder,
      insulinReminder,
      customReminder,
      reminderTime,
      reminderFrequency,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style ={styles.card}>
          <Text style={styles.header}>Notifications and Alerts</Text>

          <View style={styles.option}>
            <Text>Enable/Disable Push Notifications</Text>
            <Switch value={pushNotifications} onValueChange={setPushNotifications}
            trackColor = {{false: '#ccc', true: "#067425"}} 
            thumbColor = {pushNotifications ? '#fffff' : '#f4f3f4'}  />
          </View>

          <View style={styles.option}>
            <Text>Set Medication Reminders (Time & Dosage)</Text>
            <Switch value={medicationReminder} onValueChange={setMedicationReminder} 
            trackColor = {{false: '#ccc', true: "#067425"}} 
            thumbColor = {medicationReminder ? '#fffff' : '#f4f3f4'}/>
          </View>

          <View style={styles.option}>
            <Text>Set Blood Glucose Test Reminders (Time)</Text>
            <Switch value={glucoseReminder} onValueChange={setGlucoseReminder} 
            trackColor = {{false: '#ccc', true: "#067425"}} 
            thumbColor = {glucoseReminder ? '#fffff' : '#f4f3f4'} />
          </View>

          <View style={styles.option}>
            <Text>Set Meal Time Reminders</Text>
            <Switch value={mealReminder} onValueChange={setMealReminder} 
            trackColor = {{false: '#ccc', true: "#067425"}} 
            thumbColor = {mealReminder ? '#fffff' : '#f4f3f4'}/>
          </View>

          <View style={styles.option}>
            <Text>Insulin Injection Reminders</Text>
            <Switch value={insulinReminder} onValueChange={setInsulinReminder} 
            trackColor = {{false: '#ccc', true: "#067425"}}  
            thumbColor = {insulinReminder ? '#fffff' : '#f4f3f4'}/>
          </View>

          <View style={styles.customReminder}>
            <Text>Custom reminder setup</Text>
            <TextInput
              style={styles.input}
              placeholder="Reminder Type"
              value={customReminder}
              onChangeText={setCustomReminder}
            />
            <TextInput
              style={styles.input}
              placeholder="Reminder Time"
              value={reminderTime}
              onChangeText={setReminderTime}
            />
            <TextInput
              style={styles.input}
              placeholder="Reminder Frequency"
              value={reminderFrequency}
              onChangeText={setReminderFrequency}
            />
          </View>
          <TouchableOpacity style ={styles.button} onPress = {handleSave}>
            <Text style ={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,    
  },
  customReminder: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  info: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#067425',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default notifications_page;
