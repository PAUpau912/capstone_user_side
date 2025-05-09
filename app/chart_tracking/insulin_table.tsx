import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

const insulin_tracking = () => {
  const data = [
    {date: 'March 1,2025', time: '8:00am', dosage: '23 units'},
    {date: 'March 1,2025', time: '12:00pm', dosage: '17 units'},
    {date: 'March 1,2025', time: '6:00pm', dosage: '5 units'},
    {date: 'March 4,2025', time: '8:00am', dosage: '18 units'},
    {date: 'March 5,2025', time: '8:00am', dosage: '18 units'},
  ]
  return (
    <ScrollView style = {styles.container} >
      {/*header */}
      <Text style ={styles.title}>Insulin Tracking Table</Text>
      <View style = {styles.table}>
        <View style = {[styles.row, styles.headerRow]}>
          <Text style = {styles.headerText}>Date</Text>
          <Text style = {styles.headerText}>Time</Text>
          <Text style = {styles.headerText}>Dosage</Text>
        </View>
      </View>
      {/* table rows*/}
      {data.map((entry, index) =>(
        <View key = {index} style = {styles.row}>
          <Text style = {styles.cell}>{entry.date}</Text>
          <Text style = {styles.cell}>{entry.time}</Text>
          <Text style = {styles.cell}>{entry.dosage}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default insulin_tracking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#067425',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
})
