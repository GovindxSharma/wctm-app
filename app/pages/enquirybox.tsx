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
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";

const screenWidth = Dimensions.get("window").width;

const EnquiryBox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const [isPressed, setIsPressed] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    message: "",
  });

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

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const { name, email, phone, city, course, message } = form;

    if (!name || !email || !phone || !city || !course || !message) {
      Alert.alert("⚠️ Missing Information", "Please fill out all fields before submitting.");
      return;
    }

    Alert.alert("✅ Enquiry Submitted", "We will get back to you soon!");
    // Optionally reset the form here
    // setForm({ name: "", email: "", phone: "", city: "", course: "", message: "" });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.heading}>📩 Get in Touch</Text>
          <Text style={styles.subheading}>Fill out the form and we will contact you soon!</Text>

          {[
            { placeholder: "Full Name", key: "name", keyboardType: "default" },
            { placeholder: "Email Address", key: "email", keyboardType: "email-address" },
            { placeholder: "Phone Number", key: "phone", keyboardType: "phone-pad" },
            { placeholder: "City", key: "city", keyboardType: "default" },
            { placeholder: "Preferred Course / Program", key: "course", keyboardType: "default" },
          ].map((item, index) => (
            <Animatable.View
              key={item.key}
              animation="fadeInUp"
              delay={200 + index * 100}
              style={styles.inputContainer}
            >
              <TextInput
                placeholder={item.placeholder}
                placeholderTextColor="#777"
                keyboardType={item.keyboardType as any}
                style={styles.input}
                value={form[item.key as keyof typeof form]}
                onChangeText={(text) => handleChange(item.key, text)}
              />
            </Animatable.View>
          ))}

          <Animatable.View animation="fadeInUp" delay={800} style={[styles.inputContainer, styles.textArea]}>
            <TextInput
              placeholder="Your Message"
              multiline
              numberOfLines={4}
              placeholderTextColor="#777"
              style={[styles.input, { height: 80 }]}
              value={form.message}
              onChangeText={(text) => handleChange("message", text)}
            />
          </Animatable.View>

          <Animatable.View animation="zoomIn" delay={1000}>
            <TouchableOpacity
              style={[styles.button, isPressed && styles.buttonPressed]}
              onPress={handleSubmit}
              activeOpacity={0.9}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Text style={styles.buttonText}>Submit Enquiry</Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
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
    borderColor: "#00A6A6",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#005F73",
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
    borderColor: "#00A6A6",
  },
  input: {
    fontSize: 16,
    color: "#222",
    paddingLeft: 5,
  },
  textArea: {
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FFD700",
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
    color: "#005F73",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default EnquiryBox;
