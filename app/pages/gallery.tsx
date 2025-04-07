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
  const [animations] = useState(
    images.map(() => new Animated.ValueXY({ x: 0, y: 0 }))
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const animationConfigs = animations.map((anim, index) => {
      // Animate in from different directions
      const direction = index % 4;
      let xFrom = 0;
      let yFrom = 0;

      switch (direction) {
        case 0:
          xFrom = -300; // From left
          break;
        case 1:
          xFrom = 300; // From right
          break;
        case 2:
          yFrom = -300; // From top
          break;
        case 3:
          yFrom = 300; // From bottom
          break;
      }

      anim.setValue({ x: xFrom, y: yFrom });

      return Animated.spring(anim, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        friction: 8,
        delay: index * 100,
      });
    });

    Animated.stagger(80, animationConfigs).start();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => openModal(item)}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: animations[index].getTranslateTransform(),
          },
        ]}
      >
        <Image source={item} style={styles.image} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📸 Our Gallery</Text>

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <Image source={selectedImage} style={styles.zoomedImage} />
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
