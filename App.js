import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetail from './components/ProductDetail';
import NotificationScreen from './screens/NotificationScreen';
import AccountSreen from './screens/AccountScreen'
import ProductStack from './screens/ProductStack';
export default function App() {
  return (
    <ProductStack/>
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
