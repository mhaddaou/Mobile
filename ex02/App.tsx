import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  SafeAreaViewBase,
  SafeAreaViewComponent,
  StatusBar,
  Platform,
} from "react-native";
import type { StatusBarStyle } from "react-native";
import tw from "twrnc";
import React, { useState } from "react";

function CheckOs() {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Text style={tw`text-white text-center font-semibold pb-2`}>
          Calculator
        </Text>
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <StatusBar backgroundColor="#3f51b5" barStyle="light-content" />
        <Text style={tw`text-white text-center font-semibold pt-3 pb-2`}>
          Calculator
        </Text>
      </View>
    );
  }
}

export default function App() {
  const [textSwitch, setTextSwitch] = useState<boolean>(false);
  return (
    // <View style={tw`flex-1 bg-white`}>
    //   <StatusBar backgroundColor="#3f51b5" barStyle="light-content" />
    //   <SafeAreaView style={tw`flex-1 bg-[#3f51b5]`}>
    //     <View style={tw`bg-[#3f51b5]`}>
    //       <Text style={tw`text-center text-white pt-4 pb-2 font-semibold`}>Calculator</Text>
    //     </View>
    //     <View style={tw`flex-1 bg-red-500`}>

    

    //     </View>
    //   </SafeAreaView>
    // </View>
    <View style={tw`flex-1 bg-[#3f51b5]`}>
      <View>
        <CheckOs />
        {/* <Text style={tw`text-white text-center`}>Calculator</Text> */}
      </View>
      <View style={tw`flex-1 bg-white`}></View>
    </View>
  );
}

// exp://a6y4psg-anonymous-8081.exp.direct
