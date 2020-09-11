import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontEntypo from "react-native-vector-icons/Entypo";
import { myColors } from "../assets/myColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      detailHeight: 0,
      containerHeight: 0,
      iconName: "down",
    };
  }

  popupDetail() {
    if (this.state.containerHeight === 0) {
      this.setState({
        containerHeight: 100,
        detailHeight: 100,
        iconName: "up",
      });
    } else {
      this.setState({
        containerHeight: 0,
        detailHeight: 0,
        iconName: "down",
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Detail</Text>
        <View style={styles.divider} />
        <View style={styles.containerItem}>
          <Text style={styles.type}>Stock</Text>
          <Text style={styles.content}>10</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.type}>Màu Sắc</Text>
          <Text style={styles.content}>Nhiều Màu</Text>
        </View>

        <View style={styles.containerItem}>
          <Text style={styles.type}>Bảo Hành</Text>
          <Text style={styles.content}>18 Tháng</Text>
        </View>
        <View
          style={
            (styles.containerItem,
              { height: this.state.containerHeight, backgroundColor: "#fff" })
          }
        >
          <Text
            style={{
              textAlign: "justify",
              height: this.state.detailHeight,
              position: "relative",
              paddingHorizontal: 15
            }}
          >
            {this.props.item.description}
          </Text>
        </View>
        <View
          onTouchEnd={() => {
            this.popupDetail();
          }}
          style={styles.containerItem}
        >
          <Icon
            style={{ textAlign: "center", width: "100%", fontSize: 25 }}
            name={this.state.iconName}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    backgroundColor: "#fff",

  },
  title: {
    fontSize: 15,
    margin: 15,
    fontWeight: "bold"
  },
  containerItem: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15
  },
  type: {
    flex: 1,
    fontSize: 15,
    color: 'rgb(128,128,128)'
  },
  content: {
    flex: 2,
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: myColors.dividerColor
  }
});
