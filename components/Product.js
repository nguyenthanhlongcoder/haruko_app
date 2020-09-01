import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Dimensions
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
        <View style={styles.container} onTouchEnd={this.props.onPress}>
          <Image
            style={styles.img}
            source={{uri:this.props.item.image}}
          />
          <Text style={styles.content} >
            {this.props.item.content}
          </Text>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                width: "50%",
                textAlign: "center",
                color: myColors.defaultPrimaryColor,
              }}
            >
              <Text style={{ textDecorationLine: "underline" }}>đ</Text>
              {this.props.item.price}
            </Text>
            <Text style={{ width: "50%", textAlign: "center" }}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
     borderColor:myColors.dividerColor,
     borderWidth:2.5,
    width: Dimensions.get('window').width/2-5,
    height:Dimensions.get('window').height/3,
    flexDirection:'column'
  },
  img: {
    width: '100%',
    height: '60%',
    top: 0,
    position: "absolute",
   
  },
  content: {
    marginTop:60,
    fontFamily: "roboto-light",
    fontSize: 15,
  },
});
