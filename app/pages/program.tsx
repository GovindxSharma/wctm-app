import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

const googleDriveLink = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"; // Replace with actual Google Drive link

const handleOpenDrive = () => {
  Linking.openURL(googleDriveLink).catch((err) => console.error("Error opening Drive:", err));
};

const ProgramScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Our Programs</Text>
      {[
        "M.Tech",
        "MCA",
        "MBA",
        "B.Tech",
        "BBA",
        "BCA",
        "Diploma",
      ].map((program, index) => (
        <View key={index} style={styles.programItem}>
          <Text style={styles.programText}>{program}</Text>
          <TouchableOpacity style={styles.downloadButton} onPress={handleOpenDrive}>
            <Text style={styles.downloadText}>⬇ Download Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
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
    paddingTop:20,
    // textAlign: "center",w
    marginBottom: 20,
    color: "#333",
  },
  programItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
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
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  downloadText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProgramScreen;
