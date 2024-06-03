//@ts-ignore
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import HomeScreen from "./src/components/home-screen";
import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <ImageBackground
        source={require("./assets/background.jpeg")}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <HomeScreen />
      </ImageBackground>
    </SafeAreaProvider>
  );
}
