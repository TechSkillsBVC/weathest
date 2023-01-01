import * as ExpoLocation from "expo-location";

import {
  LocationObject,
  LocationObjectCoords,
  PermissionResponse,
} from "expo-location";
import { render, screen, waitFor } from "@testing-library/react-native";

import AddLocationScreen from "./AddLocationScreen";

jest.mock("@react-navigation/elements", () => ({
  useHeaderHeight: jest.fn().mockImplementation(() => 50),
}));

describe(AddLocationScreen.name, () => {
  const mockProps = {} as any;

  describe("pre-filling of coordinates", () => {
    const mockCoords = {
      latitude: 50.8995271,
      longitude: -114.114359,
    } as LocationObjectCoords;

    beforeEach(async () => {
      jest
        .spyOn(ExpoLocation, "requestForegroundPermissionsAsync")
        .mockResolvedValue({ granted: true } as PermissionResponse);

      jest
        .spyOn(ExpoLocation, "getCurrentPositionAsync")
        .mockResolvedValue({ coords: mockCoords } as LocationObject);
    });

    test("latitude field is populated", async () => {
      render(<AddLocationScreen {...mockProps} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Latitude")).toHaveProp(
          "value",
          String(mockCoords.latitude)
        );
      });
    });

    test("longitude field is populated", async () => {
      render(<AddLocationScreen {...mockProps} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Longitude")).toHaveProp(
          "value",
          String(mockCoords.longitude)
        );
      });
    });
  });
});
