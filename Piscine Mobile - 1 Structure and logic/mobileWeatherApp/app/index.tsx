import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./components/BottomTabs";
export default function Page() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer independent={true}>
        <BottomBar/>

      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}


// exp://wmnd7p4-anonymous-8081.exp.direct