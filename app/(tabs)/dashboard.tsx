import { Text, View, Image, ScrollView, TouchableOpacity,Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import TrackingButton from "../../components/TrackingButton"; // Ensure this path is correct

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Dashboard() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container} contentContainerStyle ={{paddingBottom: 100}}>
      {/* Profile Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          style={styles.profileImage}
        />
        </View>
        <View style={styles.profileCard}>
          <Text style={styles.profileName}>CARL PAMPOLINA</Text>
          <View style={styles.profileInfoContainer}>
            <View style={styles.profileInfoColumn}>
              <Text style={styles.profileInfoText}>
                <Text style={styles.profileInfoLabel}>Gender: </Text>
                <Text style={styles.profileInfoValue}>Male</Text>
              </Text>
              <Text style={styles.profileInfoText}>
                <Text style={styles.profileInfoLabel}>Mobile: </Text>
                <Text style={styles.profileInfoValue}>09123456789</Text>
              </Text>
              <Text style={styles.profileInfoText}>
                <Text style={styles.profileInfoLabel}>Address: </Text>
                <Text style={styles.profileInfoValue}>San Pablo, Laguna</Text>
              </Text>
              
            </View>
            <View style={styles.profileInfoColumn}>
              <Text style={styles.profileInfoText}>
                <Text style={styles.profileInfoLabel}>Age: </Text>
                <Text style={styles.profileInfoValue}>24</Text>
              </Text>
              <Text style={styles.profileInfoText}>
                <Text style={styles.profileInfoLabel}>Diabetic Type: </Text>
                <Text style={styles.profileInfoValue}>2</Text>
              </Text>
            </View>
          </View>
        </View>

      {/* Graph Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Overview</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/*BLOOD SUGAR */}
          <TouchableOpacity style = {styles.chartWrapper} onPress = {() => router.push('/chart_tracking/insulin_table')}>
            <Text style = {styles.chartSubtitle}>Blood Sugar</Text>
                <LineChart
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{ data: [140, 135, 120, 145, 130, 170, 160] }],
              }}
              width={screenWidth - 64}
              height={screenHeight * 0.25}
              chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(0, 128, 128, ${opacity})`,
                labelColor: () => "#000",
                strokeWidth: 2,
              }}
              bezier
              style={styles.chartStyle}
            />
          </TouchableOpacity>
          {/*MEAL CHART */}
          <TouchableOpacity style = {styles.chartWrapper} onPress ={() => router.push('/chart_tracking/meal_table')}>
            <Text style = {styles.chartSubtitle}>Meal Intake</Text>
            <LineChart
            data = {{
              labels: ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
              datasets:[{data: [1800,1700,1600,1900,1750,1850,2000]}],
            }}
            width = {screenWidth - 64}
            height = {screenHeight *0.25}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(0, 128, 128, ${opacity})`,
              labelColor: () => "#000",
              strokeWidth: 2,
            }}
            bezier
            style={styles.chartStyle}
          />
            </TouchableOpacity>
            <TouchableOpacity style ={styles.chartWrapper} onPress = {()=> router.push('/chart_tracking/activity_table')}>
              <Text style = {styles.chartSubtitle}>Activity</Text>
              <LineChart
            data = {{
              labels: ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
              datasets:[{data: [30,45,40,50,35,60,55]}],
            }}
            width = {screenWidth - 64}
            height = {screenHeight *0.25}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(0, 128, 128, ${opacity})`,
              labelColor: () => "#000",
              strokeWidth: 2,
            }}
            bezier
            style={styles.chartStyle}
          />
            </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Tracking Section */}
      <View style={styles.trackingContainer}>
        <Text style={styles.trackingTitle}>Blood Sugar Tracking</Text>
        <View style={styles.trackingButtons}>
          <TrackingButton label="Insulin" emoji="💉" onPress={() => handleNavigate("insulin")} />
          <TrackingButton label="Meal" emoji="🍽️" onPress={() => handleNavigate("meal")} />
          <TrackingButton label="Activity" emoji="🏃" onPress={() => handleNavigate("activity")} />
        </View>
      </View>

      {/*ALERTS */}
      <View style = {styles.alertContainer}>
        <Text style = {styles.chartSubtitle}> Alerts</Text>

        <View style = {styles.AlertTextContainer}>
          <Ionicons name ="alert-circle" size ={24} color ="red"/>
          <Text style = {styles.AlertText}>Low Blood Sugar detected on Monday (65 mg/dL)</Text> 
        </View>

        <View style = {styles.AlertTextContainer}>
          <Ionicons name ="alert-circle" size ={24} color ="red"/>
          <Text style = {styles.AlertText}>High Blood Sugar detected on Wednesday (300 mg/dL)</Text> 
        </View>
        <View style = {styles.AlertTextContainer}>
          <Ionicons name ="alert-circle" size ={24} color ="red"/>
          <Text style = {styles.AlertText}>Low Blood Sugar detected on Saturday (58 mg /dL)</Text> 
        </View>
        <View style = {styles.AlertTextContainer}>
          <Ionicons name ="alert-circle" size ={24} color ="red"/>
          <Text style = {styles.AlertText}>High Blood Sugar detected on Sunday ( 356 mg/dL)</Text> 
        </View>
      </View>

      {/*Doctors note */}
      <View style = {styles.NoteContainer}>
        <Text style = {styles.chartSubtitle}>Doctor's Notes</Text>
        <View style = {{marginTop: 10}}>
          <Text style ={styles.noteText}>• Patient's blood sugar levels showed significant fluctuation this week. Recommend closer monitoring before and after meals.</Text>
          <Text style ={styles.noteText}>• Increase daily physical activity. Target at least 30 minutes of moderate exercise for 5 days a week to improve insulin sensitivity.</Text>
          <Text style ={styles.noteText}>• Insulin dosage may need adjustment based on post-meal glucose spikes observed on Wednesday and Sunday.</Text>
          <Text style ={styles.noteText}>• Encourage hydration and regular meal times. Skipping meals may have contributed to the hypoglycemic event on Monday.</Text>

        </View>
      </View>
    </ScrollView>
  );
}

// Optional fallback if you want to use this custom button
export function trackingButton({ label, emoji, onPress }) {
  return (
    <TouchableOpacity style={styles.trackingButton} onPress={onPress}>
      <Text style={styles.trackingEmoji}>{emoji}</Text>
      <Text style={styles.trackingLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    padding: 10,
  },
  header: {
    alignItems: "center",
    paddingBottom: 24,
    paddingTop: 16,
    paddingVertical: 5,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    backgroundColor: "#067425",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#ffffff",
    marginBottom: 8,
  },
  profileCard: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: "100%",
  },
  
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  
  profileInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  
  profileInfoColumn: {
    flex: 1,
    paddingHorizontal: 5,
  },
  
  profileInfoText: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 2,
    width: "100%",
  },
  
  profileInfoLabel: {
    color: "#10B981",
    fontWeight: "600",
  },
  
  profileInfoValue: {
    color: "#1F2937",
    fontWeight: "500",
  },
  trackingContainer: {
    marginVertical: 22,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    alignSelf: "center",
    width: "90%",
  },
  trackingTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  trackingButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  trackingButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  trackingEmoji: {
    fontSize: 32,
  },
  trackingLabel: {
    marginTop: 8,
    fontWeight: "600",
  },
  chartContainer: {
    paddingVertical: 16,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  chartSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  chartWrapper: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  chartStyle: {
    borderRadius: 16,
  },
  alertContainer: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: "100%",
    marginBottom: 16,
  },
  AlertTextContainer: {
    flexDirection: "row",
    marginVertical: 2,
  },
  AlertText: {
    marginLeft: 2,
    fontSize: 12,
  },
  NoteContainer: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: "100%",
    marginBottom: 50,
  },
  noteText:{
    fontSize: 13,
    marginBottom: 8,
    lineHeight: 18,
  },
});