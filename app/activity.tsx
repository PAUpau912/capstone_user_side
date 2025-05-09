import { StyleSheet,View, Text,TextInput,Button,Alert, ScrollView,Platform,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const activity = () => {
  const [activity, setActivity] = useState('');
  const [time,setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes] = useState('');

  const onTimeChange = (event: any, selectedTime? : Date) =>{
    setShowPicker(false);
    if (event.type ==='set' && selectedTime){
      setTime(selectedTime);
    }
  };

  const handleSubmit = () =>{
    if(!activity || !time){
      Alert.alert('Please fill in both activity and time.');
      return;
    }
    Alert.alert(
      'Activity Tracked!',
      `Activity: ${activity}\nTime: ${time.toLocaleTimeString()}\nNotes: ${notes}`
    );

    setActivity('');
    setTime(new Date());
    setNotes('');
  }
  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.card}>
        <Text style = {styles.heading}>🏃Activity Tracker</Text>

        <Text style = {styles.label}>Activity</Text>
        <TextInput
        style = {styles.input}
        placeholder = "e.g., walking"
        value ={activity}
        onChangeText = {setActivity}
        >
        </TextInput>

      <View style = {{marginBottom: 16}}>
        <Text style = {styles.label}>Time of Activty</Text>
        <Button
        title ={`🕒 Pick Time (${time.toLocaleTimeString()})`}
        onPress = {() => setShowPicker(true)}
        color = "#067425"
        ></Button>
        {showPicker && (
          <DateTimePicker
          value = {time}
          mode = "time"
          display = {Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour = {false}
          onChange = {onTimeChange}
          ></DateTimePicker>
        )}
      </View>

      <Text style = {styles.label}>Notes (optional)</Text>
      <TextInput
      style = {[styles.input, {height: 100}]}
      placeholder = "Any extra notes..."
      multiline
      numberOfLines = {4}
      onChangeText={setNotes}
      ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>💾 Save Entry</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default activity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 16,
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
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#067425',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#374151',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#067425',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
