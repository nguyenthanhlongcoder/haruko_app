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
              style={styles.icon}
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
              <Text style={[styles.icon, { fontSize: 20 }]}>
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
    width: Dimensions.get("window").width - 10,
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    height: Dimensions.get("window").height / 5,
    borderColor: "#d5d5d5",
  },
  containerItem: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10
  },
  containerItemChild: {
    flexDirection: "row",
  },
  content: {
    fontSize: 15,
    textAlign: "left",
    width: "80%",
  },
  icon: {
    width: 25,
    height: 25,
    textAlign: "center",
  },
  img: {
    height: "100%",
    width: 100,
  },
  text: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 10,
  },
 
  pro: {
    opacity: 0.6,
  },
  icons: {
    backgroundColor: "#D5D5D5D5",
    fontSize: 25,
  },
});
