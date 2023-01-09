import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SelectorModal,
  SelectorModalOption,
} from "../components/SelectorModal";
import { useContext, useEffect, useState } from "react";

import Button from "../components/Button";
import Fontisto from "@expo/vector-icons/Fontisto";
import Location from "../types/Location";
import LocationsContext from "../context/LocationContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Routes from "../routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TemperatureUnitContext from "../context/TemperatureUnitContext";
import UnitToggle from "../components/UnitToggle";
import WeatherInfo from "../components/WeatherInfo";

/**
 * A screen displaying the weather information for the location currently
 * loaded.
 */
export default function MainScreen(props: NativeStackScreenProps<any>) {
  const { navigation } = props;

  const temperatureUnit = useContext(TemperatureUnitContext);
  const locations = useContext(LocationsContext);

  const [selectedLocation, setSelectedLocation] = useState<Location>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!selectedLocation) {
      setSelectedLocation(locations.value[0]);
    }
  }, [locations]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const addLocation = () => navigation.navigate(Routes.ADD_LOCATION);

  return (
    <>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.wrapper}
      >
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          {!selectedLocation ? (
            <ActivityIndicator color="white" size="large" />
          ) : (
            <>
              <Button
                label={selectedLocation.name}
                palette="light"
                style={styles.button}
                onPress={openModal}
              />
              <WeatherInfo
                location={selectedLocation}
                style={styles.weatherInfo}
              />
              <UnitToggle
                value={temperatureUnit.value}
                onChange={temperatureUnit.setValue}
              />
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Captured at</Text>
                <Text style={styles.footerText}>
                  {`(${selectedLocation.latitude}, ${selectedLocation.longitude})`}
                </Text>
              </View>
            </>
          )}
        </SafeAreaView>
      </ImageBackground>
      <SelectorModal
        header="Locations"
        visible={showModal}
        onClose={closeModal}
      >
        <SelectorModalOption onPress={addLocation}>
          <Text>Add new</Text>
          <Fontisto name="plus-a" size={15} />
        </SelectorModalOption>
        {locations.value.map((location) => (
          <SelectorModalOption
            key={location.id}
            onPress={() => setSelectedLocation(location)}
          >
            <Text>{location.name}</Text>
          </SelectorModalOption>
        ))}
      </SelectorModal>
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
