import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
  ScrollView,
} from "react-native";

const googleDriveLink = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"; // Replace with actual link

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const programs = [
  "M.Tech",
  "MCA",
  "MBA",
  "B.Tech",
  "BBA",
  "BCA",
  "Diploma",
];

const btechCourses = [
  "CSE",
  "CS & D",
  "AI & DS",
  "AI & ML",
  "Robotics & AI",
  "Mech & Automation Engg.",
  "Mech Engg.",
  "Civil Engg.",
];

const handleOpenDrive = (course) => {
  // In real case, you might have different links per course
  Linking.openURL(googleDriveLink).catch((err) =>
    console.error("Error opening Drive:", err)
  );
};

const ProgramScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const animations = useRef(programs.map(() => new Animated.Value(300))).current;

  useEffect(() => {
    const anims = programs.map((_, index) =>
      Animated.timing(animations[index], {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      })
    );
    Animated.stagger(100, anims).start();
  }, []);

  const toggleBTech = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📚 Our Programs</Text>

      {programs.map((program, index) => {
        const isBTech = program === "B.Tech";
        const slideFrom = index % 2 === 0 ? animations[index] : Animated.multiply(animations[index], -1);

        return (
          <Animated.View
            key={index}
            style={[
              styles.programItem,
              {
                transform: [{ translateX: slideFrom }],
              },
            ]}
          >
            <View style={styles.row}>
              <Text style={styles.programText}>{program}</Text>
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={isBTech ? toggleBTech : () => handleOpenDrive(program)}
              >
                <Text style={styles.downloadText}>
                  {isBTech ? (expanded ? "Know Less" : "Know More") : "Download"}
                </Text>
              </TouchableOpacity>
            </View>

            {isBTech && expanded && (
              <View style={styles.dropdown}>
                {btechCourses.map((course, i) => (
                  <View key={i} style={styles.courseRow}>
                    <Text style={styles.dropdownItem}>• {course}</Text>
                    <TouchableOpacity
                      style={styles.courseDownloadBtn}
                      onPress={() => handleOpenDrive(course)}
                    >
                      <Text style={styles.courseDownloadText}>Download</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
    marginBottom: 20,
    color: "#333",
  },
  programItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  programText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  downloadButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  downloadText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  dropdown: {
    marginTop: 10,
    paddingLeft: 10,
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  dropdownItem: {
    fontSize: 15,
    color: "#555",
  },
  courseDownloadBtn: {
    backgroundColor: "#34C759",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  courseDownloadText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default ProgramScreen;
