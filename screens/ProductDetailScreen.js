import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ProductTitle from "../components/ProductTitle";
import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import AppBottomNavigation from "../components/AppBottomNavigation";
import { myColors } from "../assets/myColors";
export default class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    title: "SecondActivity",
  };
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
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
  render() {
    const { navigation } = this.props;
    const item = {
      image: navigation.getParam("image", "NO-User"),
      content: navigation.getParam("content", "NO-User"),
      sale: navigation.getParam("sale", "NO-User"),
      price: navigation.getParam("price", "NO-User"),
      sold: navigation.getParam("sold", "NO-User"),
    };
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 5 }}>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.cateData}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={300}
            />
          </View>
          <View>
            <ProductTitle item={item} />
          </View>

          <ProductDetail />
          <View style={styles.containerItem} >
            <Text style={styles.title}>Same</Text>
            <FlatList
              data={this.state.conData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return <Product item={item} />;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.dividerColor,
    flexDirection: "row",
  },
  containerItem: {
    flexDirection: "column",
    marginVertical: 8,
    backgroundColor:'#fff'
    
  },
  title: {
    fontSize: 20,
    marginVertical: 4,
    textTransform: "uppercase",
    color: myColors.defaultPrimaryColor,
  },
});
