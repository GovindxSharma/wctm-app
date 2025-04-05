import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

// Importing local images and descriptions
const imageData = [
  {
    image: require("../../assets/images/events/collab2.jpg"),
    description: "✨ A vibrant collaboration event filled with creativity and innovation!",
  },
  {
    image: require("../../assets/images/events/collab1.jpg"),
    description: "🎭 Behind the scenes: Setting up an unforgettable experience!",
  },
  {
    image: require("../../assets/images/events/collab3.jpg"),
    description: "🌟 A magical evening filled with joy and celebration.",
  },
];

const screenWidth = Dimensions.get("window").width;

const Collaborations = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.03,
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

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={imageData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => openModal(item.image)}
          >
            <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.imageText}>{item.description}</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal for Zoomed Image */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <Animated.Image source={selectedImage} style={styles.zoomedImage} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Soft grey background
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%", // Full width of the card
    height: 250,
    resizeMode: "cover", // Ensures it fills the container nicely
  },
  textContainer: {
    padding: 15,
    alignItems: "center",
  },
  imageText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
    fontStyle: "italic",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  zoomedImage: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    resizeMode: "contain",
    borderRadius: 12,
  },
});

export default Collaborations;
