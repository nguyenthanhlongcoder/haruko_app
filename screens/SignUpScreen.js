import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
import MySatatusBar from "../components/MyStatusBar";
import AppBarLight from "../components/AppBarLight";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { myColors } from "../assets/myColors";
import { ValidCheck } from "../components/ValidCheck";
import { PushData } from "../components/PushData";
export default function SignUpScreen({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    phone:'',
    address:'',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
    errorMessage: null,
    displayName: "",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <MySatatusBar />
      <AppBarLight navigation={navigation} />
      <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                email: val,
                isValidUser: val !== "" ? true : false,
              });
            }}
          />
        </View>
        <View style={styles.divider} />
        <Text style={[styles.text_footer,{marginTop: 35}]}>Display Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Display Name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                displayName: val,
                isValidUser: val !== "" ? true : false,
              });
            }}
          />
        </View>
        <View style={styles.divider} />
        <Text style={[styles.text_footer,{marginTop: 35}]}>Address</Text>
        <View style={styles.action}>
          <FontAwesome name="map-marker" color="#05375a" size={20} />
          <TextInput
            placeholder="You Address"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
               address: val,
                isValidUser: val !== "" ? true : false,
              });
            }}
          />
        </View>
        <View style={styles.divider} />
        <Text style={[styles.text_footer,{marginTop: 35}]}>Phone</Text>
        <View style={styles.action}>
          <FontAwesome name="mobile-phone" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Phone Number"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                phone: val,
                isValidUser: val !== "" ? true : false,
              });
            }}
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
               
              });
            }}
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
         Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                isValidPassword: val !==data.password ? false : true,
              });
            }}
          />
        </View>

        <View style={styles.divider} />

        <Text
        
          style={[
            styles.button,
            data.isValidUser && data.isValidPassword
              ? { backgroundColor: myColors.defaultPrimaryColor }
              : null,
          ]}
          onPress={async () => {
            if (
              ValidCheck.checkMailVail &&
              ValidCheck.checkPassValid(data.password)
            ) {
              if (!(await ValidCheck.checkEmailExists(data.email))) {
                var user={
                  Email:data.email,
                  Password:data.password,
                  DisplayName:data.displayName,
                  Address:data.address,
                  Phone:data.phone,
                }
                await PushData.SignUp(user)

                navigation.navigate('LoginScreen');
              } else {
                Alert.alert("exist Email");
              }
            } else {
              Alert.alert("not asaad");
            }
          }}
        >
          Sign Up
        </Text>
        </ScrollView>
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
