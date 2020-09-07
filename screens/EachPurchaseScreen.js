import React from "react";
import { View, FlatList, AsyncStorage } from "react-native";
import { func } from "prop-types";
import PurchaseItem from "../components/PurchaseItem";
import { firebaseApp } from "../components/FirebaseConfig";
export default class EachPurchaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      email: "",
      password: "",
    };
  }
  getUsKey = async () => {
    var keyUser = "";
    await firebaseApp
      .database()
      .ref("/User/")
      .orderByChild("Email")
      .equalTo(this.state.email)
      .on("value", (snap) => {
        snap.forEach((element) => {
          if (element.val().Password === this.state.password) {
            keyUser = element.key;
          }
        });
      });
    return keyUser;
  };
  getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      var us = JSON.parse(data);
      this.state.email = us.Email;
      this.state.password = us.Password;
      this.setState({
        password: this.state.password,
      });
      this.setState({
        email: this.state.email,
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  componentDidMount = async () => {
    await this.getToken();
    await this.defaultLoad();
  };
  defaultLoad = async () => {
    var keyUser = await this.getUsKey();
    console.log(keyUser);
    firebaseApp
      .database()
      .ref("/User/" + keyUser + "/Order/")
      .on("value", (dat) => {
        dat.forEach((e) => {
          var pro = {
            key: "",
            Total: "",
            date: "",
            img:
              "https://firebasestorage.googleapis.com/v0/b/haruko-a9264.appspot.com/o/Haruko%20Bracelet%2Fharuko_bracelet3.jpg?alt=media&token=c6e1fa64-1d8e-4187-8759-6a4f070ecfeb",
          };
          pro.key = e.key;
          pro.Total = e.val().Total;
          pro.date = e.val().date;
            console.log(e.val.Total);
          this.state.orderList.push(pro);
        });
        this.setState({
          orderList: this.state.orderList,
        });
      });
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.orderList}
          renderItem={({ item }) => {
            return <PurchaseItem item={item} />;
          }}
        />
      </View>
    );
  }
}
