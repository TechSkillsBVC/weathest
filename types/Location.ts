import WeatherType from "./WeatherType";

export default interface Location {
  name: string;
  temperatureInCelsius: number;
  weatherType: WeatherType;
  latitude: number;
  longitude: number;
}
