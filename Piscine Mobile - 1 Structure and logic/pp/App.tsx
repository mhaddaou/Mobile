//@ts-ignore
import { SafeAreaProvider ,useSafAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from './src/components/home-screen';
import { View , Text} from 'react-native';




export default function App() {
  return (
    <View className='flex-1 bg-red-400 text-white'>
    <SafeAreaProvider>
      <HomeScreen />
      {/* <View>
        <Text className='text-white'>ncie</Text>
      </View> */}
    </SafeAreaProvider>
    </View>
  );
}
