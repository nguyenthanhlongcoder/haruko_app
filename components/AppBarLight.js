import React from 'react';
import { View, StyleSheet, TouchableOpacity ,Text,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';

export default function AppBarLight(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="arrowleft" color={myColors.defaultPrimaryColor} size={25} />
                </TouchableOpacity>
    <Text style={styles.header}>{props.title}</Text>
            </View>
            <View style={styles.icons}>
                <Icon onPress={async()=>{
                      let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                        props.navigation.navigate('ProductCartScreen')
                    }
                }} style={styles.icon} name="message1" color={myColors.defaultPrimaryColor} />
                <Icon onPress={async()=>{
                      let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                        props.navigation.navigate('ProductCartScreen')
                    }
                }} style={styles.icon} name="search1" color={myColors.defaultPrimaryColor} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: '#fff'
    },
    header: {
        color: '#000',
        fontSize: 20,
        marginLeft: 10
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