import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { myColors } from "../assets/myColors";
import AppLoading from "expo";
import Fonts from "../assets/Fonts";
import Icon from "react-native-vector-icons";

export default class Product extends React.Component {
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
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{ uri: this.props.item.avatar }}
            />
            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.content} >
              {this.props.item.content}
            </Text>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 10}}>
              <View style={{flex: 1}}/>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    color: myColors.defaultPrimaryColor,
                    fontSize: 16
                  }}
                >
                  <Text style={{ textDecorationLine: "underline", fontSize: 13}}>đ</Text>
                  {this.props.item.price}
                </Text>
                <Text>
                 
            </Text>
              </View>
            </View>

          </View>
        </TouchableOpacity>
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

const width = Dimensions.get('window').width / 2 - 5
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: myColors.dividerColor,
    width: width,
    height: width * 1.3,
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    height: '60%',

  },
  content: {
    fontSize: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    textTransform: "uppercase"
  },
});
