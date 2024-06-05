import { Text, View , StatusBar, Dimensions, TextInput, ImageBackground, Platform, TouchableOpacity, StyleSheet} from 'react-native';
//@ts-ignore
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppBar from './app-bar';
import Body from './body';
import BottomBar from './bottombar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Med from './Med';
import Had from './Had';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCalendarWeek, faCalendarDay, faGear} from '@fortawesome/free-solid-svg-icons'
import Last from './Last';
import { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


const Tab = createBottomTabNavigator();

interface ArrayInter {
  route : string;
  label : string;
  icon : any;
  component: any;
}

const TabArr: ArrayInter[] = [
  {route: 'Med', label: 'Currently', icon : faGear , component: Med},
  {route: 'Had', label: 'Today', icon : faCalendarDay, component: Had},
  {route: 'Last', label: 'Weekly', icon : faCalendarWeek , component: Last}
]




const TabBotton = (props : any) =>{
  const [number, setNumber] = useState(0);
  const {item, onPress, accessibilityState} = props;
  const [border, setBorder] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  const focused = accessibilityState.selected;
  useEffect(() =>{
  if(focused){
      setNumber(Platform.OS == 'ios' ? -7 : -23)
      setBorder(true);
      setDisplayText(true);
  }else{
      setNumber(0);
      setBorder(false);
      setDisplayText(false);
  }

  },[focused]);

 

  const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(number) }],
    }));


  return (
      <View className="flex-1 w-full h-full  bg-black ">
          <Animated.View style={animatedStyles} className='bg-blue-900 flex-1 w-full h-full '>
              <TouchableOpacity
                  className=""
                  key={item.index}
                  
                  onPress={onPress}
                  activeOpacity={1}
              >
                <View className='bg-blue-500 h-full w-full '>
                  <Text>{item.label}</Text>

                </View>
                  {/* <View className="flex gap-3">
                      <View className={`${border ? 'bg-[#90302a] w-16 h-16 rounded-full border-[5px] ' : ''} flex flex-row justify-center items-center  border-white`}>
                          <FontAwesomeIcon size={22} style={{color : 'white'}} icon={item.icon} />
                      </View>

                      <Text className={`${displayText ? 'text-white text-center font-bold  ' : 'hidden'}`}>{item.label}</Text>
                  </View> */}

              </TouchableOpacity>
          </Animated.View>
      </View>
  )
}


export default function HomeScreen() {
  const ios = Platform.OS == 'ios';
    return (
      <NavigationContainer >
           <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: styles.tabBar}}>
            {
                TabArr.map((item, index) =>{
                    return (
                        <Tab.Screen   key={index}  name={item.route}  component={item.component} options={{
                            tabBarShowLabel: false,
                            tabBarButton : (props) => <TabBotton {...props} item={item}  />
                        }} 
                        
                        />
                    )
                })
            }
    </Tab.Navigator>

      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBar: {
      height: 70,
      backgroundColor: 'red',
      width: '80%',
      position: 'absolute',
      bottom: 10, // Adjust this value as needed to position from the bottom
      left: '10%', // Center the tab bar horizontally
      borderRadius: 35, // Optional: add some border radius for styling
    },
    tabButton: {
      height:70,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white', // Customize as needed
    },
  });

  // exp://kisdwvo-anonymous-8081.exp.direct