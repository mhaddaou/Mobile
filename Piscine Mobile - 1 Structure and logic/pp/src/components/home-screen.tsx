import { Text, View , StatusBar, Dimensions, TextInput, ImageBackground, Platform} from 'react-native';
//@ts-ignore
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppBar from './app-bar';
import Body from './body';
import BottomBar from './bottombar';
import { Khoubza, KhoubzaOne } from './bottombar';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const {height, width} = Dimensions.get('window')
    const m = height / 2;
    console.log(m)
    return (
      <ImageBackground source={require('../../assets/background.jpeg')} className='w-screen h-screen' resizeMode='cover'>
      <View style={{ paddingTop: insets.top, paddingLeft : insets.left, paddingRight: insets.right}} className={`w-full h-full mt-${Platform.OS === 'android' ? '2' : '0'} `}>
        <StatusBar barStyle='light-content' backgroundColor='#1e293b' />
        <View className='w-full h-[6%] '>
        <AppBar/>
        </View>
        <View className='w-full h-[85%] '><Text>2</Text></View>
        <View className='h-[9%] w-full bg-red-600'><Text>3</Text></View>
        
        
      </View>
      </ImageBackground>
    );
  }

  // exp://r-wd_wm-anonymous-8081.exp.direct