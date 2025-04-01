import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState } from "react";

export default function StudentAuthScreen({ type }: { type: "login" | "register" }) {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", studentID: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (name: string, value: string) => setForm({ ...form, [name]: value });

  const handleSubmit = () => {
    if (type === "login") {
      router.replace("/home");
    } else {
      // Handle registration logic
      router.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image source={require("../assets/images/Clogo.png")} style={styles.logo} />
      
      {/* Title (Login or Register) */}
      <Text style={styles.title}>{type === "login" ? "Student Login" : "New Student Registration"}</Text>

      {/* Form fields */}
      <View style={styles.formContainer}>
        {type === "register" && (
          <TextInput style={styles.input} placeholder="Full Name" value={form.fullName} onChangeText={(text) => handleChange("fullName", text)} />
        )}
        {type === "register" && (
          <TextInput style={styles.input} placeholder="Student ID" value={form.studentID} onChangeText={(text) => handleChange("studentID", text)} />
        )}
        <TextInput style={styles.input} placeholder="Email" value={form.email} onChangeText={(text) => handleChange("email", text)} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" value={form.password} onChangeText={(text) => handleChange("password", text)} secureTextEntry />
        {type === "register" && (
          <TextInput style={styles.input} placeholder="Confirm Password" value={form.confirmPassword} onChangeText={(text) => handleChange("confirmPassword", text)} secureTextEntry />
        )}

        {/* Submit button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{type === "login" ? "Login" : "Register"}</Text>
        </TouchableOpacity>

        {/* Forgot Password and Register Links */}
        {type === "login" && (
          <View>
            <TouchableOpacity onPress={() => router.push("/forgotpassword")}>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.link}>New User? Register Here</Text>
            </TouchableOpacity>
          </View>
        )}
        {type === "register" && (
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Rank banner */}
      <Image source={require("../assets/images/rank.png")} style={styles.banner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingTop: 50, // Add some top padding to avoid overlap with status bar
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20, // Added horizontal padding for form elements
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#007bff",
    marginTop: 10,
    fontSize: 16,
  },
  banner: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
    marginTop: 20, // Space between the form and the rank banner
  },
});
