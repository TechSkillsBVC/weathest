import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TemperatureUnit from "../types/TemperatureUnit";

type UnitToggleProps = {
  /** The unit of measure to be displayed as selected. */
  value: TemperatureUnit;
  /** Callback that is called when the selected unit of measure changes. */
  onChange?: (newValue: TemperatureUnit) => void;
};

/**
 * A component for toggling between C and F as units of measure.
 * @param props 
 * @returns 
 */
export default function UnitToggle(props: UnitToggleProps) {
  const { value, onChange } = props;

  const onPress = () => {
    const newValue = value === "C" ? "F" : "C";
    onChange?.(newValue);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    overflow: "hidden",
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
