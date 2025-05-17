// app/auth/Signup.tsx
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    router.replace('../screens/registration');
  };

  return (
    <View style={styles.container}>
        {/*ICON */}
        <Image 
        source = {require('../../assets/icons/images.png')}
        style = {styles.icon}
        />
        {/*TITLE */}
      <Text style={styles.title}>Signup Form</Text>

      {/*EMAIL INPUT */}
      <TextInput 
      placeholder="Email" 
      style={styles.input} 
      value ={email}
      onChangeText={setEmail}
      />

      <View style = {styles.inputGroup}>
        <TextInput
        style = {styles.input}
        placeholder ="Password"
        value = {password}
        onChangeText = {setPassword}
        secureTextEntry = {true}
        autoCapitalize = "none">
        </TextInput>

        <TextInput 
        style = {styles.input}
        placeholder ="Confirm Password"
        value = {password}
        onChangeText = {setConfirmPassword}
        secureTextEntry = {true}
        autoCapitalize = "none">
        </TextInput>
      </View>
      {/*SIGNUP BUTTON */}
      <TouchableOpacity style = {styles.signupBtn} onPress = {handleSignup}>
        <Text style ={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      
      {/*Login BUTTON */}
      <View style ={styles.LoginRow}>
        <Text style ={styles.normalText}>Have an account?</Text>
        <TouchableOpacity onPress ={() =>router.push('../screens/login')}>
            <Text style ={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      
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
        marginBottom: 20,
      },
      input: {
        width: 300,
        height: 45,
        borderWidth: 1,
        borderColor: '#067425',
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16, 
      },
      signupBtn: {
        width: '90%',
        backgroundColor: '#067425',
        padding: 15,
        borderRadius: 8,
        marginTop:10,
        marginBottom: 10, 
      },
      signupText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      LoginRow: {
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
        color: '#007bff',
        fontWeight: 'bold',
      },
});
