import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import {  } from 'react-native-paper'
import AccountSreen from './screens/AccountScreen'
import ProductViewScreen from './screens/ProductsViewScreen';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native'
import MainTabStack from './screens/MainTabStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
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
