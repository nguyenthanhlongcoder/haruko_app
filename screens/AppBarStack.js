import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AppBar from '../components/AppBar';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function AppBarStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='AppBar' component={AppBar} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}