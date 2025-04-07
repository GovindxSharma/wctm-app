import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
  Pressable,
} from "react-native";

const events = [
  require("../../assets/images/events/djsuketu1banner.jpg"),
  require("../../assets/images/events/djsuketubanner.jpg"),
  require("../../assets/images/events/sonunigambanner.jpg"),
  require("../../assets/images/events/sonunigambanner1.jpg"),
  require("../../assets/images/events/sonunigampic.jpg"),
];

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 24;

const OurEvents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scale = useRef(new Animated.Value(1)).current;

  // Create animation refs for each item
  const animatedValues = useRef(events.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animatedValues.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 800,
        delay: index * 200,
        useNativeDriver: true,
      })
    );
    Animated.stagger(100, animations).start();
  }, []);

  const handleImagePress = (img: any) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const translateX = animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [index % 2 === 0 ? -60 : 60, 0],
    });

    return (
      <Pressable
        onPress={() => handleImagePress(item)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={[
            styles.card,
            {
              transform: [{ translateX }, { scale }],
              opacity: animatedValues[index],
            },
          ]}
        >
          <Image source={item} style={styles.image} />
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Our Events</Text>

      <FlatList
        data={events}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Full Screen Image Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <Image source={selectedImage} style={styles.fullImage} />
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
        </View>
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
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
    letterSpacing: 1,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  card: {
    width: cardWidth,
    margin: 6,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#00000080",
    padding: 10,
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontSize: 22,
  },
});

export default OurEvents;
