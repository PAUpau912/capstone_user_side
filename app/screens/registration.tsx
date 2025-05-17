import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

const Registration = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [streetNo, setStreetNo] = useState('');
  const [baranggay, setBaranggay] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [birthday, setBirthday] = useState('');

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setDate(selectedDate);
      setBirthday(formattedDate);
    }
  };

  const handleRegister = () => {
    router.push('/(tabs)/dashboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <Text style={styles.sectionTitle}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />

      <Text style={styles.label}>Birthday</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
        <Text style={{ color: birthday ? '#000' : '#999' }}>
          {birthday || 'Select your birth date'}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          onChange={onChange}
        />
      )}

      <Text style={styles.sectionTitle}>Address Information</Text>
      <TextInput style={styles.input} placeholder="Street No." keyboardType="numeric" value={streetNo} onChangeText={setStreetNo} />
      <TextInput style={styles.input} placeholder="Baranggay" value={baranggay} onChangeText={setBaranggay} />
      <TextInput style={styles.input} placeholder="Full Address" value={address} onChangeText={setAddress} />

      <Text style={styles.sectionTitle}>Contact Information</Text>
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Diabetic Type" value={type} onChangeText={setType} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Registration;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
    label: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#067425',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#067425',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
