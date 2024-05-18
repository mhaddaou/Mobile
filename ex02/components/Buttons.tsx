import { TouchableWithoutFeedback, View, Text } from "react-native";
import tw from "twrnc";
type PropType = {
  items: string[];
};
export default function Buttons(props: PropType) {
  const redColor = ["C", "AC"];
  const WhiteColor = ["+", "-", "x", "/", "="];
  const getColor = (item: string) => {
    if (redColor.includes(item)) return "text-[#9f363a]";
    else if (WhiteColor.includes(item)) return "text-white";
    else return "text-black";
  };
  function Get({ item }: { item: string }) {
    return (
      <TouchableWithoutFeedback
        style={tw`p-1`}
        onPress={() => {
          console.log(`button pressed :${item}`);
        }}
      >
        <View>
          <Text style={tw`${getColor(item)} font-semibold text-lg`}>
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
          <View key={index} style={tw`w-[20%] h-full  flex   justify-center items-center`}>
            <Get item={item} />
          </View>
        );
      })}
    </View>
  );
}
