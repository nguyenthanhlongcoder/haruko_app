import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  FlatList,
  Image,
  ScrollView,
  ListView,
  Dimensions,
  TouchableHighlight,
  TextInput
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCartAppBar from "../components/ProductCartAppBar";

import ProductCartItem from "../components/ProductCartItem";
import { Input } from "react-native-elements";
export default class ChatScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View>
            <FlatList

            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Aa'
                style={styles.input}
            />
            <View style={styles.btnSend}>
            <Icon  name='send'/>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: myColors.defaultPrimaryColor,
    width: Dimensions.get("window").width,
    height: 50,
  },

  inputContainer:{
      flexDirection:'row'
      ,width:Dimensions.get('window').width
      ,height:Dimensions.get('window').height/7
      ,borderTopWidth: 20,
      borderTopColor: "#d5d5d5d5",
      padding: 10,
  }
  ,outputContainer:{
    flex:1,
}
,btnSend:{
color:myColors.defaultPrimaryColor
,fontSize: 25,
flex:1
,textAlign:'center'
,textAlignVertical:'center'
,height:50
}
,input:{
   
    borderWidth:1
    ,borderColor:'#d5d5d5d5'
    ,flex:5
    ,marginLeft:20
    ,fontSize: 15,
    textAlignVertical:'center',
    height:50,
    alignContent:'center',
    paddingLeft: 5,
}
});
