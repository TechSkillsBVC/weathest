import TemperatureUnit from "../types/TemperatureUnit";
import { createContext } from "react";

export type TemperatureUnitContextObject = {
  value: TemperatureUnit;
  setValue?: (newValue: TemperatureUnit) => void;
};
export const TemperatureUnitContext =
  createContext<TemperatureUnitContextObject>({
    value: "C",
  });

export default TemperatureUnitContext;
