import TemperatureUnit from "../types/TemperatureUnit";
import { createContext } from "react";

export const TemperatureUnitContext = createContext<TemperatureUnit>("C");

export default TemperatureUnitContext;
