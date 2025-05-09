import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>
    <Stack screenOptions={{ headerShown: false }}></Stack>
   <Stack.Screen name="screens/login" options={{ headerShown: true, title: "Login" }} />
   <Stack.Screen name ="(tabs)" options = {{headerShown: false}}></Stack.Screen>
   <Stack.Screen name ="screens/start" options = {{headerShown: true, title: "START"}}></Stack.Screen>
   <Stack.Screen name ="screens/signup" options = {{headerShown: true, title: "Signup"}}></Stack.Screen>
   <Stack.Screen name ="screens/forgotpassword" options = {{headerShown: true, title: "Forgot Password"}}></Stack.Screen>
    <Stack.Screen name="chart_tracking/insulin_table" options={{ headerShown: true ,title:"Insulin Table " }} />
    <Stack.Screen name="chart_tracking/meal_table" options={{ headerShown: true ,title:"Meal Table " }} />
    <Stack.Screen name="chart_tracking/activity_table" options={{ headerShown: true ,title:"Activity Table " }} />
    <Stack.Screen name="settings_page/notifications_page" options={{ headerShown: true ,title:"Notifcations and Alert " }} />
    <Stack.Screen name="settings_page/education_page" options={{ headerShown: true ,title:"Educational Content Preferences " }} />
    <Stack.Screen name="settings_page/support_page" options={{ headerShown: true ,title:"Help and Support " }} />
    <Stack.Screen name="settings_page/theme_page" options={{ headerShown: true ,title:" Appearance and Theme" }} />

  </Stack>
}
