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
        <View style={styles.containerItem}>
          <MaterialCommunityIcons style={styles.icon} name="warehouse" />
          <Text style={[styles.content, { flex: 1 }]}>Storage</Text>
          <Text style={styles.callNow}>1972</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.containerItem}>
          <FontEntypo style={styles.icon} name="app-store" />
          <Text style={[styles.content, { flex: 1 }]}>Trademark</Text>

          <Text style={styles.callNow}>Haruko</Text>
          <Icon
            style={{ textAlign: "right", fontSize: 25, opacity: 0.5 }}
            name="right"
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.containerItem}>
          <Icon style={styles.icon} name="mail" />
          <Text style={[styles.content, { flex: 1 }]}>From</Text>
          <Text style={styles.callNow}>Haruko shop</Text>
        </View>
        <View style={styles.divider} />
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
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
    textTransform: "uppercase",
    color: myColors.defaultPrimaryColor,
  },
  containerItem: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
    fontSize: 20,
  },
  content: {
    fontSize: 15,
  },
  callNow: {
    flex: 1,
    textAlign: "right",
    color: myColors.defaultPrimaryColor,
    fontSize: 15,
  },
  divider: {
    height: 2,
    backgroundColor: myColors.dividerColor,
  },
});
