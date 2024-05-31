import { Text, View , StatusBar} from 'react-native';
//@ts-ignore
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { width, height, size, fontSize } from "react-native-responsive-sizes";ls

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    return (
      <View className=' bg-black'>
        <StatusBar backgroundColor='red'/>

      </View>
      // <View style={{ flex: 1, paddingTop: insets.top }}>
      //   <StatusBar backgroundColor='red'/>
      //   {/* <Text className='text-red-600'>Content is in safe area.</Text> */}
      //   <View className='w-full h-full bg-black'>
      //     <Text>nice</Text>

      //   </View>
      // </View>
    );
  }