import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TemperatureUnit from "../types/TemperatureUnit";

type UnitToggleProps = {
  value: TemperatureUnit;
};
export default function UnitToggle(props: UnitToggleProps) {
  const { value } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.option, value === "F" && styles.selectedOption]}>
        <Text style={[styles.text, value === "F" && styles.selectedText]}>
          °F
        </Text>
      </View>
      <View style={[styles.option, value === "C" && styles.selectedOption]}>
        <Text style={[styles.text, value === "C" && styles.selectedText]}>
          °C
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  option: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedOption: {
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  selectedText: {
    color: "black",
  },
});
