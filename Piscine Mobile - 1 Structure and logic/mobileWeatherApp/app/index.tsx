import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Button, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./components/BottomTabs";
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Search from "./components/Search";

// import BottomBar from "./components/BottomTabs";
export default function Page() {
  const translateX = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() =>({
    transform: [{translateY: withSpring(translateX.value + 2)}]
  }))
  const handlePress = () =>{
    translateX.value = withSpring(translateX.value + 50);
  }
  return (
    <SafeAreaProvider className="flex-1 w-screen h-screen">
      <NavigationContainer   independent={true}>
      <StatusBar backgroundColor="#5c5d71" style="light"/>
        <Search/>
        <BottomBar />
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
}


// exp://jjqh4ny-anonymous-8081.exp.direct