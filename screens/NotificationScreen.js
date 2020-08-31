import React, { useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import { View, StyleSheet, FlatList } from 'react-native';

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
        alignItems: "center"
    },
})