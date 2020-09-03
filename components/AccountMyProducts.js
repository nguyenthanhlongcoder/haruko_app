import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';

export default function AccountMyProducts(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyProductScreen', {title:'My Likes'})}>
                <View style={styles.containerChild}>
                    <View style={styles.containerLeft}>
                        <AntDesign name="hearto" style={styles.icon} color='#FF6F91' />
                        <Text style={styles.name}>My Likes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ opacity: 0.6 }}>0 Like</Text>
                        <AntDesign name="right" style={styles.rightIcon} />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.devider} />

            <TouchableOpacity onPress={()=> props.navigation.navigate('MyProductScreen', {title:'Recently Viewed'})}>
            <View style={styles.containerChild}>
                <View style={styles.containerLeft}>
                    <AntDesign name="clockcircleo" style={styles.icon} color={myColors.defaultPrimaryColor} />
                    <Text style={styles.name}>Recently Viewed</Text>
                </View>
                <AntDesign name="right" style={styles.rightIcon} />
            </View>
            </TouchableOpacity>

            <View style={styles.devider} />

            <View style={styles.containerChild}>
                <View style={styles.containerLeft}>
                    <AntDesign name="staro" style={styles.icon} color='#00C9A7' />
                    <Text style={styles.name}>My Rating</Text>
                </View>
                <AntDesign name="right" style={styles.rightIcon} />
            </View>

            <View style={styles.devider} />

            <View style={styles.containerChild}>
                <View style={styles.containerLeft}>
                    <AntDesign name="gift" style={styles.icon} color='#FF9671' />
                    <Text style={styles.name}>My Vouchers</Text>
                </View>
                <AntDesign name="right" style={styles.rightIcon} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    },
    containerChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        fontSize: 25,
        margin: 15
    },
    name: {
        fontSize: 15
    },
    devider: {
        height: 1,
        backgroundColor: myColors.dividerColor,
        opacity: 0.5,
        marginLeft: 10
    },
    rightIcon: {
        fontSize: 20,
        opacity: 0.6,
        marginRight: 10
    }
})