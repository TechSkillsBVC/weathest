import Location from "../types/Location";
import { BASE_URL } from "./constants";

export function getLocations() {
  return fetch(BASE_URL + "locations/").then<Location[]>((response) =>
    response.json()
  );
}
