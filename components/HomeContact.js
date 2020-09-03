import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';
import call from 'react-native-phone-call';
import email from 'react-native-email';

export default function HomeContact() {

    const to = ['haruko@gmail.com'];

    const number = {
        number: '0908652940',
        prompt: false
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            <View style={styles.containerItem}>
                <Icon style={styles.icon} name="phone" />
                <Text style={[styles.content, { flex: 1 }]}>090 865 2940</Text>
                <TouchableOpacity onPress={()=>call(number).catch(console.error)}>
                    <Text style={styles.callNow}>Call now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divider} />

            <View style={styles.containerItem}>
                <Icon style={styles.icon} name="facebook-square" />
                <Text style={[styles.content,{flex: 1}]}>HarukoShop</Text>
                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/')}>
                <Text style={styles.callNow}>Follow us</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.divider} />

            <View style={styles.containerItem}>
                <Icon style={styles.icon} name="mail" />
                <Text style={[styles.content,{flex: 1}]}>haruko@gmail.com</Text>
                <TouchableOpacity onPress={()=> email(to, {
                    cc: ['haruko@gmail.com'],
                    bcc: 'thanhlong@gmail.com',
                    subject: 'Your subject',
                    body: 'Your content'
                }).catch(console.error)}>
                <Text style={styles.callNow}>Send email</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    title: {
        fontSize: 20,
        marginVertical: 15,
        textTransform: "uppercase",
        color: myColors.defaultPrimaryColor
    },
    containerItem: {
        flexDirection: "row",
        marginVertical: 8,
    },
    icon: {
        marginRight: 15,
        fontSize: 20
    },
    content: {
        fontSize: 15
    },
    callNow: {
        flex: 1,
        textAlign: "right",
        color: myColors.defaultPrimaryColor,
        fontSize: 15,
        
    },
    divider: {
        height: 2,
        backgroundColor: myColors.dividerColor,
        opacity: 0.2
    }
})