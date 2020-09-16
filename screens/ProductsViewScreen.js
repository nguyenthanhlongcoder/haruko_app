import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  FlatList,
  Dimensions,
  AsyncStorage,
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import SearchBar from "../components/SearchBar";
import MyStatusBar from "../components/MyStatusBar";
import Icon from "react-native-vector-icons/Foundation";
import { GetData } from "../modal/GetData";
import {firebaseApp} from '../components/FirebaseConfig';
export default class ProductsViewScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      iconName: "right",
      cateListHeight: 0,
      cateGory: [],
    };
  }
  componentDidMount() {
    console.log( this.props)
    this.defaultLoadData();
  }
  defaultLoadData = () => {
    let catelist = [
      {
        Title: "ALL",
        isChecked: true,
      },
    ];
    let Productlist = [];
    firebaseApp
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Category").forEach((element) => {
          var cate = {
            Title: "",
            isChecked: false,
          };
          cate.Title = element.val().Title;
          catelist.push(cate);
        });
        data.child("Product").forEach((element) => {
          var product = {
            content: "",
            content: "",
            price: "",
            sold: 8,
            category: "",
            description: "",
            avatar: ''
          };

          product.content = element.val().Title;
          product.price = element.val().Price;
          product.description = element.val().Description;
          product.avatar = element.val().Avatar;
          product.category = element.val().Category;
          Productlist.push(product);
        });

        this.setState({ data: catelist, product: Productlist });
        
      });
      console.log(this.state.product)
  };
  onCateItemPress = async (item, ind) => {
    for (var i = 0; i < this.state.data.length; i++) {
      if (i === ind) {
        this.state.data[ind].isChecked = true;
      } else {
        this.state.data[i].isChecked = false;
      }
    }

    this.setState({
      data: this.state.data,
    });
    this.setState({ product: await GetData.getProductByCate(item.Title) });
  };
  search = async (inputText) => {
    this.setState({ product: await GetData.getProductByName(inputText) });
  };
search=(inputText)=>{
  var Productlist = [];
  firebaseApp
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Product").forEach((element) => {
          var product = {
            content: "",
            price: "",
            category: "",
            description: "",
            avatar:'',
           
          };
          if (element.val().Title.toUpperCase().search(inputText.toUpperCase())!=-1) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
           
            Productlist.push(product);
          
          }
        });
        this.setState({ product: Productlist });
      });

}
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar />
        <SearchBar
          onSearch={this.search}
          onPress={async () => {
            let userStatus = await AsyncStorage.getItem("status");
            if (userStatus === "false") {
              this.props.navigation.navigate("LoginScreen");
            } else {
              this.props.navigation.navigate("ProductCartScreen");
            }
          }}
        />
        <View
          onTouchEnd={() => {
            if (
              this.state.iconName === "right" &&
              this.state.cateListHeight === 0
            ) {
              this.setState({
                iconName: "down",
                cateListHeight: Dimensions.get("window").height / 9,
              });
            } else {
              this.setState({ iconName: "right", cateListHeight: 0 });
            }
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            backgroundColor: "#fff",
            justifyContent: "center",
          }}
        >
          <Icon
            name="list-bullet"
            size={25}
            color={myColors.defaultPrimaryColor}
            style={{ marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 20, opacity: 0.7 }}>Category</Text>
          <IconAntDesign
            name={this.state.iconName}
            style={{ fontSize: 20, flex: 1, textAlign: "right" }}
          />
        </View>
        <View style={{ height: this.state.cateListHeight, width: "100%" }}>
          <FlatList
            horizontal={true}
            data={this.state.data}
            ref="cateList"
           
            renderItem={({ item, index }) => {
              return (
                <CategoryItem
                  onPress={async () => {
                    await this.onCateItemPress(item, index);
                  }}
                  item={item}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
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
                onPress={() => {
                  this.props.navigation.navigate("ProductDetailScreen", item);
                }}
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
    flexDirection: "column",
  },
  scrollViewStyle: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
