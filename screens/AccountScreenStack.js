import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import PurchaseScreen from './PurchaseScreen';
import AccountScreen from './AccountScreen';
import MyProductScreen from './MyProductScreen';
import LoginScreenStack from './LoginScreenStack';

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
        initialRouteName='AccountScreen's>
            <Stack.Screen name="AccountScreen" component={AccountScreen}/>
            <Stack.Screen name="PurchaseScreen" component={PurchaseScreen}/>
            <Stack.Screen name="MyProductScreen" component={MyProductScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreenStack}/>
        </Stack.Navigator>
    )
}