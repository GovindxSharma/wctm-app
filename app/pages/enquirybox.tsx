import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const EnquiryBox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleSubmit = () => {
    Alert.alert("✅ Enquiry Submitted", "We will get back to you soon!");
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
      <Text style={styles.heading}>📩 Get in Touch</Text>
      <Text style={styles.subheading}>Fill out the form and we will contact you soon!</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" style={styles.input} placeholderTextColor="#777" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email Address" keyboardType="email-address" style={styles.input} placeholderTextColor="#777" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone Number" keyboardType="phone-pad" style={styles.input} placeholderTextColor="#777" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="City" style={styles.input} placeholderTextColor="#777" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Preferred Course / Program" style={styles.input} placeholderTextColor="#777" />
      </View>

      <View style={[styles.inputContainer, styles.textArea]}>
        <TextInput placeholder="Your Message" multiline numberOfLines={4} style={styles.input} placeholderTextColor="#777" />
      </View>

      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPress={handleSubmit}
        activeOpacity={0.9}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={styles.buttonText}>Submit Enquiry</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5", // Soft Grey Background
    padding: 25,
    margin: 15,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    width: screenWidth - 30,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#00A6A6", // Teal Border
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#005F73", // Deep Teal
    marginBottom: 5,
    textTransform: "uppercase",
  },
  subheading: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#00A6A6", // Teal Border
  },
  input: {
    fontSize: 16,
    color: "#222",
    paddingLeft: 5,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FFD700", // Gold Button
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    elevation: 5,
    shadowColor: "#FFD700",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "#005F73", // Deep Teal Text
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default EnquiryBox;
