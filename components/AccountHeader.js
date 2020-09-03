import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { myColors } from '../assets/myColors';

export default function AccountHeader(){
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image style={styles.image} source={{uri:'http://lorempixel.com/50/50/'}}/>
                </View>
                <View>
                    <Text style={styles.name}>AnhLang</Text>
                    <Text style={styles.email}>luckytvn@gmail.com</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: myColors.defaultPrimaryColor,
        height: 50,
        flexDirection: 'column-reverse',
        padding: 15
    },
    image:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10
    },
    name:{
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
        margin: 2
    },
    email:{
        color: '#FFF',
        margin: 2
    }
})