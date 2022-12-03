import LocationsContext, {
  LocationsContextObject,
} from "./context/LocationContext";
import TemperatureUnitContext, {
  TemperatureUnitContextObject,
} from "./context/TemperatureUnitContext";
import { useEffect, useState } from "react";

import AddLocationScreen from "./screens/AddLocationScreen";
import Location from "./types/Location";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TemperatureUnit from "./types/TemperatureUnit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getLocations } from "./api/locations";

export default function App() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("C");
  const [locations, setLocations] = useState<Location[]>([]);

  const temperatureUnitContextObj: TemperatureUnitContextObject = {
    value: temperatureUnit,
    setValue: setTemperatureUnit,
  };

  const locationsContextObj: LocationsContextObject = {
    value: locations,
    setValue: setLocations,
  };

  useEffect(() => {
    getLocations().then((locations) => setLocations(locations));
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TemperatureUnitContext.Provider value={temperatureUnitContextObj}>
          <LocationsContext.Provider value={locationsContextObj}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name={Routes.MAIN}
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={Routes.ADD_LOCATION}
                component={AddLocationScreen}
              />
            </Stack.Navigator>
          </LocationsContext.Provider>
        </TemperatureUnitContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
