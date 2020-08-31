import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import {  } from 'react-native-paper'
import AccountSreen from './screens/AccountScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <AccountSreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appBar:{
    backgroundColor: 'red',
    position: 'relative'
  }
});
