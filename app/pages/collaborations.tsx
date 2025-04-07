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
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const animations = useRef(
    imageData.map(() => ({
      opacity: new Animated.Value(0),
      translateY: new Animated.Value(30),
      scale: new Animated.Value(0.95),
    }))
  ).current;

  useEffect(() => {
    const anims = animations.map((anim, i) =>
      Animated.parallel([
        Animated.timing(anim.opacity, {
          toValue: 1,
          duration: 600,
          delay: i * 200,
          useNativeDriver: true,
        }),
        Animated.timing(anim.translateY, {
          toValue: 0,
          duration: 600,
          delay: i * 200,
          useNativeDriver: true,
        }),
        Animated.spring(anim.scale, {
          toValue: 1,
          friction: 6,
          delay: i * 200,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.stagger(150, anims).start();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => openModal(item.image)}>
            <Animated.View
              style={[
                styles.card,
                {
                  opacity: animations[index].opacity,
                  transform: [
                    { translateY: animations[index].translateY },
                    { scale: animations[index].scale },
                  ],
                },
              ]}
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.imageText}>{item.description}</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
      />

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
    backgroundColor: "#F5F5F5",
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
    width: "100%",
    height: 250,
    resizeMode: "cover",
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
