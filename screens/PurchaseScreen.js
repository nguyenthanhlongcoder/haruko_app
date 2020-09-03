import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EachPurchaseScreen from './EachPurchaseScreen';
import MyStatusBar from '../components/MyStatusBar';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';
import { Appbar } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const AppBar = (props) =>{
    return(
        <View style={styles.container}>
        <View style={{ flex: 1 , flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=> props.navigation.goBack()}>
            <Icon name="arrowleft" color={myColors.defaultPrimaryColor} size={25}/>
            </TouchableOpacity>
            <Text style={styles.header}>My Purchases</Text>
        </View>
        <View style={styles.icons}>
            <Icon style={styles.icon} name="message1" color={myColors.defaultPrimaryColor} />
            <Icon style={styles.icon} name="search1" color={myColors.defaultPrimaryColor} />
        </View>
</View>
    )
}


export default function PurchaseScreen({navigation}){
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            <AppBar navigation={navigation}/>
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

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: '#fff'
    },
    header: {
        color: '#000',
        fontSize: 20,
        marginLeft: 10
    },
    icons: {
        flex: 1,
        flexDirection: "row-reverse"
    },
    icon: {
        fontSize: 25,
        marginHorizontal: 10
    }

})