import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AccountPurchases from '../components/AccountPurchases';
import AccountHeader from '../components/AccountHeader';
import AccountMyProduct from '../components/AccountMyProducts';
import AccountSetting from '../components/AccountSetting';
import {myColors} from '../assets/myColors';

export default function AccountScreen() {
    return (
        <View style={{flex: 1}}>
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
        backgroundColor: myColors.dividerColor,
        opacity: 0.3
    }
})