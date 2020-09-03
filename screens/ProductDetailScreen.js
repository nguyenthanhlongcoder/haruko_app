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
  Platform
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ProductTitle from "../components/ProductTitle";
import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import AppBarLight from '../components/AppBarLight';
import { myColors } from "../assets/myColors";
import MyStatusBar from '../components/MyStatusBar';

export default class ProductDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: item = this.props.route.params,
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
    const { width } = Dimensions.get('window');
    const { navigation } = this.props;
    item = this.props.route.params
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppBarLight title='' navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={styles.divider}/>
          <ProductDetail item={this.state.item} />
          <View style={styles.containerItem}>
            <Text style={styles.title}>Similar Products</Text>
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

        {Platform.OS==='ios'?
        <Text style={styles.button}>Add to Cart</Text>:
        <Button title="Add to Cart" color={myColors.defaultPrimaryColor}/>}
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
    backgroundColor: myColors.dividerColor
  },
  title: {
    margin: 15,
    fontWeight: "bold"
  },
  divider: {
    height: 10,
    backgroundColor: myColors.dividerColor,
  },
  button:{
    width: Dimensions.get('window').width,
    backgroundColor: myColors.defaultPrimaryColor,
    fontSize: 20,
    textAlign: "center",
    color: myColors.textPrimaryColor,
    padding: 10,
    shadowColor: '#000',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: -3
  }
});
