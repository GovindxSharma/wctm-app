import React, { useRef, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";

const events = [
  // require("../../assets/images/events/collab1.jpg"),
  // require("../../assets/images/events/collab2.jpg"),
  // require("../../assets/images/events/collab3.jpg"),
  require("../../assets/images/events/djsuketu1banner.jpg"),
  require("../../assets/images/events/djsuketubanner.jpg"),
  require("../../assets/images/events/sonunigambanner.jpg"),
  require("../../assets/images/events/sonunigambanner1.jpg"),
  require("../../assets/images/events/sonunigampic.jpg"),
];

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;

const OurEvents = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.08,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Our Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.imageContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
              <Image source={item} style={styles.image} />
            </Animated.View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1C1C1C",
    elevation: 5,
  },
  image: {
    width: screenWidth / numColumns - 30,
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
  },
});

export default OurEvents;
