import TemperatureUnitContext, {
  TemperatureUnitContextObject,
} from "./context/TemperatureUnitContext";

import AddLocationScreen from "./screens/AddLocationScreen";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TemperatureUnit from "./types/TemperatureUnit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

export default function App() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("C");

  const temperatureUnitContextObj: TemperatureUnitContextObject = {
    value: temperatureUnit,
    setValue: setTemperatureUnit,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TemperatureUnitContext.Provider value={temperatureUnitContextObj}>
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
        </TemperatureUnitContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
