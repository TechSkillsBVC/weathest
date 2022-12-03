import WeatherType from "./WeatherType";

export default interface Location {
  id: number,
  name: string;
  temperatureInCelsius: number;
  weatherType: WeatherType;
  latitude: number;
  longitude: number;
}
