import React from 'react';
import {StatusBar, View} from 'react-native';
import {myColors} from '../assets/myColors';

export default function MyStatusBar(){
    return(
        <View>
        <StatusBar backgroundColor={myColors.defaultPrimaryColor}/>
    </View>
    )
    
}