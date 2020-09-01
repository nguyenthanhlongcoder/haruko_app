import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
} from "react-native";
import Color from "../assets/myColors";
import AppLoading from "expo";
import Fonts from "../assets/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { myColors } from "../assets/myColors";
export default class ProductTitle extends React.Component {
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
        <View style={styles.container} onTouchEnd={this.props.onPress}>
          <Text style={[styles.content]}>{this.props.item.content}</Text>
          <View style={styles.divider} />
          <View style={styles.containerItem}>
          <Text
              style={{
                width: "50%",
                textAlign: "left",
                color: myColors.defaultPrimaryColor,
                paddingLeft:10
              }}
            >
              <Text style={{ textDecorationLine: "underline" }}>đ</Text>
              {this.props.item.price}
            </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.containerItem}>
            <Text style={{ width: "50%", textAlign: "left", paddingLeft:10 }}>
              {this.props.item.sold} sold
            </Text>
            </View>
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
    
    margin: 5,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  text: {
    paddingLeft: 10,
  },
  content: {
    width: "100%",
    textAlign: "left",
    fontFamily: "roboto-light",
    fontSize: 25,
    paddingLeft:10,
  
  },
  divider: {
    height: 2,
    backgroundColor: myColors.dividerColor,
    
  },
  containerItem: {
    flexDirection: "row",
    marginVertical: 8,
    
  }
});
