import AddLocationScreen from "./screens/AddLocationScreen";
import MainScreen from "./screens/MainScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TemperatureUnit from "./types/TemperatureUnit";
import TemperatureUnitContext from "./context/TemperatureUnitContext";
import { useState } from "react";

export default function App() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("F");

  return (
    <SafeAreaProvider>
      <TemperatureUnitContext.Provider value={temperatureUnit}>
        <MainScreen />
        {/* <AddLocationScreen /> */}
      </TemperatureUnitContext.Provider>
    </SafeAreaProvider>
  );
}
