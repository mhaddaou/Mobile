import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Button, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomBar from "./components/BottomTabs";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

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
      <StatusBar barStyle='dark-content'/>
      <NavigationContainer  independent={true}>
        <BottomBar />
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
}


// exp://luma_e0-anonymous-8081.exp.direct