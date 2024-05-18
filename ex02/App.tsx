import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  SafeAreaViewBase,
  SafeAreaViewComponent,
  StatusBar,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
} from "react-native";
import type { StatusBarStyle } from "react-native";
import tw from "twrnc";
import React, { useState } from "react";
import Buttons from "./components/Buttons";

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
  let firstLine = ["7", "8", "9", "C", "AC"];
  let secondLine = ["4", "5", "6", "+", "-"];
  let thirdLine = ["1", "2", "3", "x", "/"];
  let lastLine = ["0", ".", "00", "=", ""];

  const Data = firstLine.concat(secondLine).concat(thirdLine).concat(lastLine);

  const all = firstLine.concat(secondLine).concat(thirdLine).concat(lastLine);
  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={tw``}>
      <Text style={tw`flex-1 text-center`}>{title}</Text>
    </View>
  );
  return (
    <View style={tw`flex-1 bg-[#3f51b5]`}>
      <View>
        <CheckOs />
      </View>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`h-1/2 w-full bg-[#37474f] p-2`}>
          <Text style={styles.end}> 0</Text>
          <Text style={styles.end}> 0</Text>
        </View>
        <View style={tw`h-1/2 w-full bg-[#607d8b]  flex-1 py-5  flex-col px-3`}>
          <View style={tw`h-[25%] w-full  flex flex-row`}>
            <Buttons items={firstLine} />
          </View>
          <View style={tw`h-[25%] w-full `}>
            <Buttons items={secondLine} />
          </View>
          <View style={tw`h-[25%] w-full `}>
            <Buttons items={thirdLine} />
          </View>
          <View style={tw`h-[25%] w-full `}>
            <Buttons items={lastLine} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  end: {
    textAlign: "right",
    color: "white",
    fontSize: 22,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});

// exp://pnugkfe-anonymous-8081.exp.direct
