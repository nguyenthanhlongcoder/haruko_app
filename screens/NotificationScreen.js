import React, { useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import { View, StyleSheet, FlatList } from 'react-native';
import AppBar from '../components/AppBar';
import { Appbar } from 'react-native-paper';

export default function NotificationScreen() {

    const [data, setData] = useState([{
        title: 'This is title',
        time: '23/06/2000',
        description: 'This is description',
        key: '1'
    }, {
        title: 'This is title',
        time: '23/06/2000',
        description: 'This is description',
        key: '2'
    }, {
        title: 'This is title',
        time: '23/06/2000',
        description: 'This is description',
        key: '3'
    }]);

    return (
        <View style={styles.container}>
            <AppBar title='Notifications'/>
            <FlatList
                data={data}
                renderItem={({ item }) => { return <NotificationItem data={item} /> }}
                keyExtractor={item => item.key} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d5d5d5'
    },
})