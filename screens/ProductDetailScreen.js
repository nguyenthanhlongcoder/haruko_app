import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Image } from 'react-native';
import Product from '../components/Product'


export default class ProductDetailScreen extends React.Component {

    static navigationOptions =
    {
       title: 'SecondActivity',
    };
 render(){ return (
    <View style={styles.container}>
     
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
