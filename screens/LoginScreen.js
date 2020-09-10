import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import MySatatusBar from "../components/MyStatusBar";
import AppBarLight from "../components/AppBarLight";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { myColors } from "../assets/myColors";
import { set } from "react-native-reanimated";
import { firebaseApp } from "../components/FirebaseConfig";
export default function LoginScreen({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
    errorMessage: null,
    useData: {},
  });
  React.useEffect(() => {
    getToken();
  })
  const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
      await AsyncStorage.setItem("status", 'true');
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  const getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log('DATA' + data);

    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  const checkAccount = () => {
    console.log("check" + data.email);
    firebaseApp
      .database()
      .ref("/User/")
      .orderByChild("Email")
      .equalTo(data.email)
      .on("value", (snap) => {
        snap.forEach((element) => {
          if (element.val().Password === data.password) {
            storeToken(JSON.stringify(element));
            navigation.goBack();

          }
        });
      });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MySatatusBar />
      <AppBarLight navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) =>
              setData({
                ...data,
                email: val,
                isValidUser: val !== "" ? true : false,
              })
            }
          />
        </View>

        <View style={styles.divider} />

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                password: val,
                isValidPassword: val !== "" ? true : false,
              });
            }}
          />
          <TouchableOpacity
            onPress={() =>
              setData({
                ...data,
                secureTextEntry: !data.secureTextEntry,
              })
            }
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <Text
          onPress={() => {
            checkAccount();
          }}
          style={[
            styles.button,
            data.isValidUser && data.isValidPassword
              ? { backgroundColor: myColors.defaultPrimaryColor }
              : null,
          ]}
        >
          Log In
        </Text>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.bottomText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },

  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },

  button: {
    textAlign: "center",
    width: "100%",
    backgroundColor: myColors.dividerColor,
    padding: 10,
    marginTop: 20,
    color: "#fff",
  },

  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },

  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: myColors.dividerColor,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  bottomText: {
    color: myColors.defaultPrimaryColor,
  },
});
