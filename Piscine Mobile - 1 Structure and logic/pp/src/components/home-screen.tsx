import { Text, View , StatusBar, Dimensions, TextInput, ImageBackground, Platform} from 'react-native';
//@ts-ignore
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppBar from './app-bar';
import Body from './body';
import BottomBar from './bottombar';


export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const {height, width} = Dimensions.get('window')
    const m = height / 2;
    console.log(m)
    return (
      <View style={{ paddingTop: insets.top}} className={` w-full h-full  mt-${Platform.OS === 'android' ? '2' : '0'} `}>
        <View className='w-full h-[6%] '>
        <AppBar/>
        </View>
        <View className='w-full h-[84%] '><Text>2</Text></View>
        <View className='h-[10%] w-full '>
          <BottomBar/>
        </View>
        
        
      </View>
    );
  }

  // exp://r-wd_wm-anonymous-8081.exp.direct