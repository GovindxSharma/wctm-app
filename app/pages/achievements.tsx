import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const achievements = [
  {
    title: '🏅 Ranks NO.1 in Gurugram',
    description: 'WCTM Ranks No. 1 in Gurugram for Excellence in Education.',
    icon: require('../../assets/images/alumni/img1.jpg'),
  },
  {
    title: '🏅 Ranks NO.1 in Gurugram & 62 Pan India',
    description: 'Ranks No. 1 in Gurugram & 62 Pan India for Excellence in Education.',
    icon: require('../../assets/images/alumni/img2.jpg'),
  },
  {
    title: 'Ranks 62 Pan India in 2023',
    description: ' Top Ranked: No.1 in Gurugram & 62nd Across India – 2023.',
    icon: require('../../assets/images/alumni/img3.jpg'),
  },
  {
    title: 'Times of India - Times BBA survey 2023',
    description: 'WCTM ranks No.1 in Gurugram for BBA – 2nd consecutive year (Rank 39 Pan India).',
    icon: require('../../assets/images/alumni/img4.jpg'),
  },
  {
    title: 'Pan India Excellence',
    description: 'WCTM ranks No.1 in Gurugram by Times of India – 62 Pan India, 59 in Private Engineering, 69 for Placements, 17 in North India.',
    icon: require('../../assets/images/alumni/img5.jpg'),
  },
  {
    title: 'Academic Excellence',
    description: 'High university rank holders and consistent academic results.',
    icon: require('../../assets/images/alumni/img6.jpg'),
  },
];

const AchievementSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (image) => {
    setActiveImage(image);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏆 Achievements</Text>

      <View style={styles.grid}>
        {achievements.map((item, index) => {
          const Animation = index % 2 === 0 ? SlideInLeft : SlideInRight;

          return (
            <Animated.View
              key={index}
              entering={Animation.delay(index * 300).duration(800)}
              style={styles.card}
            >
              <Pressable onPress={() => openImage(item.icon)}>
                <Image source={item.icon} style={styles.image} />
              </Pressable>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </Animated.View>
          );
        })}
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>✖</Text>
          </TouchableOpacity>
          {activeImage && (
            <Image source={activeImage} style={styles.fullImage} resizeMode="contain" />
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    // textAlign: 'center',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
    color: '#333',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 12,
    marginTop: 6,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  closeText: {
    fontSize: 30,
    color: '#fff',
  },
  fullImage: {
    width: width - 40,
    height: width - 40,
    borderRadius: 16,
  },
});

export default AchievementSection;
