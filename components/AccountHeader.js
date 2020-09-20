import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { myColors } from "../assets/myColors";

export default class AccountHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      displayName: "",
      email: "",
      check: false,
    };
  }
  componentDidMount() {
    this.state.email = this.props.data.email;
    this.state.status = this.props.data.status;
    this.state.displayName = this.props.data.displayName;

    this.setState({
      status: this.state.status,
      email: this.state.email,
    });
  }
ooo=()=>{
  this.props.click();
}
  render() {
  
    return (
      <View style={styles.container}>
        {}
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: "http://lorempixel.com/50/50/" }}
            />
          </View>
          {this.props.data.status === "true" ? (
            <View>
              <Text style={styles.name}>{this.props.data.displayName}</Text>
              <Text style={styles.email}>{this.props.data.email}</Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                this.props.login();               
                }}
              >
                <View
                  style={[
                    styles.button,
                    {
                      backgroundColor: "#fff",
                      color: myColors.defaultPrimaryColor,
                    },
                  ]}
                >
                  <Text style={{ color: myColors.defaultPrimaryColor }}>
                    Log In
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUpScreen")}
              >
                <View style={styles.button}>
                  <Text style={{ color: "#fff" }}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.defaultPrimaryColor,
    height: 70,
    flexDirection: "column-reverse",
    padding: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    margin: 2,
  },
  email: {
    color: "#FFF",
    margin: 2,
  },
  button: {
    width: 80,
    borderColor: "#fff",
    paddingVertical: 5,
    borderWidth: 1,
    height: 30,
    margin: 5,
    textAlign: "center",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
