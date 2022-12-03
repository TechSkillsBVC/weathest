import location from "../types/location";
import { createContext } from "react";

export type LocationsContextObject = {
  value: location[];
  setValue?: (newValue: location[]) => void;
};
export const LocationsContext = createContext<LocationsContextObject>({
  value: [],
});

export default LocationsContext;
