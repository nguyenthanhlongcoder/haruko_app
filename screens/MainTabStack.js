import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProductsViewScreen from './ProductsViewScreen';
import NotificationScreen from './NotificationScreen';
import AccountScreen from './AccountScreen';
import {myColors} from '../assets/myColors';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductStack from '../screens/ProductStack';
const Tab = createBottomTabNavigator();

export default function MainTabStack(){

    return(
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: myColors.defaultPrimaryColor
        }}>
            <Tab.Screen name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size})=>(
                    <AntDesgin name='home' color={color} size={size}/>
                )
            }}/>
            <Tab.Screen 
            name="Products" 
            component={ProductStack}
            options={{
                tabBarLabel: 'Products',
                tabBarIcon: ({color, size})=>(
                    <AntDesgin name='isv' size={30} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen 
            name="Notification" 
            component={NotificationScreen}
            options={{
                tabBarLabel:'Notification',
                tabBarIcon:({color, size})=>(
                    <AntDesgin name="notification" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen 
            name="AccountScreen" 
            component={AccountScreen}
            options={{
                tabBarLabel: 'Account',
                tabBarIcon:({color, size})=>(
                    <Ionicons name="ios-person" color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}