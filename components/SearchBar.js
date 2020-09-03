import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { myColors } from "../assets/myColors";

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={styles.inputGroup}>
        <Icon style={{width:'20%',textAlign:"center",height:'100%',fontWeight:10,fontSize:35}} name="search1" color="#000" />
          <TextInput style={styles.input}
          placeholder='Search hear ...' />
        </View>
        <View style={styles.icons}>
          <Icon onPress={props.onChatPress} style={styles.icon} name="message1" color="#fff" />
          <Icon onPress={props.onPress} style={styles.icon} name="shoppingcart" color="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: myColors.defaultPrimaryColor,
  },
  header: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
  },
  icons: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  icon: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  input: {
    width: '80%',
    backgroundColor: "#fff",
    height: 40
    ,height:'100%'
    ,paddingLeft:6
  },
  inputGroup: {
    width: 200,
    borderColor: "gray",
    backgroundColor: "#fff",
    height: 40,
    position:'absolute',
    left:50,
    
    flexDirection: "row-reverse",
  },
});
