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
import { GetData } from "../components/GetData";

export default class ProductsViewScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      iconName: "right",
      cateListHeight: 0,
      cateGory: [],
    };
  }
  componentWillMount =async() => {
  await this.defaultLoadData();
  };
  defaultLoadData = async () => {
    this.setState({
      product: await GetData.getProduct(),
      data:await GetData.getCategory(),
     
    });
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
            onScrollAnimationEnd={() => {
              this.refs.cateList.scrollTop;
            }}
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
