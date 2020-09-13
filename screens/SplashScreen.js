import React from 'react';
import {SafeAreaView, Image, StyleSheet, StatusBar} from 'react-native';
import {myColors} from '../assets/myColors';

export default function SplashScreen({navigation}){

    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Main');
        },3000)
    },[])
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require('../assets/logo.png')} resizeMode='center'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: myColors.defaultPrimaryColor
    },
    img:{
        width: '50%',
        height: '30%'
    }
})