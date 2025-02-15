import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Dimensions
} from "react-native";
import Fonts from "../assets/Fonts";
import AppLoading from "expo";
import { myColors } from "../assets/myColors";

export default class CategoryItem extends React.Component {
  constructor() {
    super();
    this.state = {
      assetsLoaded: false,
    };
    this.componentDidMount();
  }
  async componentDidMount() {
    await Fonts();
    this.setState({ assetsLoaded: true });
  }
  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={[styles.container,this.props.item.isChecked?styles.active: null]} onTouchEnd={this.props.onPress}>
          <Text style={styles.content}>
            {this.props.item.Title}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    alignItems: "center",
    justifyContent: "center",
    width:Dimensions.get('window').width/5,
    height: Dimensions.get('window').width/5,
    borderColor:myColors.dividerColor,
    borderWidth:2,

  },
  active:{
    borderColor: myColors.defaultPrimaryColor
  },
  content: {
    textAlign:'center',
    fontSize: 15,
    color:myColors.defaultPrimaryColor
  },
});
