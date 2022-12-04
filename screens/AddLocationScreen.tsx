import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";

import Button from "../components/Button";
import Location from "../types/location";
import LocationsContext from "../context/LocationContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NumberInput from "../components/NumberInput";
import { StatusBar } from "expo-status-bar";
import TemperatureUnitContext from "../context/TemperatureUnitContext";
import WeatherIcon from "../components/WeatherIcon";
import WeatherType from "../types/WeatherType";
import { postLocation } from "../api/locations";
import { useHeaderHeight } from "@react-navigation/elements";
import { toCelsius } from "../utils/temperature";

type FormValue = {
  name: string | null;
  temperatureInCelsius: number | null;
  weatherType: WeatherType | null;
  latitude: number | null;
  longitude: number | null;
};

export default function AddLocationScreen(props: NativeStackScreenProps<any>) {
  const { navigation } = props;
  const locationsContext = useContext(LocationsContext);
  const temperatureUnit = useContext(TemperatureUnitContext);
  const headerHeight = useHeaderHeight();

  const [formValue, setFormValue] = useState<FormValue>({
    name: null,
    temperatureInCelsius: null,
    weatherType: null,
    latitude: null,
    longitude: null,
  });

  const setPartialFormValue = (partialObj: Partial<FormValue>) => {
    const newValue = { ...formValue, ...partialObj };
    setFormValue(newValue);
  };

  const submit = () => {
    const hasEmptyValue = Object.values(formValue).some((val) => val == null);
    if (hasEmptyValue) {
      Alert.alert("Please fill in all fields.");
    } else {
      const safePayload = formValue as Omit<Location, "id">;
      postLocation(safePayload).then((response) => {
        locationsContext.setValue?.([...locationsContext.value, response]);
        navigation.pop();
      });
    }
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10 + headerHeight}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            <View>
              <Text style={styles.label}>Location name</Text>
              <TextInput
                style={[styles.inputBox, styles.input]}
                onChangeText={(name) => setPartialFormValue({ name })}
              />
              <Text style={styles.label}>Condition</Text>
              <View style={[styles.inputBox, styles.conditionInput]}>
                <ScrollView horizontal>
                  <View style={styles.conditionIcons}>
                    {Object.values(WeatherType).map((type) => (
                      <TouchableOpacity
                        key={type}
                        onPress={() =>
                          setPartialFormValue({ weatherType: type })
                        }
                        style={[
                          styles.conditionIcon,
                          formValue.weatherType === type
                            ? styles.conditionIconSelected
                            : null,
                        ]}
                      >
                        <WeatherIcon type={type} size={25} />
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <Text style={styles.label}>
                Temperature (°{temperatureUnit.value})
              </Text>
              <NumberInput
                style={[styles.inputBox, styles.input]}
                onChangeValue={(val) => {
                  if (val === null) {
                    setPartialFormValue({ temperatureInCelsius: null });
                  } else {
                    const temperatureInCelsius =
                      temperatureUnit.value === "C" ? val : toCelsius(val);
                    setPartialFormValue({ temperatureInCelsius });
                  }
                }}
              />
              <Text style={styles.label}>Latitude</Text>
              <NumberInput
                style={[styles.inputBox, styles.input]}
                onChangeValue={(val) => setPartialFormValue({ latitude: val })}
              />
              <Text style={styles.label}>Longitude</Text>
              <NumberInput
                style={[styles.inputBox, styles.input]}
                onChangeValue={(val) => setPartialFormValue({ longitude: val })}
              />
            </View>
            <Button
              label="Verify & Submit"
              palette="dark"
              style={styles.button}
              onPress={submit}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: "#eee",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  label: {
    color: "black",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputBox: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "stretch",
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  conditionInput: {
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  conditionIcons: {
    flexDirection: "row",
  },
  conditionIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
  },
  conditionIconSelected: {
    backgroundColor: "#eee",
    borderRadius: 28,
  },
  button: {
    marginTop: 30,
  },
});
