import * as Animatable from "react-native-animatable";
import React, { useRef, useEffect, useState, memo } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

const images = [
  require("../assets/images/banner3.webp"),
  require("../assets/images/banner1.webp"),
  require("../assets/images/banner2.webp"),
  require("../assets/images/banner4.webp"),
];

const shortsVideos = [
  "https://www.youtube.com/embed/NHnEul13wCA?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/NURiOYEjwZc?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/YJhdGS_SadE?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/fOygS3_jnzA?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/jop1QK3WK00?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/FprY1H_oic8?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/Jq5X6NaERVo?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/5cXqnqaqxc4?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/MyNuRP13Tlo?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/6UsGsKJxPzs?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/DRz36lmdUv8?rel=0&modestbranding=1&controls=0&autoplay=1",
  "https://www.youtube.com/embed/PbpTL2GFHMU?rel=0&modestbranding=1&controls=0&autoplay=1",
];

const sections = [
  { id: "1", title: "About Us", image: require("../assets/images/about.png"), screen: "pages/about" },
  { id: "2", title: "Our Programs", image: require("../assets/images/program.png"), screen: "pages/program" },
  { id: "3", title: "Admission", image: require("../assets/images/admission.png"), screen: "pages/admission" },
  { id: "4", title: "Training & Placement", image: require("../assets/images/placement.png"), screen: "pages/placements" },
  { id: "5", title: "Our Collaborations", image: require("../assets/images/collaborations.png"), screen: "pages/collaborations" },
  { id: "6", title: "Alumni", image: require("../assets/images/alumni.png"), screen: "pages/alumni" },
  { id: "7", title: "Achievements", image: require("../assets/images/acheievement.png"), screen: "pages/achievements" },
  { id: "8", title: "Our Events", image: require("../assets/images/ourevents.png"), screen: "pages/ourevents" },
  { id: "9", title: "Gallery", image: require("../assets/images/gallery.png"), screen: "pages/gallery" },
  { id: "10", title: "Enquiry Box", image: require("../assets/images/enquiry.png"), screen: "pages/enquirybox" },
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VideoItem = memo(({ item }: { item: string }) => (
  <WebView source={{ uri: item }} style={{ width, height }} allowsFullscreenVideo />
));

export default function Guest() {
  const navigation = useNavigation<{ navigate: (screen: string) => void }>();
  const [showWebView, setShowWebView] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (showWebView) {
    return (
      <FlatList
        data={shortsVideos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <VideoItem item={item} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* Image Carousel */}
      <View style={styles.bannerContainer}>
        <AnimatedFlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item} style={styles.banner} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Animated Section Grid */}
      <View style={styles.gridWrapper}>
      <FlatList
  data={sections}
  numColumns={2}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.gridContainer}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  renderItem={({ item, index }) => {
    const animationType = index % 2 === 0 ? "fadeInRight" : "fadeInLeft";
    const delay = 300 + index * 150;
    return (
      <Animatable.View
        animation={animationType}
        delay={delay}
        duration={600}
        useNativeDriver
        style={{ flex: 1, margin: 5 }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }}
/>

      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("index")}>
          <Ionicons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowWebView(true)}>
          <Ionicons name="flash" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("No Announcement")}>
          <Ionicons name="megaphone" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  imageWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  banner: {
    width: width - 20,
    height: 170,
    resizeMode: "stretch",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  gridWrapper: {
    flex: 1,
  },
  gridContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});
