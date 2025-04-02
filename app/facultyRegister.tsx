import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window"); // Get screen width

export default function FacultyRegister() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require("../assets/images/Clogo.png")} style={styles.logo} />
        <Text style={styles.title}>World College of Technology and Management</Text>
        <Text style={styles.subtitle}>
          (Approved by AICTE, Ministry of HRD, Govt. of India, and affiliated to MDU, Rohtak)
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>New Faculty Registration</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your full name" />

          <Text style={styles.label}>Department</Text>
          <TextInput style={styles.input} placeholder="Enter your department" />

          <Text style={styles.label}>Admin ID</Text>
          <TextInput style={styles.input} placeholder="Enter your admin ID" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Create a password" secureTextEntry />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already Have an Account?{" "}
            <Text style={styles.loginLink} onPress={() => router.push("/FacultyLogin")}>
              Login
            </Text>
          </Text>
        </View>

        <Text style={styles.footer}>© 2024 World College. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  logo: {
    width: width * 0.2, // 20% of screen width
    height: width * 0.2, // Maintain square shape
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: width * 0.05, // Scales with screen size
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    width: "90%",
  },
  subtitle: {
    fontSize: width * 0.03,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    width: "90%",
  },
  formContainer: {
    width: "90%", // Make form responsive
    backgroundColor: "#F8F8F8",
    padding: 20,
    borderRadius: 10,
   
  },
  formTitle: {
    fontSize: width * 0.045, // Responsive text
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontSize: width * 0.035,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    width: "100%", // Takes full width
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  registerButton: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  loginText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: width * 0.035,
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    fontSize: width * 0.03,
    color: "#888",
    textAlign: "center",
    width: "90%",
  },
});
