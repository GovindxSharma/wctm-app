import React, { useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Animated } from "react-native";

const aboutUs = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <Animated.View style={[styles.banner, { opacity: fadeAnim }]}>
        <Image source={require("../../assets/images/campus.jpg")} style={styles.bannerImage} />
      </Animated.View>

      {/* Welcome Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Welcome to WCTM Gurgaon</Text>
        <Text style={styles.description}>
          World College of Technology and Management (WCTM) is approved by the All India Council for Technical 
          Education (AICTE), under the Ministry of HRD, Government of India, New Delhi, and is affiliated with MDU Rohtak.
        </Text>
        <Text style={styles.description}>
          Founded in 2007, WCTM is spread across 18 acres of lush green surroundings in the National Capital 
          Region (NCR). Established by Amma Chandravati Educational & Charitable Trust, the institution is dedicated 
          to fostering an intellectually stimulating environment by delivering high-quality education in technology and management.
        </Text>
      </View>

      {/* Vision & Mission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Vision & Mission</Text>
        {[
          { title: "Global Leadership", desc: "Developing young talent with cutting-edge technologies and their applications to contribute to the technical advancement of society at both national and international levels." },
          { title: "Multidisciplinary Excellence", desc: "Providing comprehensive knowledge in engineering and management, nurturing professionals capable of serving society effectively." },
          { title: "Vibrant Education System", desc: "Offering dynamic undergraduate and postgraduate programs with a world-class teaching environment, modern pedagogy, and advanced technical infrastructure." },
          { title: "Recognizing Excellence", desc: "Rewarding and encouraging top-performing students whose names appear in the University Merit List." },
          { title: "Innovation & Excellence", desc: "Promoted by ex-IITians, WCTM is committed to setting new benchmarks in research, development, and industry collaborations." }
        ].map((item, index) => (
          <View key={index} style={styles.missionItem}>
            <Text style={styles.missionBullet}>✅</Text>
            <View style={styles.missionTextContainer}>
              <Text style={styles.missionTitle}>{item.title} –</Text>
              <Text style={styles.missionDescription}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Holistic Student Development</Text>
  <Text style={styles.description}>
    At WCTM, we emphasize all-round development, providing students with numerous opportunities for co-curricular activities like:
  </Text>
  {[
    { title: "Personality Development", desc: "Training in communication skills, public speaking, and right body language." },
    { title: "Group Discussions & Leadership Training", desc: "Enhancing confidence and teamwork skills." },
    { title: "Sports & Extracurriculars", desc: "Encouraging active participation for a well-balanced lifestyle." },
    { title: "Inspirational Lectures", desc: "Guest sessions from distinguished dignitaries to instill self-governance and human values." }
  ].map((item, index) => (
    <View key={index} style={styles.missionItem}>
      <Text style={styles.missionBullet}>🎯</Text>
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionTitle}>{item.title} –</Text>
        <Text style={styles.missionDescription}>{item.desc}</Text>
      </View>
    </View>
  ))}
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Our Motto:-</Text>
  <View style={styles.quoteBox}>
    <Text style={styles.quoteText}>⚒️ "THINK SMART, WORK SMART."</Text>
    <Text style={styles.quoteText}>💡 "WHEN THE GOING GETS TOUGH, THE TOUGH GETS GOING."</Text>
    <Text style={styles.description}>
      At WCTM, we strive to create future-ready professionals who can excel in challenging business and economic environments.
    </Text>
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.facilityTitle}>FACILITIES</Text>
  <Text style={styles.sectionTitle}>Our Library</Text>
  <Image source={require("../../assets/images/wctm-library.jpg")} style={styles.libraryImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>WCTM Central Library</Text>
    <Text style={styles.description}>
      WCTM’s air-conditioned, multi-media library serves students, staff, and faculty by providing updated knowledge resources for research and learning.
    </Text>
    {[
      { icon: "📚", title: "Rich Collection", desc: "Over 14,000+ textbooks, reference books, national & international journals, and magazines." },
      { icon: "💾", title: "Digital Resources", desc: "CD-ROM databases, reports, encyclopedias, and research materials." },
      { icon: "📖", title: "Book Bank Facility", desc: "Available for first-year students." },
      { icon: "💡", title: "Learning Aids", desc: "Maps, CDs, and audio-visual resources for enhanced learning." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
    <Text style={styles.description}>
      The library is regularly updated with the latest academic literature, ensuring uninterrupted access to quality knowledge.
    </Text>
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>WCTM Computer Centre</Text>
  <Image source={require("../../assets/images/ios-lab.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>WCTM Computer Centre</Text>
    <Text style={styles.description}>
      WCTM’s state-of-the-art Computer Centre is equipped with i7 systems and 350+ computers, ensuring cutting-edge IT infrastructure for teaching, research, and administration.
    </Text>
    {[
      { icon: "🖥️", title: "Advanced Computing", desc: "Sun Servers, Core2Duo, AMD systems with 1100+ network nodes under Unix, Windows & Novell Netware." },
      { icon: "🌐", title: "High-Speed Internet", desc: "100 Mbps leased line for seamless connectivity." },
      { icon: "💻", title: "Software Suite", desc: "Includes MS Office, Windows OS, MATLAB, Oracle, TurboC++, Visual Studio, CAD/CAM tools, and more." },
      { icon: "🏢", title: "Dedicated Computing Hub", desc: "Centre of Computing & Networking (CCN), established in 2007, provides top-tier network & computing facilities." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Canteen & Mess at WCTM</Text>
  <Image source={require("../../assets/images/canteen.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>WCTM Canteen & Mess</Text>
    {[
      { icon: "☕", title: "Canteen", desc: "Café Coffee Day (CCD) offers a premium on-campus dining experience, serving world-class coffee and a variety of delicious, healthy meals at reasonable prices. Faculty regularly monitors food quality." },
      { icon: "🥗", title: "Mess", desc: "Spacious air-cooled dining area with a buffet system serving four meals a day. Maintained by experienced chefs and supervised by a Mess Committee to ensure hygiene and quality." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
    <Text style={styles.description}>
      A perfect place for students to relax, eat, and stay healthy!
    </Text>
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Transport Facilities at WCTM</Text>
  <Image source={require("../../assets/images/transport.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>Transport Facilities at WCTM</Text>
    {[
      { icon: "🚍", title: "Convenient & Affordable", desc: "WCTM provides a fleet of buses covering major locations in Delhi & Gurgaon at nominal charges for students and staff." },
      { icon: "🔹", title: "Safety First", desc: "Each bus has a teacher coordinator to ensure security & discipline." },
      { icon: "📞", title: "Transport Incharge", desc: "+91 98286 72444" }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Sports Facilities at WCTM</Text>
  <Image source={require("../../assets/images/sports.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>Sports Facilities at WCTM</Text>
    {[
      { icon: "🏆", title: "Annual Sports Week", desc: "Encouraging every student to participate, guided by a sports officer." },
      { icon: "🎱", title: "Indoor Games", desc: "Table Tennis, Chess, Carrom." },
      { icon: "⚽", title: "Outdoor Sports", desc: "Volleyball, Badminton (with floodlights), Cricket, Football, and a standard-size Basketball Court." },
      { icon: "📅", title: "Regular Tournaments", desc: "Organized under the guidance of trained professionals." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Medical Facilities at WCTM</Text>
  <Image source={require("../../assets/images/medical.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>Medical Facilities at WCTM</Text>
    {[
      { icon: "🩺", title: "24/7 Medical Support", desc: "Primary treatment available with a doctor on call." },
      { icon: "🩸", title: "Blood Donation Camp", desc: "Organized annually, encouraging students and faculty to donate and save lives." },
      { icon: "🚑", title: "First Aid", desc: "Available 24/7 for hostel students' safety and well-being." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Gym Facilities at WCTM</Text>
  <Image source={require("../../assets/images/gym.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>Gym Facilities at WCTM</Text>
    <View style={styles.missionItem}>
      <Text style={styles.missionBullet}>🏋️</Text>
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionTitle}>Modern Gym –</Text>
        <Text style={styles.missionDescription}>Equipped with the latest machines for students and staff fitness.</Text>
      </View>
    </View>
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Campus Facilities at WCTM</Text>
  <Image source={require("../../assets/images/campus11.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <Text style={styles.facilityHeading}>Campus Facilities at WCTM</Text>
    {[
      { icon: "🔒", title: "24/7 Security", desc: "Ensuring a safe and secure campus environment." },
      { icon: "⚡", title: "Power Backup", desc: "Uninterrupted electricity supply across the campus." },
      { icon: "💧", title: "RO Drinking Water", desc: "Clean and safe drinking water for all." },
      { icon: "❄️", title: "Air-Conditioned Spaces", desc: "Centrally cooled classrooms and labs for comfort." }
    ].map((item, index) => (
      <View key={index} style={styles.missionItem}>
        <Text style={styles.missionBullet}>{item.icon}</Text>
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionTitle}>{item.title} –</Text>
          <Text style={styles.missionDescription}>{item.desc}</Text>
        </View>
      </View>
    ))}
  </View>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Contact & Location</Text>
  <Image source={require("../../assets/images/map.jpg")} style={styles.facilityImage} />
  <View style={styles.facilityBox}>
    <View style={styles.missionItem}>
      <Text style={styles.missionBullet}>📍</Text>
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionDescription}>5km Ahead, Farukh Nagar (Kherakhurrampur), Gurgaon, Haryana 122506</Text>
      </View>
    </View>
    <View style={styles.missionItem}>
      <Text style={styles.missionBullet}>📞</Text>
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionDescription}>+91-8607788739, +91-8607788740</Text>
      </View>
    </View>
    <View style={styles.missionItem}>
      <Text style={styles.missionBullet}>📧</Text>
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionDescription}>admin@wctmgurgaon.com, chairman@wctmgurgaon.com</Text>
      </View>
    </View>
  </View>
</View>
  </ScrollView>
    


  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  banner: {
    alignItems: "center",
    marginVertical: 10,
  },
  bannerImage: {
    width: "95%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
  },
  section: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    lineHeight: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  missionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  missionBullet: {
    fontSize: 18,
    marginRight: 10,
    color: "#28a745",
  },
  missionTextContainer: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  missionDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  quoteBox: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
  },
  facilityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  facilityBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // elevation: 3,
  },
  facilityHeading: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  libraryImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
    marginVertical: 10,
  },
  facilityImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
    marginVertical: 10,
  },

});

export default aboutUs;
