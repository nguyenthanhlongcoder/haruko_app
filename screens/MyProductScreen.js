import React from 'react';
import {SafeAreaView} from 'react-native';
import AppBarLight from '../components/AppBarLight';

export default function MyProductScreen({navigation, route}){
    return(
        <SafeAreaView>
            <AppBarLight navigation={navigation} title={route.params.title}/>

        </SafeAreaView>
    )
}