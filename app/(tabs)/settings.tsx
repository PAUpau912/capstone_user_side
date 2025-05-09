import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import {useRouter} from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';

const settings = () => {
  const router = useRouter();
  const handleLogout = () =>{
    router.replace('/');
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TrackingButton icon="bell" label="Notifications and Alerts" route = "notifications_page"/>
        <TrackingButton  icon="paint-brush" label="App Appearance & Theme" route ="theme_page" />
        <TrackingButton  icon="book" label="Educational Content Preferences" route="education_page"/>
        <TrackingButton  icon="question" label="Help and Support" route ="support_page"/>
        <TouchableOpacity style ={styles.LogoutButton} onPress = {handleLogout}>
          <Text style = {styles.LogoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

function TrackingButton({ label, icon, route }) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/settings_page/${route}`);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.buttonContent}>
        <Icon name={icon} size={20} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  button: {
    marginBottom: 15,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonContent:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  LogoutButton:{
    marginTop: 20,
    backgroundColor: '#FF6347', // Red-ish color for logout
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default settings;
