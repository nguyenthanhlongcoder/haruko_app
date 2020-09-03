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
          <View style={{ padding: 15 }}>
            <Text style={[styles.content]}>{this.props.item.content}</Text>

            <View style={styles.containerItem}>
              <Text
                style={{
                  color: myColors.defaultPrimaryColor,
                  fontSize: 20
                }}
              >
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                {this.props.item.price}
              </Text>
            </View>

          </View>
          <View style={styles.divider} />
          <View style={styles.containerItem}>
            <Text style={{ width: "50%", textAlign: "left", paddingLeft: 10 }}>
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
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  content: {
    fontSize: 20,
    textTransform: "uppercase"

  },
  divider: {
    height: 10,
    backgroundColor: myColors.dividerColor,
  },
  containerItem: {
    flexDirection: "row",
    padding: 10,
  }
});
