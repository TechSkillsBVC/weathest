import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Fontisto from "@expo/vector-icons/Fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

export default function App() {
  return (
    <>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.wrapper}
      >
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <Button label="Calgary, AB" palette="light" style={styles.button} />
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
      <Modal animationType="fade" transparent={true} visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalOptions}>
            <Text style={styles.modalOptionsHeader}>Locations</Text>
            <View style={styles.modalSep} />
            <TouchableOpacity style={styles.modalOption}>
              <Text>Add new</Text>
              <Fontisto name="plus-a" size={15} />
            </TouchableOpacity>
            <View style={styles.modalSep} />
            <TouchableOpacity style={styles.modalOption}>
              <Text>Calgary, AB</Text>
            </TouchableOpacity>
            <View style={styles.modalSep} />
            <TouchableOpacity
              style={[styles.modalOption, styles.modalCloseOption]}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
  modal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 70,
    backgroundColor: "#000000aa",
  },
  modalOptions: {
    backgroundColor: "white",
    borderRadius: 13,
    maxWidth: 250,
    flexGrow: 1,
  },
  modalOptionsHeader: {
    color: "#999",
    textAlign: "center",
    marginTop: 9,
    marginBottom: 8,
    fontSize: 11,
  },
  modalSep: {
    height: 1,
    backgroundColor: "#ddd",
  },
  modalOption: {
    height: 47,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalCloseOption: {
    justifyContent: "center",
    height: 52,
  },
  modalCloseText: {
    color: "crimson",
    fontWeight: "bold",
  },
});
