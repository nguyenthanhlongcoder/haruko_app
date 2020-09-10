import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { myColors } from '../assets/myColors';

export default function AccountHeader(props) {

    const [state, setState] = useState({
        displayName: '',
        email: '',
        status: ''
    })


    useEffect(() =>
        async (user) => {
            try {
                let userData = await AsyncStorage.getItem('userData');
                let data = JSON.parse(userData);
                let us = JSON.parse(data);
                setState({
                    displayName: us.DisplayName,
                    email: us.Email,
                    status: await AsyncStorage.getItem('status')
                })
            } catch (error) {
            }
        },
    )
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={styles.image} source={{ uri: 'http://lorempixel.com/50/50/' }} />
                </View>
                {state.status == 'true' ?
                    <View>
                        <Text style={styles.name}>{state.displayName}</Text>
                        <Text style={styles.email}>{state.email}</Text>
                    </View> :
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('LoginScreen')}>
                            <View style={[styles.button, { backgroundColor: '#fff', color: myColors.defaultPrimaryColor }]}><Text style={{ color: myColors.defaultPrimaryColor }}>Log In</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> props.navigation.navigate('SignUpScreen')}>
                            <View style={styles.button}><Text style={{ color: '#fff' }}>Sign Up</Text></View>
                        </TouchableOpacity>
                    </View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: myColors.defaultPrimaryColor,
        height: 70,
        flexDirection: 'column-reverse',
        padding: 15,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10
    },
    name: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
        margin: 2
    },
    email: {
        color: '#FFF',
        margin: 2
    },
    button: {
        width: 80,
        borderColor: '#fff',
        paddingVertical: 5,
        borderWidth: 1,
        height: 30,
        margin: 5,
        textAlign: "center",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    }
})