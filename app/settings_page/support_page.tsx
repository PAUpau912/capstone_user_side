// HelpSupportPage.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const support_page = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.card}>
      <Text style={styles.header}>Help and Support</Text>

        <Text style={styles.label}>FAQs</Text>
        <Text>- How to log blood sugar?</Text>
        <Text>- How to reset password?</Text>

        <Text style={styles.label}>Contact Support</Text>
        <TouchableOpacity style ={styles.button}>
        <Text style ={styles.buttonText} onPress={() => alert('Opening email...')}>
          Email Support
        </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Report a Bug</Text>
        <TouchableOpacity style ={styles.button}>
        <Text style ={styles.buttonText} onPress={() => alert('Bug Report Submitted')}>
           Submit Bug Report
        </Text>
        </TouchableOpacity>

        <Text style={styles.label}>User Guide</Text>
        <TouchableOpacity><Text style={styles.link}>View Tutorials</Text></TouchableOpacity>

        <Text style={styles.label}>Feedback</Text>
        <TouchableOpacity style ={styles.button}>
        <Text style ={styles.buttonText} onPress={() => alert('Thanks for your feedback!')}>
          Submit Feedback
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default support_page;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { marginTop: 20, fontWeight: 'bold' },
  link: { color: 'blue', textDecorationLine: 'underline', marginTop: 5 },
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
