import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import AccountPurchases from '../components/AccountPurchases';
import AccountHeader from '../components/AccountHeader';
import AccountMyProduct from '../components/AccountMyProducts';
import AccountSetting from '../components/AccountSetting';
import { myColors } from '../assets/myColors';
import AppBar from '../components/AppBar';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function AccountScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <AppBar title='' />
                <AccountHeader />
                <AccountPurchases navigation={navigation} />
                <View style={styles.divider} />
                <AccountMyProduct navigation={navigation}/>
                <View style={styles.divider} />
                <AccountSetting />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    divider: {
        height: 10,
        backgroundColor: '#d5d5d5',
        opacity: 0.3,
    }
})