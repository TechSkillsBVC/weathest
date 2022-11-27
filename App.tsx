import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Fontisto from "@expo/vector-icons/Fontisto";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.wrapper}
      >
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calgary, AB</Text>
          </TouchableOpacity>
          <View style={styles.weatherInfo}>
            <Fontisto name="day-cloudy" size={150} style={styles.icon} />
            <Text style={styles.conditionText}>Partly sunny</Text>
            <Text style={styles.temperatureText}>11°C</Text>
          </View>
          <TouchableOpacity style={styles.unitToggle}>
            <View style={styles.toggleOption}>
              <Text style={styles.toggleText}>°F</Text>
            </View>
            <View style={[styles.toggleOption, styles.selectedToggleOption]}>
              <Text style={[styles.toggleText, styles.selectedToggleText]}>
                °C
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Captured at</Text>
            <Text style={styles.footerText}>(51.0469212, -114.0559973)</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 17,
  },
  weatherInfo: {
    marginBottom: 160,
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  conditionText: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  temperatureText: {
    color: "white",
    fontSize: 30,
  },
  unitToggle: {
    flexDirection: "row",
  },
  toggleOption: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedToggleOption: {
    backgroundColor: "white",
  },
  toggleText: {
    color: "white",
    fontSize: 18,
  },
  selectedToggleText: {
    color: "black",
  },
  footer: {
    alignItems: "center",
  },
  footerTitle: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  footerText: {
    color: "white",
    fontSize: 12,
  },
});
