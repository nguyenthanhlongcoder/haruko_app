import React from 'react';
import { View, Text, StyleSheet,AsyncStorage,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { myColors } from '../assets/myColors';
import { Appbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AppBar(props, {navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>{props.title}</Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={async() => {
                     let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                       Alert.alert('The feature is in development :)')
                    }
                    }}>
                    <Icon style={styles.icon} name="message1" color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity  onPress={async() => {
                     let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                        props.navigation.navigate('ProductCartScreen')
                    }
                    }}>
                <Icon style={styles.icon} name="shoppingcart" color='#fff' />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
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