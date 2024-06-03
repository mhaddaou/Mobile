import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Med(){
    return (
        <View className=" flex-1">
            <Text className="font-bold">Med</Text>
            <Pressable onPress={() => router.push("/")}>
                <Text>click</Text>
            </Pressable>
        </View>
    )
}