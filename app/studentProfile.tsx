import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const dashboardItems = [
  { label: "Dashboard", icon: "ios-speedometer" },
  { label: "Attendance", icon: "calendar" },
  { label: "Assignments", icon: "book" },
  { label: "Exams", icon: "create" },
  { label: "Job Updates", icon: "briefcase" },
  { label: "Library", icon: "library" },
];

const announcements = [
  {
    title: "Campus Career Fair 2024",
    tag: "Important",
    description:
      "Join us for the biggest career fair of the year featuring top companies from tech, finance,",
    time: "2 hours ago",
  },
];

const events = [
  {
    title: "Tech Innovation Summit",
    date: "Apr 15, 2024 - 10:00 AM",
    location: "Main Auditorium",
  },
  {
    title: "Alumni Networking Night",
    date: "Apr 20, 2024 - 6:00 PM",
    location: "Student Center",
  },
];

const StudentDashboard = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.name}>Vishal Sharma</Text>
        </View>
        <Ionicons name="notifications" size={24} color="red" style={styles.bell} />
      </View>

      <TextInput
        placeholder="Search courses, assignments..."
        style={styles.searchBar}
        placeholderTextColor="#999"
      />

      <View style={styles.gridContainer}>
        {dashboardItems.map((item, index) => (
          <Animated.View
            entering={FadeInUp.delay(index * 150)}
            key={index}
            style={styles.gridItem}
          >
            <TouchableOpacity style={styles.iconBox}>
              <Ionicons name={item.icon} size={28} color="#000" />
              <Text style={styles.iconLabel}>{item.label}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Announcements</Text>
      {announcements.map((a, index) => (
        <View key={index} style={styles.announcementBox}>
          <View style={styles.announcementHeader}>
            <Text style={styles.announcementTitle}>{a.title}</Text>
            <Text style={styles.tag}>{a.tag}</Text>
          </View>
          <Text style={styles.announcementDesc}>{a.description}</Text>
          <View style={styles.announcementFooter}>
            <Text style={styles.time}>{a.time}</Text>
            <Text style={styles.readMore}>Read More</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      {events.map((e, index) => (
        <View key={index} style={styles.eventBox}>
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{e.title}</Text>
            <Text style={styles.eventDate}>{e.date}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location" size={16} color="#555" />
              <Text style={styles.eventLocation}> {e.location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  bell: {
    marginLeft: "auto",
  },
  welcome: {
    color: "#999",
    fontSize: 14,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 14,
    paddingLeft: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: width / 3 - 20,
    marginBottom: 16,
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
  },
  iconLabel: {
    fontSize: 12,
    color: "#000",
    marginTop: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#111",
  },
  announcementBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
  },
  announcementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  announcementTitle: {
    fontWeight: "bold",
    color: "#222",
    fontSize: 14,
  },
  tag: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
  announcementDesc: {
    fontSize: 13,
    color: "#444",
  },
  announcementFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  time: {
    fontSize: 11,
    color: "#999",
  },
  readMore: {
    fontSize: 11,
    color: "#000",
    fontWeight: "600",
  },
  eventBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    elevation: 2,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#111",
    marginBottom: 2,
  },
  eventDate: {
    fontSize: 12,
    color: "#555",
  },
  eventLocation: {
    fontSize: 12,
    color: "#555",
  },
  registerBtn: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  registerText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default StudentDashboard;
