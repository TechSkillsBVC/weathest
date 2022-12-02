import { useEffect, useState } from "react";

import AddLocationScreen from "./screens/AddLocationScreen";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TemperatureUnit from "./types/TemperatureUnit";
import TemperatureUnitContext from "./context/TemperatureUnitContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./routes";

export default function App() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("C");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTemperatureUnit("F");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TemperatureUnitContext.Provider value={temperatureUnit}>
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
