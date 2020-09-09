import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert,AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { myColors } from "../assets/myColors";

export default function SearchBar(props) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.inputGroup}>
          <Icon name="search1" color='#999999' style={styles.searchIcon} />
          <TextInput style={styles.input}
            placeholder='Search here ...'
            onChangeText={text => {
              setText(text);
              props.onSearch(text)
            }}
            defaultValue={text} />
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={async() => {
                     let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                       Alert.alert('The feature is in development :)')
                    }
                    }}>
          <Icon onPress={props.onChatPress} style={styles.icon} name="message1" color="#fff" />

          </TouchableOpacity>
          <TouchableOpacity onPress={props.onPress}>
          <Icon style={styles.icon} name="shoppingcart" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
    width: '90%',
    backgroundColor: "#fff",
    height: 40,
    height: '100%',
    paddingLeft: 6,
  },
  inputGroup: {
    flex: 2,
    padding: 5,
    width: '70%',
    borderColor: "gray",
    backgroundColor: "#fff",
    alignItems: 'center',
    position: 'absolute',
    flexDirection: "row",
    borderRadius: 2
  },
  searchIcon: {
    fontSize: 25,
  }
});
