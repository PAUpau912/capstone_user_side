import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const meal_tracking = () => {
    const mealData =[
        {date: 'March 1, 2025', time: "8:00am", dish: "Omelette", cupOfRice: '2', drinks: 'juice'},
        {date: 'March 1, 2025', time: "12:00pm", dish: "Sinigang", cupOfRice: '2', drinks: 'water'},
        {date: 'March 1, 2025', time: "6:30pm", dish: "Sinigang", cupOfRice: '2', drinks: 'coke'},
        {date: 'March 2, 2025', time: "8:00am", dish: "Hotdog", cupOfRice: '2', drinks: 'hot chocolate'},

    ]
  return (
    <ScrollView style = {styles.container}>
        {/*HEADER */}
        <Text style = {styles.title}>Meal Tracking</Text>
        <View style = {styles.table}>
            <View style = {[styles.row, styles.headerRow]}>
                <Text style = {styles.headerText}>Date</Text>
                <Text style = {styles.headerText}>Time</Text>
                <Text style = {styles.headerText}>Dish</Text>
                <Text style = {styles.headerText}>cup of Rice</Text>
                <Text style = {styles.headerText}>Drinks</Text>
            </View>
        </View>
        {/*table rows */}
        {mealData.map((entry, index)=>(
            <View key = {index} style = {styles.row}>
                <Text style = {styles.cell}>{entry.date}</Text>
                <Text style = {styles.cell}>{entry.time}</Text>
                <Text style = {styles.cell}>{entry.dish}</Text>
                <Text style = {styles.cell}>{entry.cupOfRice}</Text>
                <Text style = {styles.cell}>{entry.drinks}</Text>
            </View>
        ))}
    </ScrollView>
  )
}

export default meal_tracking;
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
