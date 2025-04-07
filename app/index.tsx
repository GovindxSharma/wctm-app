// app/index.tsx
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="fadeInDown"
        duration={1000}
        source={require("../assets/images/Clogo.png")}
        style={styles.logo}
      />

      <Animatable.Text animation="fadeIn" delay={800} style={styles.title}>
        World College of Technology and Management
      </Animatable.Text>

      <Animatable.Text animation="fadeIn" delay={1000} style={styles.subtitle}>
        (Approved by AICTE, Ministry of HRD, Govt. of India, and affiliated to MDU, Rohtak)
      </Animatable.Text>

      <View style={styles.buttonContainer}>
        <Animatable.View animation="fadeInRight" delay={1200}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
            <FontAwesome name="user" size={22} color="#333" />
            <Text style={styles.buttonText}>Student Login/Register</Text>
            <FontAwesome name="chevron-right" size={18} color="#888" />
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInLeft" delay={1400}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/FacultyLogin")}>
            <FontAwesome name="user-circle" size={22} color="#333" />
            <Text style={styles.buttonText}>Faculty Login/Register</Text>
            <FontAwesome name="chevron-right" size={18} color="#888" />
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInRight" delay={1600}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/guest")}>
            <FontAwesome name="users" size={22} color="#333" />
            <Text style={styles.buttonText}>Continue as Guest</Text>
            <FontAwesome name="chevron-right" size={18} color="#888" />
          </TouchableOpacity>
        </Animatable.View>
      </View>

      <Animatable.Image 
        animation="fadeInUp"
        delay={1800}
        duration={1000}
        source={require("../assets/images/rank.png")}
        style={styles.banner}
      />

      <Animatable.Text animation="fadeIn" delay={2500} style={styles.footerText}>
        By continuing, you agree to our <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Animatable.Text>

      <Animatable.Text animation="fadeIn" delay={2700} style={styles.copyright}>
        © 2024 World College. All rights reserved.
      </Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    backgroundColor: "#f8f9fa", 
    paddingVertical: 50 
  },
  logo: { 
    width: 140, 
    height: 140, 
    resizeMode: "contain" 
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: "#333", 
    marginTop: 10 
  },
  subtitle: { 
    fontSize: 14, 
    textAlign: "center", 
    color: "#666", 
    marginBottom: 35, 
    paddingHorizontal: 15 
  },
  buttonContainer: { 
    width: "100%", 
    alignItems: "center" 
  },
  button: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    width: "90%",
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 12, 
    marginVertical: 10, 
    elevation: 3,
  },
  buttonText: { 
    flex: 1, 
    fontSize: 16, 
    fontWeight: "500", 
    color: "#333", 
    textAlign: "center" 
  },
  banner: { 
    width: "90%", 
    height: 160, 
    resizeMode: "contain", 
    marginBottom: 30 
  },
  footerText: { 
    fontSize: 12, 
    color: "#666", 
    textAlign: "center", 
    paddingHorizontal: 15 
  },
  link: { 
    color: "#007bff", 
    fontWeight: "bold" 
  },
  copyright: { 
    fontSize: 12, 
    color: "#999",
    marginTop: 5 
  },
});
