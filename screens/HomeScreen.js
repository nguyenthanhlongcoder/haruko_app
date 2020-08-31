import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HomeCarousel from '../components/HomeCarousel';
import HomeAbout from '../components/HomeAbout';
import HomeContact from '../components/HomeContact';
import HomeMap from '../components/HomeMap';
import { myColors } from '../assets/myColors';
import AppBar from '../components/AppBar';
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <ScrollView>
                <HomeCarousel style={styles.carousel} />
                <HomeAbout />
                <HomeContact style={styles.shadow} />
                <HomeMap style={styles.shadow} />
            </ScrollView>
        </View>
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