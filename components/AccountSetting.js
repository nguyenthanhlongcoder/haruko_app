import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AccountSetting(){
    return(
        <View>
             <View style={styles.containerChild}>
                <View style={styles.containerLeft}>
                    <MaterialIcons name="person"  style={styles.icon} color={myColors.defaultPrimaryColor}/>
                    <Text style={styles.name}>Account Settings</Text>
                </View>
                <AntDesign name="right" style={styles.rightIcon}/>
            </View>
            <View style={styles.devider} />
            <View style={styles.containerChild}>
                <View style={styles.containerLeft}>
                    <AntDesign name="questioncircleo"  style={styles.icon} color='#00C9A7'/>
                    <Text style={styles.name}>Help Center</Text>
                </View>
                <AntDesign name="right" style={styles.rightIcon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    },
    containerChild:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerLeft:{
        flexDirection: 'row',
        alignItems: "center"
    },
    icon:{
        fontSize: 25,
        margin: 15
    },
    name:{
        fontSize: 15
    },
    devider: {
        height: 1,
        backgroundColor: myColors.dividerColor,
        opacity: 0.5,
        marginLeft: 10
    },
    rightIcon:{
        fontSize: 20,
        opacity: 0.6,
        marginRight: 10
    }
})