import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginTemplate() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Icon */}
      <Image
        source={require('../../assets/icons/images.png')} // You can replace with local asset
        style={styles.icon}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to Diabetic App</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('../screens/login')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupBtn} onPress={() => router.push('../screens/signup')}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#067425',
    marginBottom: 10,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#067425',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupBtn: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    borderColor: '#067425',
    borderWidth: 1,
  },
  signupText: {
    color: '#067425',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
