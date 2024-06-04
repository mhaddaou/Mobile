import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Med from "./med";
import Had from "./hadd";
import Nice from "./nice";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Last from "./last";
import { useEffect, useRef, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import {faCalendarWeek, faCalendarDay, faGear} from '@fortawesome/free-solid-svg-icons'
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
        setNumber(-23)
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
        <View className="flex-1   ">
            <Animated.View style={animatedStyles} className='w-full h-full  flex justify-center items-center  '>
                <TouchableOpacity
                    className=""
                    key={item.index}
                    
                    onPress={onPress}
                    activeOpacity={1}
                >
                    <View className="flex gap-3">
                        <View className={`${border ? 'bg-[#90302a] w-16 h-16 rounded-full border-[5px] ' : ''} flex justify-center items-center  border-white`}>
                            <FontAwesomeIcon size={22} style={{color : 'white'}} icon={item.icon} />
                        </View>

                        <Text className={`${displayText ? 'text-white text-center font-bold  ' : 'hidden'}`}>{item.label}</Text>
                    </View>

                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}



export default function BottomBar(){
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle:{
            position: 'absolute', 
                height: 70,
                width:'90%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#90302a',
                bottom:8,
                borderRadius: 16,
                borderTopWidth: 1,
                left:16
        }}}>
            {
                TabArr.map((item, index) =>{
                    return (
                        <Tab.Screen  key={index}  name={item.route} component={item.component} options={{
                            tabBarShowLabel: false,
                            
                            tabBarButton : (props) => <TabBotton {...props} item={item}  />
                        }} 
                        
                        />

                    )
                })
            }
    </Tab.Navigator>
    )    

}