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
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import ProductCartAppBar from "../components/ProductCartAppBar";

import ProductCartItem from "../components/ProductCartItem";
export default class ProductCartScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          content: "",
          price: "",
          count: "2",
          img: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
        },
        {
          content: "b",
          price: "5",
          count: "9",
          img: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
        },
      ],
      total: "",
      getTotal: this.getTotal.bind(this),
      countPro: [],
    };
  }

  componentDidMount() {}
  getTotal = (val) => {
    this.state.total = val;

    this.setState({
      total: val,
    });
    let hh = [];
    hh.push(this.state.total);
    this.state.countPro.push(this.state.count);
    this.setState({
      countPro: this.state.countPro,
    });
    console.log(hh);
  };

  render() {
    return (
      <View style={styles.container}>
        <ProductCartAppBar />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.product}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ProductCartItem
                  item={item}
                  onClosePress={(item) => {
                    const filteredData = this.state.product.filter(
                      (item) => item !== item
                    );
                    this.setState({ product: filteredData });
                  }}
                  getTotal={this.getTotal}
                />
              );
            }}
          />
          <TouchableHighlight
            underlayColor="#00EEFF"
            style={styles.btn}
            onPress={() => {
              console.log(this.state.count);
            }}
          >
            <Text style={styles.text}>Buy Now</Text>
          </TouchableHighlight>
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
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    textAlignVertical: "center",
    height: 50,
  },
});
