import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import PurchaseScreen from './PurchaseScreen';
import AccountScreen from './AccountScreen';

const Stack = createStackNavigator();

export default function AccountScreenStack({navigation, route}){
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }
    return(
        <Stack.Navigator
        headerMode="none"
        initialRouteName='AccountScreen'
        >
            <Stack.Screen name="AccountScreen" component={AccountScreen}/>
            <Stack.Screen name="PurchaseScreen" component={PurchaseScreen}/>
        </Stack.Navigator>
    )
}