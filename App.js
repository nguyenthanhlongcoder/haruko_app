import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetail from './components/ProductDetail';
import NotificationScreen from './screens/NotificationScreen';
import AccountSreen from './screens/AccountScreen';
import {StatusBar} from 'react-native';
import ProductViewScreen from './screens/ProductsViewScreen';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native'
import MainTabStack from './screens/MainTabStack';
import ProductStack from './screens/ProductStack';
import ProductCartItem from './components/ProductCartItem';
import ProductCartScreen from './screens/ProductCartScreen'
import SplashScreen from './screens/SplashScreen';
const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name='SpashScreen' component={SplashScreen}/>
      <Stack.Screen name="Main" component={MainTabStack}/>
    </Stack.Navigator>
    </NavigationContainer>
   
    
    
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
