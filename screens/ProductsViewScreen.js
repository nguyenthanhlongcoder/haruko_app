import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import SearchBar from "../components/SearchBar";
import MyStatusBar from "../components/MyStatusBar";
import { firebaseApp } from "../components/FirebaseConfig";
import Icon from "react-native-vector-icons/Foundation";
import { element } from "prop-types";

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
          product.avatar = element.val().Avatar;
          product.category = element.val().Category;
          Productlist.push(product);
        });

        this.setState({ data: catelist, product: Productlist });
        
      });
      console.log(this.state.product)
  };
  onCateItemPress = (item, ind) => {
    var Productlist = [];
  
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

    console.log(this.state.data[ind].isChecked);
    firebaseApp
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
            avatar:'',
          
          };
          if (element.val().Category === item.Title) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
            
            Productlist.push(product);
          
          }
          if (item.Title === "ALL") {
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
        <SearchBar onSearch={this.search} onPress={() => this.props.navigation.navigate("LoginScreen")} />
        <View
          onTouchEnd={() => {
            if (
              this.state.iconName === "right" &&
              this.state.cateListHeight === 0
            ) {
              this.setState({
                iconName: "down",
                cateListHeight: Dimensions.get("window").height / 8,
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
          <Text style={{ fontSize: 25, opacity: 0.7 }}>Category</Text>
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
            // onScrollAnimationEnd={() => {
            //   this.refs.cateList.scrollTop;
            // }}
            renderItem={({ item, index }) => {
              return (
                <CategoryItem
                  onPress={() => {
                    this.onCateItemPress(item, index);
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
                
                onPress={() =>
                {
                  this.props.navigation.navigate("ProductDetailScreen", item)
                 
                  }
                }
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
