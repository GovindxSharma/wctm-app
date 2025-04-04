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

// Importing local images
const images = [
  require("../../assets/images/gallery/image10.jpg"),
  require("../../assets/images/gallery/image2.jpg"),
  require("../../assets/images/gallery/image3.jpg"),
  require("../../assets/images/gallery/image5.jpg"),
  require("../../assets/images/gallery/image4.jpg"),
  require("../../assets/images/gallery/image6.jpg"),
  require("../../assets/images/gallery/image7.jpg"),
  require("../../assets/images/gallery/image1.jpg"),
  require("../../assets/images/gallery/image9.jpg"),
  require("../../assets/images/gallery/image8.jpg"),
  require("../../assets/images/gallery/image11.jpg"),
  require("../../assets/images/gallery/image12.jpg"),
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const GalleryScreen = () => {
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
      toValue: 1.1,
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
      <Text style={styles.title}>📸 Our Gallery</Text>
      <Animated.FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => openModal(item)}
          >
            <Animated.View
              style={[styles.imageContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
            >
              <Image source={item} style={styles.image} />
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
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 15,
    color: "#333",
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    elevation: 5,
  },
  image: {
    width: screenWidth / numColumns - 30,
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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

export default GalleryScreen;
