import { View, Text,StyleSheet,TouchableOpacity,Switch,ScrollView } from 'react-native'
import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker'

const theme_page = () => {
  const [theme, setTheme] = useState('system');
  const [fontSize, setFontSize] = useState('small');
  const[graphStyle, setGraphStyle] = useState('line');
  const [timeFormat, setTimeFormat] = useState('12');
  const [language, setLanguage] = useState('en');

  const handleSave = () =>{
 // Save preferences here
    console.log({
      theme,
      fontSize,
      graphStyle,
      timeFormat,
      language,
    });
    alert('Settings saved!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style = {styles.card}>
      <Text style={styles.header}>App Appearance & Theme</Text>

        {/* Theme Options */}
        <Text style={styles.label}>Theme Options:</Text>
        <OptionSelector
          options={[
            { label: 'Light Mode', value: 'light' },
            { label: 'Dark Mode', value: 'dark' },
            { label: 'System Default Mode', value: 'system' },
          ]}
          selected={theme}
          onSelect={setTheme}
        />

        {/* Font Size */}
        <Text style={styles.label}>Font Size Options:</Text>
        <OptionSelector
          options={[
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ]}
          selected={fontSize}
          onSelect={setFontSize}
        />

        {/* Time Format */}
        <Text style={styles.label}>Time Format:</Text>
        <OptionSelector
          options={[
            { label: '12-hour format', value: '12' },
            { label: '24-hour format', value: '24' },
          ]}
          selected={timeFormat}
          onSelect={setTimeFormat}
        />

        {/* Language */}
        <Text style={styles.label}>Language Selection:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="French" value="fr" />
            <Picker.Item label="German" value="de" />
            <Picker.Item label="Tagalog" value="ta" />
          </Picker>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save / Apply</Text>
        </TouchableOpacity>
      </View>
</ScrollView>
     
  );
};

const OptionSelector = ({ options, selected, onSelect }) => (
  <View style={styles.optionGroup}>
    {options.map((opt) => (
      <TouchableOpacity
        key={opt.value}
        style={[
          styles.optionButton,
          selected === opt.value && styles.optionButtonSelected,
        ]}
        onPress={() => onSelect(opt.value)}
      >
        <Text
          style={[
            styles.optionText,
            selected === opt.value && styles.optionTextSelected,
          ]}
        >
          {opt.label}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',  
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '500',
  },
  optionGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    marginRight: 10,
    marginBottom: 10,
  },
  optionButtonSelected: {
    backgroundColor: '#067425',
    borderColor: '#067425',
  },
  optionText: {
    color: '#333',
  },
  optionTextSelected: {
    color: '#fff',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#aaa',
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default theme_page;