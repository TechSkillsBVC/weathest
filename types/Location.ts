import WeatherType from "./WeatherType";

/** Represents location data. */
export default interface Location {
  /** Unique ID identifying this data record. */
  id: number,
  /** Name of the location (e.g. Calgary, AB). */
  name: string;
  /** Current temperature at the location, in C. */
  temperatureInCelsius: number;
  /** Type of weather currently installed at location. */
  weatherType: WeatherType;
  /**
   * Latitude where weather reading was done in decimal degrees (e.g.
   * 51.0469212).
   */
  latitude: number;
  /**
   * Longitude where weather reading was done in decimal degrees (e.g.
   * -114.0559973).
   */
  longitude: number;
}
