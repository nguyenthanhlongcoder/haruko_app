import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';

export default function AppBar() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.header}>Home</Text>
            </View>

            <View style={styles.icons}>
                <Icon style={styles.icon} name="message1" color='#000' />
                <Icon style={styles.icon} name="shoppingcart" color='#000' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10
    },
    header: {
        color: '#000',
        fontSize: 20,
        textTransform: "uppercase"
    },
    icons: {
        flex: 1,
        flexDirection: "row-reverse"
    },
    icon:{
        fontSize: 25,
        marginHorizontal: 5
    }

})