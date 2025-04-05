import React, { useRef, useEffect } from "react";
import { Linking } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const topics = [
  { title: "Placement Record", description: "Year-wise stats of placed students and companies.", link: "https://www.wctmgurgaon.com/placement-record" },
  { title: "Industrial Training", description: "Real-world training opportunities and internships.",link: "https://www.wctmgurgaon.com/indust-traning" },
  { title: "Placement Team", description: "Meet the dedicated T&P cell working behind the scenes.",link: "https://www.wctmgurgaon.com/placement-team" },
  { title: "Recruiter List", description: "Top recruiters like Infosys, TCS, Wipro, and more.",link: "https://www.wctmgurgaon.com/RECRUITERS-LIST" },
  { title: "Placement Process", description: "Step-by-step breakdown of how students get placed.",link: "https://www.wctmgurgaon.com/placement-process" },
  { title: "Contact Placement Cell", description: "Reach out to our Training and Placement Office.",link: "https://www.wctmgurgaon.com/Contact-Placement-Cell" },
];

const screenWidth = Dimensions.get("window").width;

const Placement = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderCard = (item, index) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleAnim, {
        toValue: 1.04,
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

    const handlePress = () => {
      if (item.link) {
        Linking.openURL(item.link);
      }
    };

    return (
      <TouchableWithoutFeedback
        key={index}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
      >
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ scale: scaleAnim }],
              opacity: fadeAnim,
            },
          ]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.description}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🎓 Training & Placement</Text>
      <View style={styles.cardsContainer}>
        {topics.map((item, index) => renderCard(item, index))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
});

export default Placement;
