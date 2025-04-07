import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

const AdminDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 500 }}
        style={styles.header}
      >
        <View style={styles.welcomeRow}>
          <Text style={styles.welcome}>Welcome Admin</Text>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
        </View>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 500, delay: 300 }}
          style={styles.actionButtons}
        >
          <TouchableOpacity style={styles.actionBtnActive}>
            <Text style={styles.actionTextActive}>+ Add User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Take Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Upload</Text>
          </TouchableOpacity>
        </MotiView>
      </MotiView>

      {/* Animated Cards Section */}
      <MotiView
        style={styles.cardsContainer}
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600, delay: 400 }}
      >
        <View style={styles.cardRow}>
          <InfoCard title="Total Students" value="60" subtext="+12 this week" color="green" />
          <InfoCard title="Today's Attendance" value="52%" subtext="+5% vs yesterday" color="green" />
        </View>
        <View style={styles.cardRow}>
          <InfoCard title="Pending Assignments" value="23" subtext="Due this week" color="red" />
          <InfoCard title="Upcoming Events" value="4" subtext="Next 7 days" color="gray" />
        </View>
        <View style={styles.cardRow}>
          <SimpleCard title="User Management" desc="1,248 students\n124 faculty members" icon="people" />
          <SimpleCard title="Attendance" desc="92% present today\n15 leave requests" icon="calendar-today" />
        </View>
        <View style={styles.cardRow}>
          <SimpleCard title="Upload Assignment" desc="8 resources\nLast updated 2h ago" icon="upload" />
          <SimpleCard title="Exams & Results" desc="Mid-terms next week\n82% pass rate" icon="school" />
        </View>
        <View style={styles.cardRow}>
          <SimpleCard title="Announcements" desc="3 new updates\nSports day tomorrow" icon="campaign" />
          <SimpleCard title="Reports" desc="48 new feedbacks\nMonthly report ready" icon="bar-chart" />
        </View>
      </MotiView>

      {/* Recent Activity */}
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 500, delay: 800 }}
        style={styles.recentActivity}
      >
        <Text style={styles.recentTitle}>Recent Activity</Text>
        <RecentCard name="Sarah Wilson" activity="uploaded study material" detail="Advanced Mathematics - Chapter 8" time="2 minutes ago" />
        <RecentCard name="Robert Chen" activity="marked attendance" detail="Class 12-A Physics" time="15 minutes ago" />
      </MotiView>

      {/* Floating Action Button */}
      <MotiView
        from={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1000 }}
        style={styles.fab}
      >
        <TouchableOpacity>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </MotiView>
    </ScrollView>
  );
};

const InfoCard = ({ title, value, subtext, color }: any) => (
  <View style={styles.infoCard}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={[styles.infoValue, { color }]}>{value}</Text>
    <Text style={styles.infoSub}>{subtext}</Text>
  </View>
);

const SimpleCard = ({ title, desc, icon }: any) => (
  <View style={styles.simpleCard}>
    <MaterialIcons name={icon} size={24} color="black" />
    <Text style={styles.simpleTitle}>{title}</Text>
    <Text style={styles.simpleDesc}>{desc}</Text>
  </View>
);

const RecentCard = ({ name, activity, detail, time }: any) => (
  <View style={styles.recentCard}>
    <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.recentAvatar} />
    <View style={styles.recentText}>
      <Text style={styles.recentUser}><Text style={{ fontWeight: 'bold' }}>{name}</Text> {activity}</Text>
      <Text style={styles.recentDetail}>{detail}</Text>
      <Text style={styles.recentTime}>{time}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 16 },
  header: { marginBottom: 20 },
  welcomeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  welcome: { fontSize: 20, fontWeight: 'bold' },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  actionButtons: { flexDirection: 'row', marginTop: 16 },
  actionBtn: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 8 },
  actionBtnActive: { padding: 10, backgroundColor: '#000', borderRadius: 5, marginRight: 8 },
  actionText: { color: '#000' },
  actionTextActive: { color: '#fff' },
  cardsContainer: { gap: 16 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  infoCard: { width: '48%', padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8 },
  infoTitle: { fontWeight: '600' },
  infoValue: { fontSize: 24, fontWeight: 'bold', marginVertical: 4 },
  infoSub: { fontSize: 12, color: '#666' },
  simpleCard: { width: '48%', backgroundColor: '#f1f1f1', padding: 12, borderRadius: 8 },
  simpleTitle: { fontWeight: 'bold', marginTop: 4 },
  simpleDesc: { fontSize: 12, color: '#555', marginTop: 4 },
  recentActivity: { marginTop: 24 },
  recentTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  recentCard: { flexDirection: 'row', marginBottom: 12, backgroundColor: '#f5f5f5', borderRadius: 8, padding: 10 },
  recentAvatar: { width: 40, height: 40, borderRadius: 20 },
  recentText: { marginLeft: 12, flex: 1 },
  recentUser: { fontSize: 14 },
  recentDetail: { fontSize: 12, color: '#666' },
  recentTime: { fontSize: 10, color: '#aaa' },
  fab: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#000', width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' },
  fabText: { color: '#fff', fontSize: 24 }
});

export default AdminDashboard;
