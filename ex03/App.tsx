import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";





export default function App() {

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View>
        <View style={tw`py-1 px-1 bg-[#626200] rounded-xl`}>
          <Text
            style={tw`rounded-xl text-white text-3xl  tracking-widest leading-relaxed px-[4]`}
          >
            A &nbsp;simple text
          </Text>
        </View>
        <View style={tw`mx-auto pt-1  `}>
          <TouchableOpacity
            style={tw`bg-red-500 p-2 bg-[#f7f3f2]  rounded-full  `}
            onPress={() => console.log("Button pressed")}
          >
            <Text style={tw`text-[#626200] font-semibold`}>Click me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

