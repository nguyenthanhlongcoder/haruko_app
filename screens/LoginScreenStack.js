import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import PurchaseScreen from './PurchaseScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function LoginScreenStack({navigation, route}){
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }
    return(
        <Stack.Navigator
        headerMode="none"
        initialRouteName='LoginScreen's>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>

        </Stack.Navigator>
    )
}