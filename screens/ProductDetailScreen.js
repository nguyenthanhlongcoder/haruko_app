import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
  Image,
  Button,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ProductTitle from "../components/ProductTitle";
import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import AppBarLight from "../components/AppBarLight";
import { myColors } from "../assets/myColors";
import MyStatusBar from "../components/MyStatusBar";
import { firebaseApp } from "../components/FirebaseConfig";
export default class ProductDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: (item = this.props.route.params),
      conData: [
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "45%",
          price: 18000,
          sold: 8,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "40%",
          price: 16000,
          sold: 7,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "45%",
          price: 18000,
          sold: 8,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "40%",
          price: 16000,
          sold: 7,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "",
          price: 18000,
          sold: 8,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "40%",
          price: 16000,
          sold: 7,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "45%",
          price: 18000,
          sold: 8,
        },
        {
          url: require("../assets/favicon.png"),
          content: "ogre",
          sale: "",
          price: 16000,
          sold: 7,
        },
      ],
      cateData: [
        {
          url: "https://cf.shopee.vn/file/6dedd68aa6b73f3b8d5726fb0921a6d2",
          content: "Bracelet",
        },
        {
          url: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
          content: "Doll",
        },
        {
          url: "https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
          content: "Hat",
        },
        {
          url: "https://cf.shopee.vn/file/f65adf2f5b6912dc102a74c2acad840c",
          content: "Lantern",
        },
      ],
      product: [],
     
    };
    this.defaultLoadData();
  }
  defaultLoadData = () => {
    let Productlist = []; 
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
          };
          if (element.val().Category === this.state.item.category) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
            Productlist.push(product);
          }
        });
        this.state.product = Productlist;
        this.setState({ product: this.state.product });
      });
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ justifyContent: "center" }}>
        <Image
          style={{ height: 200, width: "100%" }}
          source={{ uri: item.url }}
        />
      </View>
    );
  };
  reload(item)
  {
    this.state.item=item;
    this.setState({item:this.state.item});
    this.refs._scrollView.scrollTo(0);
  }
  render() {
    const { width } = Dimensions.get("window");
    const { navigation } = this.props;
    item = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppBarLight onPress={() => this.props.navigation.navigate("ProductCartScreen")} title="" navigation={navigation} />
        <ScrollView ref='_scrollView' showsVerticalScrollIndicator={false}>
          <View>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.cateData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
            />
          </View>
          <ProductTitle item={this.state.item} />
          <View style={styles.divider} />
          <ProductDetail item={this.state.item} />
          <View style={styles.containerItem}>
            <Text style={styles.title}>Similar Products</Text>
            <FlatList
              data={this.state.product}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <Product
                    item={item}
                    onPress={() =>
                      this.reload(item)
                    }
                  />
                );
              }}
            />
          </View>
        </ScrollView>

        {Platform.OS === "ios" ? (
          <Text style={styles.button}>Add to Cart</Text>
        ) : (
          <Button title="Add to Cart" color={myColors.defaultPrimaryColor} onPress={()=>{this.props.navigation.navigate("ProductCartScreen",this.state.item)}} />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerItem: {
    flexDirection: "column",
    backgroundColor: myColors.dividerColor,
  },
  title: {
    margin: 15,
    fontWeight: "bold",
  },
  divider: {
    height: 10,
    backgroundColor: myColors.dividerColor,
  },
  button: {
    width: Dimensions.get("window").width,
    backgroundColor: myColors.defaultPrimaryColor,
    fontSize: 20,
    textAlign: "center",
    color: myColors.textPrimaryColor,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: -3,
  },
});
