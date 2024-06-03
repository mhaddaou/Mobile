import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Med from "./med";
import Had from "./hadd";

const Tab = createBottomTabNavigator();
export default function BottomBar (){
    return (
        <Tab.Navigator>
            <Tab.Group>
                <Tab.Screen options={{headerShown : false}} name="med" component={Med} />
                <Tab.Screen options={{headerShown : false}} name="had" component={Had} />
            </Tab.Group>
        </Tab.Navigator>
    )
}