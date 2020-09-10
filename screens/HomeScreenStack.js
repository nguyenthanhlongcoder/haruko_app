import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import LoginScreenStack from './LoginScreenStack';
import ProductDetailScreen from '../screens/ProductDetailScreen'


const Stack = createStackNavigator();

export default function HomeScreenStack({navigation, route}){
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({ tabBarVisible: true });
    }
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreenStack}/>
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}/>
        </Stack.Navigator>
    )
}