import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from "react-native";
import { myColors } from "../assets/myColors";
import ProductCartAppBar from "../components/ProductCartAppBar";
import ProductCartItem from "../components/ProductCartItem";
import { GetData } from "../modal/GetData";
import {ModalCart} from "../modal/ModalCart"
import {ModalOrder} from "../modal/ModalOrder"
export default class ProductCartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      total: 0,
      getTotal: this.getTotal.bind(this),
      countPro: [],
      email: '',
      password: '',

    };
  }
  defaultLoadData = async () => {

    this.state.product = []
    var keyUser = await GetData.getUsKey(this.state.email, this.state.password);
   
 
        this.setState({ product: await ModalCart.getCart(keyUser) });
        this.setTotal();
     

  };
  getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      var us = JSON.parse(data);
      this.state.email = us.Email
      this.setState({ email: this.state.email })
      this.state.password = us.Password;
      this.setState({ password: this.state.password })

    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      var us = JSON.parse(data);
      this.state.email = us.Email
      this.setState({ email: this.state.email })
      this.state.password = us.Password;
      this.setState({ password: this.state.password })

    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  componentWillMount = async () => {

    await this.getToken();
    await this.defaultLoadData();
    this.setTotal()
  }
  getTotal = async (item, index, style) => {

    if (style === 'plus') {

      this.state.product[index].count = this.state.product[index].count + 1
      
    }
    else {
      if (this.state.product[index].count >= 1) {
        this.state.product[index].count = this.state.product[index].count - 1
      }
    }
    this.setState({ product: this.state.product })
    var keyUser = await GetData.getUsKey(this.state.email, this.state.password);
    var listPro = []
    this.state.product.forEach(e => {
      var pro = {
        Title: '',
        Quantity: '',
        Price: '',
        Avatar: ''
      }
      pro.Title = e.content;
      pro.Quantity = e.count;
      pro.Price = e.price;
      pro.Avatar = e.img;
      listPro.push(pro)

    })
    this.state.product = []
    await ModalCart.updateCart(keyUser,item.content,listPro[index])
    this.defaultLoadData()
  }

  removeItem = async (item, ind) => {
    var keyUser = await GetData.getUsKey(this.state.email, this.state.password);
    if (typeof (keyUser) !== 'undefined') {
      await ModalCart.removeCartItem(keyUser,item.content)
      this.defaultLoadData()
      this.setTotal();
    }
  }
  setTotal() {
    let total = 0
    this.state.product.forEach(element => {
      total = total + element.count * element.price
    });
    this.state.total = total;
    this.setState({ total: this.state.total });

  }
  createOrder= async()=>{
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
    var addressUser=await GetData.getUsAddress(this.state.email,this.state.password);
    var phoneUser=await GetData.getUsPhone(this.state.email,this.state.password);
    if(this.state.product.length>0){
      if (typeof(keyUser)!== 'undefined')
    {
        
          var date= new Date();
          var Total= this.state.total
          var DateTime=date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+"-"+date.getDate();
         
        
           this.state.product.forEach(elm=>{
            var product={
            Title:'',
            Quantity:'',
            Price:'',
            DateTime:DateTime,
            Avatar:'' ,
            Phone:phoneUser,
            Address:addressUser
            }
            product.Title=elm.content,
            product.Avatar=elm.img,
            product.Quantity=elm.count,
            product.Price=elm.price*elm.count,
            ModalOrder.creteOrder(keyUser,product);
         });
        ModalCart.removeCart(keyUser);       
        this.componentWillMount();
        this.props.navigation.navigate("ProductsViewScreen")
      }
    }
    else {
      Alert.alert('Cart Is Null !!!');
      this.props.navigation.navigate("ProductsViewScreen")
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <ProductCartAppBar navigation={this.props.navigation} />
        <ScrollView>
          <View>
            <FlatList
              data={this.state.product}
              keyExtractor={(item) => item.content}
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
            <Text style={styles.totalContent}><Text style={{color: myColors.defaultPrimaryColor}}>Total Price: </Text>{this.state.total}
              <Text style={{color: myColors.defaultPrimaryColor}}> đ</Text>
            </Text>
          </View>
        </ScrollView>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => {
            this.createOrder();
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
    backgroundColor: myColors.accentColor,
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
    textAlign: "right",
    justifyContent: 'center',
    padding: 10,
    fontSize: 20,
    paddingRight: 10,
    color: myColors.accentColor
  },
  total: {
    width: Dimensions.get("window").width,
    backgroundColor: myColors.lightPrimaryColor,
    
  },
});
