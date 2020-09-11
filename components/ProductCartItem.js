import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { myColors } from "../assets/myColors";
import { render } from "react-dom";

export default class ProductCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      count: this.props.item.count,
    };
  }
  changCount = (style) => {
    if (style === "minus") {
      if (this.state.count > 1) {
        this.state.count = parseInt(this.state.count) - 1;
        this.setState({
          count: this.state.count,
        });
      }
    } else {
      this.state.count = parseInt(this.state.count) + 1;
      this.setState({
        count: this.state.count,
      });
    }
    this.props.getTotal(this.state.count);
  };
  render() {
    return (
      <View style={styles.container}>
          <Image
            style={styles.img}
            resizeMode="center"
            source={{ uri: this.props.item.img }}
          />
        <View style={styles.containerItem}>
          <View style={styles.containerItemChild}>
            <Text style={styles.content}>{this.props.item.content}</Text>
            <Icon
              onPress={this.props.onClosePress}
              style={[styles.icon,{color: myColors.defaultPrimaryColor, fontSize: 20, marginLeft: 15}]}
              name="close"
            ></Icon>
          </View>

          <View style={styles.containerItemChild}>
            <Text style={[styles.text, styles.text1]}>
              {this.props.item.price}
              <Text>đ</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.containerItemChild}>
              <Icon
                onPress={() =>  this.props.getTotal(this.props.item,this.props.index,'minus')}
                style={[
                  styles.icon,
                  styles.icons,
                  { opacity: this.state.opacity },
                ]}
                name="minus"
              ></Icon>
              <Text style={[styles.icon, { fontSize: 20, color: myColors.defaultPrimaryColor }]}>
                {this.props.item.count}
              </Text>
              <Icon
                onPress={() =>  this.props.getTotal(this.props.item,this.props.index,'plus')}
                style={[styles.icon, styles.icons]}
                name="plus"
              ></Icon>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    height: Dimensions.get("window").height / 5,
    borderColor: "#d5d5d5",
  },
  containerItem: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 15
  },
  containerItemChild: {
    flexDirection: "row",
    marginVertical: 5
  },
  content: {
    fontSize: 15,
    textAlign: "left",
  },
  icon: {
    width: 25,
    height: 25,
    textAlign: "center",
    color: '#fff'
  },
  img: {
    height: "100%",
    width: 100,
  },
  text: {
    textAlign: "left",
    width: "100%",
  },
 
  pro: {
    opacity: 0.6,
  },
  icons: {
    backgroundColor: myColors.defaultPrimaryColor,
    fontSize: 25,
  },
});
