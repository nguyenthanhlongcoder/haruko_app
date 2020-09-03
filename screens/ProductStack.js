import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsViewScreen from "../screens/ProductsViewScreen";
import ProductCartScreen from "../screens/ProductCartScreen";
import ChatScreen from "../screens/ChatScreen";
const createProductStack = createStackNavigator({
  First: { screen: ProductsViewScreen },
  Second: { screen: ProductDetailScreen },
  Third: { screen: ProductCartScreen },
  Forth:{screen:ChatScreen}
});
const ProductStack = createAppContainer(createProductStack);
export default ProductStack;
