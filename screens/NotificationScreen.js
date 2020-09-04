import React, { useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import { SafeAreaView, StyleSheet, FlatList ,} from 'react-native';
import AppBar from '../components/AppBar';
import MyStatusBar from '../components/MyStatusBar';

export default function NotificationScreen({navigation}) {

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
        <SafeAreaView style={styles.container}>

            <AppBar title='Notifications' navigation={navigation}/>
            <FlatList
                contentContainerStyle={{ justifyContent: "center",
                alignItems: "center",}}
                data={data}
                renderItem={({ item }) => { return <NotificationItem data={item} /> }}
                keyExtractor={item => item.key} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6'
    },
})