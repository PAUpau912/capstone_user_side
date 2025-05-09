// EducationSettingsPage.js
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const education_page = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      <View style ={styles.card}>
      <Text style={styles.header}>Educational Content Preferences</Text>

      <View style={styles.row}>
        <Text>Enable Content Notifications</Text>
        <Switch value={notificationsEnabled} 
        onValueChange={setNotificationsEnabled}
        trackColor = {{false: '#ccc', true: "#067425"}} 
        thumbColor = {notificationsEnabled ? '#fffff' : '#f4f3f4'} 
         />
      </View>

      <Text style={styles.label}>Topics of Interest</Text>
      <Text>☑️ Nutrition   ☑️ Fitness   ☑️ Mental Health</Text>

      <Text style={styles.label}>Language</Text>
      <Picker selectedValue={language} onValueChange={(itemValue) => setLanguage(itemValue)}>
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="Filipino" value="Filipino" />
      </Picker>

      <Text style={styles.label}>Latest Articles</Text>
      <Text>- 5 Best Low-Carb Snacks for Diabetics</Text>
      <Text>- Managing Diabetes Through Exercise</Text>

      <TouchableOpacity style ={styles.button} onPress = {() => alert('Preferences Saved!')}>
        <Text style ={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default education_page;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  label: { marginTop: 20, fontWeight: 'bold' },
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
