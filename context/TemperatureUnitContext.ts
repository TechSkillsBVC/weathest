import TemperatureUnit from "../types/TemperatureUnit";
import { createContext } from "react";

export type TemperatureUnitContextObject = {
  value: TemperatureUnit;
  setValue?: (newValue: TemperatureUnit) => void;
};

/**
 * Holds and changes the temperature unit of measurement currently being used
 * throughout the app.
 */
export const TemperatureUnitContext =
  createContext<TemperatureUnitContextObject>({
    value: "C",
  });

export default TemperatureUnitContext;
