import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AccountPurchases from '../components/AccountPurchases';
import AccountHeader from '../components/AccountHeader';
import AccountMyProduct from '../components/AccountMyProducts';
import AccountSetting from '../components/AccountSetting';
import {myColors} from '../assets/myColors';
import AppBar from '../components/AppBar';
import { Appbar } from 'react-native-paper';

export default function AccountScreen() {
    return (
        <View style={{flex: 1}}>
            <AppBar title=''/>
            <AccountHeader />
            <AccountPurchases />
            <View style={styles.divider}/>
            <AccountMyProduct/>
            <View style={styles.divider}/>
            <AccountSetting/>
        </View>
    )
}

const styles = StyleSheet.create({
    divider:{
        height: 10,
        backgroundColor: '#d5d5d5',
        opacity: 0.3
    }
})