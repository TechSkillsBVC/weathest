import AddLocationScreen from "./screens/AddLocationScreen";
import MainScreen from "./screens/MainScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainScreen />
      {/* <AddLocationScreen /> */}
    </SafeAreaProvider>
  );
}
