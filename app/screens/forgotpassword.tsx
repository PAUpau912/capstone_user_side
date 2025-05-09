import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const forgotpassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendResetLink = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // TODO: Integrate with Firebase or your backend to send reset link
    Alert.alert('Reset Link Sent', `A reset link has been sent to ${email}`);
    router.push('./login'); // Navigate back to login
  };

  return (
    <View style={styles.container}>
       {/* ICON */}
       <Image
        source={require('../../assets/icons/images.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.subtitle}>Enter your email to receive a password reset link.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleSendResetLink}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={() => router.push('./login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('./signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default forgotpassword;

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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#067425',
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    backgroundColor: '#067425',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomLinks: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  link: {
    color: '#007BFF',
    fontSize: 14,
  },
});
