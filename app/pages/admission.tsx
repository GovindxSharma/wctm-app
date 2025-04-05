import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Animated } from "react-native";

const sections = [
  { title: "📜 Online Enquiry Form", link: "https://www.wctmgurgaon.com/online-enquiry-form" },
  { title: "📝 Admission Form", link: "https://www.wctmgurgaon.com/admission-form" },
  { title: "✅ Eligibility Criteria", link: "https://www.wctmgurgaon.com/eligibility-criteria" },
  { title: "🌍 International Tie-Up", link: "https://www.wctmgurgaon.com/old-dominion-tieup" },
  { title: "🇳🇵 Nepal, Bhutan & North-East Students", link: "https://www.wctmgurgaon.com/nepal-bhutan-&-north-east-students" },
];

const AdmissionSection = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link:", err));
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.05, // Smooth zoom-in effect
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Reset size
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎓 Admission Section</Text>
      {sections.map((item, index) => (
        <Animated.View key={index} style={[styles.animatedContainer, { transform: [{ scale: scaleAnim }] }]}>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => handlePress(item.link)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.sectionText}>{item.title}</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#000000", // Matte Black Background
    paddingVertical: 30,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000", // Pure White Text
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  animatedContainer: {
    width: "100%",
    alignItems: "center",
  },
  sectionButton: {
    width: "85%",
    paddingVertical: 18,
    backgroundColor: "#FFFFFF", // White Buttons
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 8,
    shadowColor: "#B0B0B0", // Soft Gray Shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Shadow for Android
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Black Text for Contrast
    textTransform: "capitalize",
    letterSpacing: 0.5,
  },
});

export default AdmissionSection;
