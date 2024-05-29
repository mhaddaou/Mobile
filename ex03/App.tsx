import  { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import tw from "twrnc";
import { checkInputAndReturnResult } from "./utils/check-input-and-return-result";
import { getColor } from "./utils/utils";
const operators = ["+", "-", "/", "x"];

function CheckOs() {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={Platform.OS === "ios" ? "transparent" : "#485e68"}
        barStyle="light-content"
      />
      <Text
        style={tw`text-white text-center font-semibold pb-2 pt-${
          Platform.OS === "ios" ? "0" : "3"
        }`}
      >
        Calculator
      </Text>
    </SafeAreaView>
  );
}

export default function App() {
  const DATA = ["7","8","9","C","AC","4","5","6","+","-","1","2","3","x","/","0",".","00","=",""];
  const [oldInput, setInput] = useState<string>("0");
  const [oldresult, setResult] = useState<string>("0");
  const { height, width } = useWindowDimensions();



  const orientation = () => {
    return width > height;
  };

  const getInputFromChild = async (_input: string) => {
    try {
      const {input, result} = checkInputAndReturnResult({
          oldInput,
          input: _input,
          result: oldresult,
      })

      // if(_input === '=')
      //   setClickEquation(true);
      // if (_input == "AC" || _input == "C") setClickEquation(false);

      // if(clickEquation && operators.includes(_input)){
      //   console.log('ah true');
      //   console.log(oldresult);
      //   // ({ input, result } = checkInputAndReturnResult({
      //   //   oldInput: oldresult  ,
      //   //   input: _input,
      //   //   result: oldresult,
      //   // }));
      //   setInput(oldresult.concat(_input));
      //   setResult(result);
      //   setClickEquation(false);
      //   return;

      // }
      // ({ input, result } = checkInputAndReturnResult({
      //   oldInput: oldInput  ,
      //   input: _input,
      //   result: oldresult,
      // }));
      // if (oldInput.length >= 62) return;

      
      // if (_input == "=") {
      //   console.log("11111", clickEquation);
      //   setClickEquation(true);
      //   console.log("22222", clickEquation);
      // }

      // if (
      //   _input == "=" &&
      //   (operators.includes(oldInput[oldInput.length - 1]) || clickEquation)
      // )
      //   return;

      // const isOperatorInput = clickEquation && operators.includes(_input);

      // const replace = clickEquation && !operators.includes(_input);


      // if (_input == "AC" || "C") setClickEquation(false);

      // if (replace) {
      //   ({ input, result } = checkInputAndReturnResult({
      //     oldInput: _input,
      //     input: "",
      //     result: oldresult,
      //   }));
      // } else {
        // ({ input, result } = checkInputAndReturnResult({
        //   oldInput: check ? oldresult.concat(_input) : oldInput ,
        //   input: _input,
        //   result: oldresult,
        // }));
      //   // console.log(isOperatorInput, "11111");
      // }
      // if(isOperatorInput)
      //   setClickEquation(false);
      setInput(input);
      setResult(result);

    } catch (e: any) {}
  };

  const render = ({ item }: { item: string }) => {
    return (
      <View style={[tw` mx-auto w-[20%]   `]}>
        <TouchableWithoutFeedback
          style={tw`flex-1 bg-green-500 w-[80%]`}
          onPress={() => getInputFromChild(item)}
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
      <View style={tw`flex-1 `}>
        <View
          style={tw`  ${
            orientation() ? "h-[50%]" : "h-[60%]"
          } w-full bg-[#37474f] p-2`}
        >
          <Text style={styles.end}>{oldInput}</Text>
          <Text style={styles.end}>{oldresult}</Text>
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
    color: "#5d7987",
    paddingTop: 4,
    fontSize: 22,
  },
});

// exp://pqkagfa-anonymous-8081.exp.direct
