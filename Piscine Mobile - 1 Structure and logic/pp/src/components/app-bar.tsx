import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function AppBar() {
  const [text, setText] = useState("");

  const handlText = () => {};

  return (
    <View className="flex-1 w-full flex flex-row items-center px-5 justify-between">
      <View className=" flex flex-row items-center gap-2 w-[70%]">
        <Image
          className="w-5 h-5"
          source={require("../../assets/search.png")}
        />

        <TextInput
          placeholderTextColor="#d4d4d4"
          placeholder="Search location...."
          value={text}
          className="font-semibold "
          onChangeText={setText}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("clicked")}>
          <Image
            className="w-6 h-6 -mt-1"
            source={require("../../assets/send.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
