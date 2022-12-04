import Location from "../types/Location";
import { BASE_URL } from "./constants";

export function getLocations() {
  return fetch(BASE_URL + "locations/").then<Location[]>((response) =>
    response.json()
  );
}

export function postLocation(location: Omit<Location, "id">) {
  return fetch(BASE_URL + "locations/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  }).then<Location>((response) => response.json());
}
