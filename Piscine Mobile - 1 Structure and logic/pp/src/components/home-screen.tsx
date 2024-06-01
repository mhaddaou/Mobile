import { Text, View , StatusBar, Dimensions, TextInput} from 'react-native';
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
      <View style={{ flex: 1, paddingTop: insets.top , backgroundColor: '#636579' }}>
        <StatusBar barStyle="light-content"  backgroundColor='#636579' />
        <View className='w-full h-full'>
          <View  className=' h-[6%] bg-[#636579]' >
            <AppBar/>
          </View>
          <View className='flex-1 bg-white p-1'>
            <Body/>
          </View>
          <View className='h-[10%] bg-green-500 flex flex-row'>
            <BottomBar/>
            <Khoubza/>
            <KhoubzaOne/>
            
          </View>

        </View>
      </View>
    );
  }

  // exp://r-wd_wm-anonymous-8081.exp.direct