import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ActivityTable = () => {
  const activityData = [
    { date: 'March 1, 2025', time: '6:00am', activity: 'walking' },
    { date: 'March 1, 2025', time: '3:00pm', activity: 'basketball' },
    { date: 'March 2, 2025', time: '6:00am', activity: 'walking' },
    { date: 'March 3, 2025', time: '6:00am', activity: 'jogging' },
  ]

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Activity</Text>

      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.headerText}>Date</Text>
          <Text style={styles.headerText}>Time</Text>
          <Text style={styles.headerText}>Activity</Text>
        </View>

        {/* Table Rows */}
        {activityData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.activity}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default ActivityTable

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
