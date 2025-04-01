import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerTitle: "WCTM Dashboard" }} />
      <Stack.Screen name="login" options={{ headerTitle: "Student Login" }} />
      <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
      <Stack.Screen name="faculty" options={{ headerTitle: "Faculty Login" }} />
      <Stack.Screen name="guest" options={{ headerTitle: "Guest Mode" }} />
    </Stack>
  );
}
