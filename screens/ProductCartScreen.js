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
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          content: "",
          price: "3",
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
      total:0,
      getTotal: this.getTotal.bind(this),
      countPro: [],
    };
  }

  componentDidMount() {
    let total=0
    this.state.product.forEach(element => {
      total=total+element.count*element.price
    });
    this.state.total=total;
    this.setState({total:this.state.total});
   
  }
  getTotal = (item, index, style) => {
    if (style === "minus") {
      if (this.state.product[index].count > 1) {
        this.state.product[index].count =
          parseInt(this.state.product[index].count) - 1;
      }
    } else {
      this.state.product[index].count =
        parseInt(this.state.product[index].count) + 1;
    }
    this.setState({ product: this.state.product });
    this.componentDidMount()
  };
  removeItem = (item, ind) => {
    this.state.product.splice(ind, 1);
    this.setState({ product: this.state.product });
    this.componentDidMount()
  };
  render() {
    return (
      <View style={styles.container}>
        <ProductCartAppBar />
        <ScrollView>
          <View>
            <FlatList
              data={this.state.product}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ProductCartItem
                    item={item}
                    index={index}
                    onClosePress={() => this.removeItem(item, index)}
                    getTotal={this.getTotal}
                  />
                );
              }}
            />
          </View>
          <View style={styles.total}>
            <Text style={styles.totalContent}>{this.state.total}
            <Text>đ</Text>
            </Text>
          </View>
        </ScrollView>
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
  totalContent: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    color:myColors.textPrimaryColor
     },
     total: {
      width: Dimensions.get("window").width,
      backgroundColor: "red",
      height:Dimensions.get("window").width/10,
 
      },
});
