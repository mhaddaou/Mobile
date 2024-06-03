import { Text, View } from "react-native";

export default function BottomBar (){
    return (
    <View className="w-full h-full bg-slate-300 flex flex-row justify-between items-center px-3">
        <View className=" w-[30%] bg--500 h-full flex items-center  ">
            <View className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center mt-1.5 ">
            <Text>1</Text>

            </View>
        </View>
        <View className=" w-[30%] bg--500 h-full flex items-center   ">
            <View className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center mt-1.5 ">
            <Text>1</Text>

            </View>
        </View>
        <View className=" w-[30%] bg--500 h-full flex items-center  relative">
            <View className="absolute w-[70px] h-[70px] bg-black -top-1 rounded-full "></View>
            <View className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center mt-1.5 ">
            <Text>1</Text>

            </View>
        </View>
    </View>

    )
    
}

