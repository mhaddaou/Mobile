import { Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function Med(){
    const {top} = useSafeAreaInsets()
    return (
        <View style={{paddingTop: top}} className="flex-1 bg-white  " >
            <Text>med</Text>
        </View>
    )
}