import React, { useState } from "react";
import { Text, View, SafeAreaView, StatusBar, Platform, StyleSheet, FlatList, TouchableWithoutFeedback, useWindowDimensions } from "react-native";
import tw from "twrnc";
import Buttons from "./components/Buttons";
import { getColor } from "./utils/utils";


function CheckOs() {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={Platform.OS === "ios" ? "transparent" : "#485e68"}
        barStyle="light-content"
      />
      <Text style={tw`text-white text-center font-semibold pb-2 pt-${Platform.OS === "ios" ? "0" : "3"}`}>
        Calculator
      </Text>
    </SafeAreaView>
  );
}

export default function App() {
  const { height, width } = useWindowDimensions();

  const DATA = [
    "7",
    "8",
    "9",
    "C",
    "AC",
    "4",
    "5",
    "6",
    "+",
    "-",
    "1",
    "2",
    "3",
    "x",
    "/",
    "0",
    ".",
    "00",
    "=",
    "",
  ];
  const orientation = () => {
    return width > height;
  };

  const printChar =  (item: string) => {
    console.log(`button pressed :${item}` )
    
  };

  const render = ({ item }: { item: string }) => {
    return (
      <View style={[tw` mx-auto w-[20%]   `]}>
        <TouchableWithoutFeedback
          style={tw`flex-1 bg-green-500 w-[80%]`}
          onPress={() => printChar(item)}
        >
          <View>
            <Text
              style={tw`mx-auto text-lg ${
                orientation() ? "p-4 -mt-5.5" : "p-6 -mt-2"
              }  ${getColor(item)}`}
            >
              {item}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-[#607d8b]`}>
      <CheckOs />
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`h-1/2 w-full bg-[#37474f] p-2`}>
          <Text style={styles.end}>0</Text>
          <Text style={styles.end}>0</Text>
        </View>
        <View style={tw` w-full bg-[#607d8b] flex-1 py-5 flex-row px-3 `}>
          <FlatList
            style={tw`flex-1`}
            scrollEnabled={false}
            data={DATA}
            numColumns={5}
            renderItem={render}
          />
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
});