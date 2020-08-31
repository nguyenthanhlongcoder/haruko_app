import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { myColors } from '../assets/myColors';

export default function HomeMap() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Where is Haruko?</Text>
            <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 10.364583,
                longitude: 107.083790,
                latitudeDelta: 0.0005,
                longitudeDelta: 0.0005,
            }}
        >
            <Marker
            coordinate={{
                latitude: 10.364583,
                longitude: 107.083790
            }}
            title={'Haruko Shop'}/>
        </MapView>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {  
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 2
    },
    map: {
      width: Dimensions.get('window').width - 20,
      height: 300,
      borderRadius: 10,
      marginBottom: 15
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        textTransform: "uppercase",
        color: myColors.defaultPrimaryColor,
        alignItems: 'flex-start'
    }
   });
   