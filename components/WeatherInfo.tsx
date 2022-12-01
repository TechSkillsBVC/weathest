import { StyleSheet, Text, View, ViewProps } from "react-native";

import Location from "../types/Location";
import WeatherIcon from "./WeatherIcon";
import WeatherType from "../types/WeatherType";

export type WeatherInfoProps = {
  location: Omit<Location, "latitude" | "longitude">;
  style?: ViewProps["style"];
};

export default function WeatherInfo(props: WeatherInfoProps) {
  const { location } = props;

  return (
    <View style={[styles.container, props.style]}>
      <WeatherIcon type={location.weatherType} size={150} style={styles.icon} />
      <Text style={styles.conditions}>
        {getConditionsText(location.weatherType)}
      </Text>
      <Text style={styles.temperature}>
        {formatTemperature(location.temperatureInCelsius)}
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

function formatTemperature(measuementInCelsius: number) {
  return `${Math.round(measuementInCelsius)}°C`;
}
