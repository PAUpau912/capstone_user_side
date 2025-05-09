import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {useRouter} from 'expo-router';


const Login = () => {
    const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* ICON */}
      <Image
        source={require('../../assets/icons/images.png')}
        style={styles.icon}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to Diabetic App</Text>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      {/*FORGOT PASSWORD */}
      <View style = {styles.PassContainer}>
        <TouchableOpacity onPress = {() => router.push('/screens/forgotpassword')}>
            <Text style = {styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      {/*LOGIN BUTTON */}
      <TouchableOpacity 
      style = {styles.Btn} 
    //   onPress={() => router.push('../../dashboard')}
        onPress = {() => {if(email === 'admin' && password === '1234')
    {router.push('/(tabs)/dashboard');}
    else{
        alert('Invalid email or password');
    }
    }}
      >
        <Text style = {styles.LoginText}>Login</Text>
      </TouchableOpacity>

        {/* Signup Button */}
        <View style={styles.signupRow}>
        <Text style={styles.normalText}>No account? </Text>
        <TouchableOpacity onPress={() => router.push('../screens/signup')}>
            <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
        </View>

    </View>
  );
};

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
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#067425',
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  Btn: {
    width: '90%',
    backgroundColor: '#067425',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  LoginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#067425',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  PassContainer: {
    width: '90%',
    marginBottom: 20,
    alignItems: 'flex-end',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  normalText: {
    fontSize: 14,
    color: '#000',
  },
  link: {
    fontSize: 13,
    color: '#007bff',
  },
});

export default Login;
