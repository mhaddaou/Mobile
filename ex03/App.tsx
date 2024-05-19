import React, { useState } from "react";
import { Text, View, SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";
import tw from "twrnc";
import Buttons from "./components/Buttons";
import { checkInputAndReturnResult } from "./utils/check-input-and-return-result";

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
  const firstLine = ["7", "8", "9", "C", "AC"];
  const secondLine = ["4", "5", "6", "+", "-"];
  const thirdLine = ["1", "2", "3", "x", "/"];
  const lastLine = ["0", ".", "00", "=", ""];
  const [oldinput , setInput] = useState('0');
  const [oldresult , setResult] = useState('0');

  const getInputFromChild = (_input : string) =>{
    const {input, result } = checkInputAndReturnResult({oldInput : oldinput, input : _input, result : oldresult})
    setInput(input);
    setResult(result);
    
  }

  return (
    <View style={tw`flex-1 bg-[#607d8b]`}>
      <CheckOs />
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`h-1/2 w-full bg-[#37474f] p-2`}>
          <Text style={styles.end}>{oldinput}</Text>
          <Text style={styles.end}>{oldresult}</Text>
        </View>
        <View style={tw`h-1/2 w-full bg-[#607d8b] flex-1 py-5 flex-col px-3`}>
          {[firstLine, secondLine, thirdLine, lastLine].map((line, index) => (
            <View key={index} style={tw`h-[25%] w-full flex flex-row`}>
              <Buttons getInput={(input : string) =>{getInputFromChild(input)}} items={line} />
            </View>
          ))}
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
// exp://pnugkfe-anonymous-8081.exp.direct