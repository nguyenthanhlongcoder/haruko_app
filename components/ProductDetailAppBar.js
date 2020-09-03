import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';

export default function ProductDetailAppBar(props) {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}/>
            <View style={{flex: 1, flexDirection: "row",
        alignItems: "center",}}>
                <View style={{ flex: 1 }}>
                <Text style={styles.header}>{props.title}</Text>
            </View>
            <View style={styles.icons}>
                <Icon style={styles.icon} name="message1" color='#fff' />
                <Icon onPress={props.onPress} style={styles.icon} name="shoppingcart" color='#fff' />
            </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        backgroundColor: myColors.defaultPrimaryColor
    },
    header: {
        color: '#fff',
        fontSize: 20,
        textTransform: "uppercase"
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