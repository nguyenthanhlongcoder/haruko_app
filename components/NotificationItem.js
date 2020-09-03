import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {myColors} from '../assets/myColors';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

export default function NotificationItem(){
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
            <Icon name="notifications" color='#fff' size={30}/>
            </View>
            <View style={styles.containerRight}>
                <Text style={styles.title}>This is title</Text>
                <Text style={styles.time}>23/06/2000</Text>
                <Image style={styles.image} source={{uri:'http://lorempixel.com/300/100/'}}/>
                <Text style={styles.description}>This is description</Text>
            </View>
        </View>
    );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "flex-start",
        width: width - 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: myColors.dividerColor,
        marginVertical: 3,
        padding: 10,
        shadowColor: "#000",
        backgroundColor: '#fff'
       
    },
    icon:{
        width: 40,
        height: 40,
        backgroundColor: myColors.defaultPrimaryColor ,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    containerRight:{
        flex: 6,
        flexDirection: "column",
        marginLeft: 10
    },
    title:{
        fontSize: 20,
        fontWeight: '400'
    },
    time:{
        opacity: 0.7
    },
    image:{
        width: '90%',
        height: 100,
        borderRadius: 10,
        marginVertical: 10
    },
    description:{
        opacity: 0.7
    }
})