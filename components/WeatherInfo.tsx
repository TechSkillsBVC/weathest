import { StyleSheet, Text, View, ViewProps } from "react-native";

import Location from "../types/Location";
import TemperatureUnit from "../types/TemperatureUnit";
import TemperatureUnitContext from "../context/TemperatureUnitContext";
import WeatherIcon from "./WeatherIcon";
import WeatherType from "../types/WeatherType";
import { toFahrenheit } from "../utils/temperature";
import { useContext } from "react";

export type WeatherInfoProps = {
  location: Omit<Location, "latitude" | "longitude">;
  style?: ViewProps["style"];
};

export default function WeatherInfo(props: WeatherInfoProps) {
  const { location } = props;
  const temperatureUnit = useContext(TemperatureUnitContext);

  return (
    <View style={[styles.container, props.style]}>
      <WeatherIcon type={location.weatherType} size={150} style={styles.icon} />
      <Text style={styles.conditions}>
        {getConditionsText(location.weatherType)}
      </Text>
      <Text style={styles.temperature}>
        {formatTemperature(
          location.temperatureInCelsius,
          temperatureUnit.value
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  conditions: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  temperature: {
    color: "white",
    fontSize: 30,
  },
});

function getConditionsText(condition: WeatherType) {
  switch (condition) {
    case WeatherType.SUNNY:
      return "Sunny";
    case WeatherType.PARTLY_SUNNY:
      return "Partly sunny";
    case WeatherType.CLOUDY:
      return "Cloudy";
    case WeatherType.RAINY:
      return "Rainy";
    case WeatherType.THUNDERSTORM:
      return "Thunderstorm";
    case WeatherType.SNOW:
      return "Snow";
    default:
      throw Error(`Unexpected argument "${condition}"`);
  }
}

function formatTemperature(
  measurementInCelsius: number,
  temperatureUnit: TemperatureUnit
) {
  switch (temperatureUnit) {
    case "C":
      return `${Math.round(measurementInCelsius)}°${temperatureUnit}`;
    case "F":
      return `${Math.round(
        toFahrenheit(measurementInCelsius)
      )}°${temperatureUnit}`;
    default:
      throw Error(`Unexpected unit "${temperatureUnit}"`);
  }
}
