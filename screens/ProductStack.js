import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsViewScreen from "../screens/ProductsViewScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ChatScreen from "../screens/ChatScreen";
const Stack=createStackNavigator()
export default function ProductStack(){
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='ProductsViewScreen' component={ProductsViewScreen}/>
      <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}/>
      <Stack.Screen name='ProductCartScreen' component={ProductCartScreen}/>
    </Stack.Navigator>
  )


}