import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

type Alumni = {
  name: string;
  batch: string;
  image: any; // You can make this more specific if needed
  testimonial: string;
};

const alumniList: Alumni[] = [
  {
    name: "Uma Seth",
    batch: "BBA 2015–18",
    image: require("../../assets/images/alumni/uma.jpg"),
    testimonial: `College is one of the most memorable phases of life—filled with friends, professors, and personal growth. Coming from a small town with no background in business studies, WCTM helped shape my confidence and future.

I was full of questions in class, and I’m grateful to my professors—Dr. Himani Avasthi, Deepika Kalra, Anu Sharma, Kamal Batra, Neha Chauhan, and Dr. Chanda—for their patience, energy, and wisdom. They taught us far beyond books—about life, values, and perseverance.

From Himani Ma’am’s Teacher’s Day poems, Deepika Ma’am’s life-changing motivation, to Anu Ma’am’s calm and sweet way of teaching—each one left a mark. Kamal Sir’s energy and songs, and Chanda Sir’s peaceful lectures—we cherished it all.

I also carry beautiful memories with classmates like Abhishek, Sooraj, Chirag, Akshita, and many more. From lectures to lunch breaks, canteen chats to department events—those moments are priceless.

Thank you WCTM and the Management Department for the best three years of my life.`,
  },
  {
    name: "Santosh Tiwari",
    batch: "B.Tech 2012–16",
    image: require("../../assets/images/alumni/santosh-tiwari.jpg"),
    testimonial: `WCTM is a self explanatory brand which defines the turned stone, ready to conquer the world. At WCTM I have lived the best days of my life. The experience here turned me to a more curious and achieving person. The support of the faculty members not only helped me to score good marks, but also helped me to overcome the flaws for being a good human being. With the grace of God and blessings of WCTM family, I was able to crack Campus Placements and now working with Mnc's .all was possible just because of WCTM.
  Will always remain your student.
  Thank you WCTM once again for being my best memory.`,
  },
  {
    name: "Astha Sharma",
    batch: "B.Tech 2010–14",
    image: require("../../assets/images/alumni/aastha-sharma.png"),
    testimonial: `I would always be grateful to wctm for giving me multi dimensional learning by providing the apt mix of academics , industry exposure , attitude and leadership.
I would also like to thank to the professors for getting me the first campus placement at Wipro as it's always special for a student getting placed for the first time.
The professors are all dedicated experts and helpful in their respective subjects.
I will always cherish the feeling of studying at an institute which focused on career enhancements along with overall skill development.`,
  },
  {
    name: "Aman Agarwal",
    batch: "B.Tech 2010–14",
    image: require("../../assets/images/alumni/Aman Aggarwal.png"),
    testimonial: `I believe that the achievement of an organization is a result of combined efforts of each individual. This is something that I learnt at WCTM. The place that helped me build not only my career but an ambition that was fulfilled by the support of everyone.
WCTM believed in its students and thats what makes this college stand out among others.`,
  },
  {
    name: "Manish Arora",
    batch: "B.Tech 2011–15",
    image: require("../../assets/images/alumni/manish-arora.png"),
    testimonial: `WCTM has played a very crucial role in shaping my career. Faculty imparted great values in me which made me ready for the outside real world. Through out the course, the faculty were very supportive and inspiring. It's vision of shaping lives through quality education makes it stand tall apart from the other institutions. I must say WCTM is one of the finest college in its cadre and I feel proud to be graduated from this college.`,
  },
  {
    name: "Jeevan Gurpratap Singh",
    batch: "B.Tech 2007 - 11",
    image: require("../../assets/images/alumni/Jeevan-Gurpratap.jpg"),
    testimonial: `WCTM has played a very crucial role in shaping my career. Faculty imparted great values in me which made me ready for the outside real world. Through out the course, the faculty were very supportive and inspiring. It's vision of shaping lives through quality education makes it stand tall apart from the other institutions. I must say WCTM is one of the finest college in its cadre and I feel proud to be graduated from this college.`,
  },
  {
    name: "Pooja Monga",
    batch: "B.Tech 2010 - 14",
    image: require("../../assets/images/alumni/Pooja-Monga.jpg"),
    testimonial: `I would like to thank WCTM for being so supportive and helping me throughout to develop my personality thereby making me what I am today. The faculty and college management have been very helpful and friendly. I wish this institution goes on doing great stuff and help students achieve their dreams.`,
  },
  
  // Add more alumni...
];

const AlumniScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {alumniList.map((alumni, index) => (
        <Animated.View
          key={index}
          entering={FadeInUp.delay(index * 150)}
          style={styles.card}
        >
          <View style={styles.header}>
            <Image
              source={alumni.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.name}>{alumni.name}</Text>
              <Text style={styles.batch}>{alumni.batch}</Text>
            </View>
          </View>
          <Text style={styles.testimonial}>{alumni.testimonial}</Text>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 40, // smaller image
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a202c",
  },
  batch: {
    fontSize: 12,
    color: "#718096",
  },
  testimonial: {
    fontSize: 14,
    color: "#4a5568",
    lineHeight: 20,
  },
});

export default AlumniScreen;
