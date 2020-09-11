import React from 'react';
import { StatusBar, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import HomeCarousel from '../components/HomeCarousel';
import HomeAbout from '../components/HomeAbout';
import HomeContact from '../components/HomeContact';
import HomeMap from '../components/HomeMap';
import { myColors } from '../assets/myColors';
import AppBar from '../components/AppBar';
import MyStatusBar from '../components/MyStatusBar'
export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <MyStatusBar/>
            <AppBar title='Home' navigation={navigation}/>
            <ScrollView>
                <HomeCarousel style={styles.carousel} />
                <HomeAbout />
                <HomeMap style={styles.shadow} />
                <HomeContact style={styles.shadow} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: myColors.lightPrimaryColor,
    }
})