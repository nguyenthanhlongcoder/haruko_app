import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EachPurchaseScreen from './EachPurchaseScreen';
import AppBarLight from '../components/AppBarLight';

const Tab = createMaterialTopTabNavigator();


export default function PurchaseScreen({navigation}){
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            <AppBarLight navigation={navigation} title='My Purchases'/>
             <Tab.Navigator tabBarOptions={{
                 labelStyle:{
                     fontSize: 12
                 }
             }}>
            <Tab.Screen name="To Pay" component={EachPurchaseScreen}/>
            <Tab.Screen name="To Ship" component={EachPurchaseScreen}/>
            <Tab.Screen name="To Receive" component={EachPurchaseScreen}/>
            <Tab.Screen name="Completed" component={EachPurchaseScreen}/>
        </Tab.Navigator>
        </SafeAreaView>
       
    )
}

