import { Button, Text, TouchableOpacityComponent, View } from "react-native"
import { router } from "expo-router";

const Today = () =>{
    return (
        <View className="flex-1 flex justify-center items-center">
            <Text className="text-lg font-bold tracking-wide">Today</Text>
            <Button
  onPress={() => {
    router.push('/Current')
  }}
  title="Press Me"
/>
        </View>
    )
}

export default Today;