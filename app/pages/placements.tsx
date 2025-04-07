import React, { useRef, useEffect } from "react";
import {
  Linking,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

const topics = [
  {
    title: "Placement Record",
    description: "Year-wise stats of placed students and companies.",
    link: "https://drive.google.com/file/d/18CA3rLx3zE-zlmgYddXL-4QI6QLI8b2c/view?usp=sharing",
    hasButton: true,
  },
  {
    title: "Industrial Training",
    description: "Real-world training opportunities and internships.",
    trainingLinks: [
      { title: "Civil Engineering", url: "https://drive.google.com/file/d/1reLlbbh1CWRzFPcRYSjX5izqGTRRwZOU/view?usp=sharing" },
      { title: "Computer Science Engineering", url: "https://drive.google.com/file/d/1XcwI_6P3y0W2IjkAOugdnbO0xTvV8PWG/view?usp=sharing" },
      { title: "Electronics & Communication Engineering", url: "https://drive.google.com/file/d/143eAXPzjtEznewid9oV_XucB-c0Kb46o/view?usp=sharing" },
      { title: "Electrical Engineering", url: "https://drive.google.com/file/d/1Mh1vnno9T_TFIY3M51bC5wxROva2w5DN/view?usp=sharing" },
      { title: "Mechanical Engineering", url: "https://drive.google.com/file/d/1a6z3fVPO5HHU2vX3w2_FUTUP4-Q7FycU/view?usp=sharing" },
    ],
  },
  {
    title: "Placement Team",
    description: "Meet the dedicated T&P cell working behind the scenes.",
    link: "https://www.wctmgurgaon.com/placement-team",
    hasButton: true,
  },
  {
    title: "Recruiter List",
    description: "Top recruiters like Infosys, TCS, Wipro, and more.",
    link: "https://drive.google.com/file/d/1iPv3jUYFSniKqzqaKxsCKIoh8u0OTM5y/view?usp=sharing",
    hasButton: true,
  },
  {
    title: "Placement Process",
    description: "Step-by-step breakdown of how students get placed.",
    link: "https://www.wctmgurgaon.com/placement-process",
  },
  {
    title: "Contact Placement Cell",
    description:
      "Reach out to our Training and Placement Office.\nEmail: tnp@wctmgurgaon.com, shradha@wctmgurgaon.com\nPhone: +91-9315806350, +91-9992351362",
  },
];

const Placement = () => {
  const animations = useRef(
    topics.map((_, i) => ({
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(i % 2 === 0 ? 40 : -40),
    }))
  ).current;

  useEffect(() => {
    const animatedCards = animations.map((anim, i) =>
      Animated.parallel([
        Animated.timing(anim.opacity, {
          toValue: 1,
          duration: 600,
          delay: i * 150,
          useNativeDriver: true,
        }),
        Animated.spring(anim.translateY, {
          toValue: 0,
          delay: i * 150,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.stagger(100, animatedCards).start();
  }, []);

  const renderCard = (item, index) => {
    const anim = animations[index];
    const pressScale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(pressScale, {
        toValue: 1.03,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(pressScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

    return (
      <TouchableWithoutFeedback
        key={index}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => {
          if (item.link) Linking.openURL(item.link);
        }}
      >
        <Animated.View
          style={[
            styles.card,
            {
              opacity: anim.opacity,
              transform: [{ translateY: anim.translateY }, { scale: pressScale }],
            },
          ]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.description}</Text>

          {item.hasButton && item.link && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(item.link)}
            >
              <Text style={styles.buttonText}>Download PDF</Text>
            </TouchableOpacity>
          )}

          {item.trainingLinks && (
            <View style={styles.pdfList}>
              {item.trainingLinks.map((pdf, i) => (
                <TouchableOpacity key={i} onPress={() => Linking.openURL(pdf.url)}>
                  <Text style={styles.pdfItem}>📄 {pdf.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  pdfList: {
    marginTop: 10,
  },
  pdfItem: {
    fontSize: 14,
    color: "#0066CC",
    marginVertical: 4,
  },
});

export default Placement;
