import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsViewScreen from "../screens/ProductsViewScreen";
const createProductStack = createStackNavigator({
  First: { screen: ProductsViewScreen },
  Second: { screen: ProductDetailScreen },
});
const ProductStack = createAppContainer(createProductStack);
export default ProductStack;
