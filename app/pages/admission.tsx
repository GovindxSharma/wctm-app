import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Animated,
} from "react-native";

const sections = [
  { title: "📜 Online Enquiry Form", link: "https://www.wctmgurgaon.com/online-enquiry-form" },
  { title: "📝 Admission Form", link: "https://www.wctmgurgaon.com/admission-form" },
  { title: "✅ Eligibility Criteria", link: "https://www.wctmgurgaon.com/eligibility-criteria" },
  { title: "🌍 International Tie-Up", link: "https://www.wctmgurgaon.com/old-dominion-tieup" },
  { title: "🇳🇵 Nepal, Bhutan & North-East Students", link: "https://www.wctmgurgaon.com/nepal-bhutan-&-north-east-students" },
];

const AdmissionSection = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateYAnims = useRef(sections.map(() => new Animated.Value(50))).current;

  useEffect(() => {
    const animations = translateYAnims.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 0,
        duration: 500,
        delay: index * 150,
        useNativeDriver: true,
      })
    );
    Animated.stagger(100, animations).start();
  }, []);

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening link:", err)
    );
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.05,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎓 Admission Section</Text>
      {sections.map((item, index) => (
        <Animated.View
          key={index}
          style={[
            styles.animatedContainer,
            {
              transform: [
                { scale: scaleAnim },
                { translateY: translateYAnims[index] },
              ],
              opacity: translateYAnims[index].interpolate({
                inputRange: [0, 50], // ✅ FIXED RANGE
                outputRange: [1, 0],  // ✅ MATCHING OUTPUT
              }),
            },
          ]}
        >
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
    // flex: 1,
    // paddingVertical: 30,
    // alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingTop:25,
    paddingLeft:20,
  },
  animatedContainer: {
    width: "100%",
    alignItems: "center",
  },
  sectionButton: {
    width: "85%",
    paddingVertical: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 8,
    shadowColor: "#B0B0B0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "capitalize",
    letterSpacing: 0.5,
  },
});

export default AdmissionSection;
