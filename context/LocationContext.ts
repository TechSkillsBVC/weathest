import location from "../types/location";
import { createContext } from "react";

export type LocationsContextObject = {
  value: location[];
  setValue?: (newValue: location[]) => void;
};

/** Holds and changes the location object currently loaded in the app. */
export const LocationsContext = createContext<LocationsContextObject>({
  value: [],
});

export default LocationsContext;
