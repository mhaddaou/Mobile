import { Text, View, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";


export default function AppBar (){
    const [text, setText] = useState('');

    const handlText = () =>{

    }

    return (
        <View className="flex-1 w-full flex flex-row items-center px-5 justify-between">
             <View className=" flex flex-row items-center gap-2 w-[70%]">
             <AntDesign  name="search1" size={16} color="white" />
            
             <TextInput placeholderTextColor="#d4d4d4"  placeholder="Search location...." value={text} className="font-semibold " onChangeText={setText} />
             </View>
             <View>
             <Text>second</Text>

             </View>
        </View>
    )
}