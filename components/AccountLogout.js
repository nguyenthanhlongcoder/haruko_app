import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,AsyncStorage } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { myColors } from "../assets/myColors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function AccountLogout() {
  return (
    <TouchableOpacity
      onPress={async () => {
        try {       
          await AsyncStorage.setItem("status", 'false');
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }}
    >
      <View>
        <View style={styles.containerChild}>
          <View style={styles.containerLeft}>
            <MaterialIcons
              name="person"
              style={styles.icon}
              color={myColors.defaultPrimaryColor}
            />
            <Text style={styles.name}>Logout</Text>
          </View>
          <AntDesign name="right" style={styles.rightIcon} />
        </View>
        <View style={styles.devider} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerChild: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 25,
    margin: 15,
  },
  name: {
    fontSize: 15,
  },
  devider: {
    height: 1,
    backgroundColor: myColors.dividerColor,
    opacity: 0.5,
    marginLeft: 10,
  },
  rightIcon: {
    fontSize: 20,
    opacity: 0.6,
    marginRight: 10,
  },
});
