import { TouchableWithoutFeedback, View, Text } from "react-native";
import tw from "twrnc";

type PropType = {
  items: string[];
  getInput : (input : string) => void,
};

export default function Buttons(props: PropType) {
  const redColor = ["C", "AC"];
  const WhiteColor = ["+", "-", "x", "/", "="];
  const getColor = (item: string) => {
    if (redColor.includes(item)) return "text-[#9f363a]";
    else if (WhiteColor.includes(item)) return "text-white";
    else return "text-black";
  };

  const returnInputToParent = (input : string) => {
    props.getInput(input)
  }

  function Get({ item }: { item: string }) {
    return (
      <TouchableWithoutFeedback
        style={tw`flex-1 w-full h-full bg-green-500`}
        onPress={() => {
          returnInputToParent(item);
          // if (item !== "") console.log(`button pressed :${item}`);
        }}
      >
        <View>
          <Text style={tw`${getColor(item)} font-semibold text-lg p-4`}>
            {item}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={tw`flex-1 flex-row items-center justify-center`}>
      {props.items.map((item, index) => {
        return (
          <View
            key={index}
            style={tw`w-[20%] h-full  flex   justify-center items-center`}
          >
            <Get item={item} />
          </View>
        );
      })}
    </View>
  );
}
