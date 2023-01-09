import Location from "../types/Location";
import { BASE_URL } from "./constants";

/** Retrieves location objects from server. */
export function getLocations() {
  return fetch(BASE_URL + "locations/").then<Location[]>((response) =>
    response.json()
  );
}

/** Creates a new location object in the server. */
export function postLocation(
  location: Omit<Location, "id">,
  fileUri: string
) {
  return fetch(BASE_URL + "locations/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...location, fileUri }),
  }).then<Location>((response) => response.json());
}
