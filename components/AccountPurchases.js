import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { myColors } from "../assets/myColors";

export default function AccountPurchases(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          let userStatus = await AsyncStorage.getItem("status");
          if (userStatus === "false") {
            props.navigation.navigate("LoginScreen");
          } else {
            props.navigation.navigate("PurchaseScreen");
          }
        }}
      >
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <View style={[styles.containerChild]}>
            <Icon
              name="clipboard-text-outline"
              color={myColors.defaultPrimaryColor}
              style={styles.clipBoard}
            />
            <Text style={{ fontSize: 15 }}>My Purchases</Text>
          </View>
          <View
            style={[styles.containerChild, { flexDirection: "row-reverse" }]}
          >
            <AntDesign name="right" style={{ fontSize: 20, opacity: 0.6 }} />
            <Text style={{ fontSize: 13, opacity: 0.8 }}>
              View Purchase History
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.devider} />
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  clipBoard: {
    fontSize: 30,
    marginRight: 15,
  },
  containerChild: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  devider: {
    height: 1,
    backgroundColor: myColors.dividerColor,
    opacity: 0.5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    fontSize: 40,
    fontWeight: "100",
  },
  star: {
    borderRadius: 25,
    borderColor: "#000",
    borderWidth: 2,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  containerIcon: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
