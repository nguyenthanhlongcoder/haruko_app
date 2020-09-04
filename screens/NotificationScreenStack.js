import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from './NotificationScreen';
import LoginScreenStack from './LoginScreen';

const Stack = createStackNavigator();

export default function NotificationScreenStack({navigation, route}){
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='NotificationScreen' component={NotificationScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreenStack}/>
        </Stack.Navigator>
    )
}