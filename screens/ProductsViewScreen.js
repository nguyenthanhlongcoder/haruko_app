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
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import SearchBar from "../components/SearchBar";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDAmGvye9SLix7xP1FNMQbpsDcy_2kaY-c",
  authDomain: "haruko-a9264.firebaseapp.com",
  databaseURL: "https://haruko-a9264.firebaseio.com",
  projectId: "haruko-a9264",
  storageBucket: "haruko-a9264.appspot.com",
  messagingSenderId: "711513292291",
  appId: "1:711513292291:web:71f9ff030d5c36dd96d836",
  measurementId: "G-H5YMWBJ9EQ",
};
firebase.initializeApp(firebaseConfig);

export default class ProductsViewScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      iconName: "right",
      cateListHeight: 0,
    };
  }
  componentDidMount() {
    this.defaultLoadData();
  }
  defaultLoadData = () => {
    let catelist = [];
    let Productlist = [];
    firebase
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Category").forEach((element) => {
          var cate = {
            Title: "",
          };
          cate.Title = element.val().Title;
          catelist.push(cate);
        });
        data.child("Product").forEach((element) => {
          var product = {
            content: "",
            image: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
            content: "",
            price: "",
            sold: 8,
            category: "",
            description: "",
          };

          product.content = element.val().Title;
          product.price = element.val().Price;
          product.description = element.val().Description;

          Productlist.push(product);
        });
        this.setState({ data: catelist, product: Productlist });
      });
  };
  onCateItemPress = (item,index) => {
    let Productlist = [];
    console.log(this.state.data[index])
    firebase
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Product").forEach((element) => {
          var product = {
            content: "",
            image: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
            content: "",
            price: "",
            sold: 8,
            category: "",
            description: "",
          };
          if (element.val().Category === item.Title) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            Productlist.push(product);
          }
        });
        this.setState({ product: Productlist });
      });
     
  };
  _scrollEnd = (evt) => {
    this.refs.flatList1.scrollToEnd();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Product img={require(image)} content={content}/> */}
        <SearchBar
          onPress={() => this.props.navigation.navigate("Third")}
        />
        <View
          onTouchEnd={() => {
            if (
              this.state.iconName === "right" &&
              this.state.cateListHeight === 0
            ) {
              this.setState({
                iconName: "down",
                cateListHeight: Dimensions.get("window").height / 10,
              });
            } else {
              this.setState({ iconName: "right", cateListHeight: 0 });
            }
          }}
          style={{
            flexDirection: "row",
            height: Dimensions.get("window").height / 15,
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, fontSize: 25 }}>Category</Text>
          <IconAntDesign
            name={this.state.iconName}
            style={{ fontSize: 25, flex: 1, textAlign: "right" }}
          />
        </View>
        <View style={{ height: this.state.cateListHeight, width: "100%" }}>
          <FlatList
         
            horizontal={true}
            data={this.state.data}
            ref="cateList"
        onScrollAnimationEnd={()=>{this.refs.cateList.scrollTop}}
            renderItem={({ item,index }) => {
              return (
                <CategoryItem
                  onPress={() => {
                    this.onCateItemPress(item,index);
                  }}
                  item={item}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
          />
        </View>
        <FlatList
          style={{ flex: 1, padding: 2.5 }}
          data={this.state.product}
          numColumns={2}
          keyExtractor={(item, index) => index}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Product
                item={item}
                onPress={() => this.props.navigation.navigate("ProductDetailScreen", item)}
              />
            );
          }}
        />
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
  scrollViewStyle: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
