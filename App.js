import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,AppRegistry, Text, View } from 'react-native';
import ProductsViewScreen  from './screens/ProductsViewScreen'
import ProductDetailScreen  from './screens/ProductDetailScreen';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const ActivityProject = createStackNavigator(
  {
    First: { screen:ProductsViewScreen },
    Second: { screen:ProductDetailScreen},    
    
  },
  {
    initialRouteName: 'First',
});
 

     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});


const App = createAppContainer(ActivityProject);
export default App;