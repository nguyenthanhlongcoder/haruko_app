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
  AsyncStorage,
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import ProductCartAppBar from "../components/ProductCartAppBar";
import { firebaseApp } from "../components/FirebaseConfig";
import ProductCartItem from "../components/ProductCartItem";
import { element } from "prop-types";
import { database } from "firebase";
import { List } from "react-native-paper";
export default class ProductCartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      total:0,
      getTotal: this.getTotal.bind(this),
      countPro: [],
      email:'',
      password:'',
    
    };
  }
  defaultLoadData = async() => {
   
    this.state.product=[]
    var keyUser=await this.getUsKey();
    var list=[]
    firebaseApp
      .database()
      .ref("/User/"+keyUser+'/Cart/')
     .on('value',data=>{
        data.forEach(e=>{
          var pro={
            content:'',
            price:'',
            count:'',
            img: "",

          }
          pro.content=e.val().Title;
          pro.count=e.val().Quantity;
          pro.price=e.val().Price;
          pro.img=e.val().Avatar;
          this.state.product.push(pro);

        })
        this.setState({product:this.state.product})
        this.setTotal();
       }
     );
   
    
  };
  getToken=async (user)=> {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      var us= JSON.parse(data);
      this.state.email=us.Email
     this.setState({email:this.state.email})
     this.state.password=us.Password;
     this.setState({password:this.state.password})
       
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  componentDidMount= async()=> {
  
   await this.getToken();
  await this.defaultLoadData();
   this.setTotal()
  }
  getTotal = async (item, index, style) => {
    var keyUser= await this.getUsKey()
    this.defaultLoadData();
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

    this.setTotal();
    var ListC=[];
    this.state.product.forEach(elm=>{
       var product={
       Title:'',
       Quantity:'',
       Avatar:'',
       Price:'',
      
       }
       product.Title=elm.content,
       product.Quantity=elm.count,
       product.Price=elm.price,
       product.Avatar=elm.img,
       ListC.push(product);
    });
    firebaseApp
      .database()
      .ref("/User/"+keyUser+'/Cart/')
     .push(ListC)
   
  }
  componentWillUnmount=()=>{
   
  }
  removeItem = (item, ind) => {
    this.state.product.splice(ind, 1);
    this.setState({ product: this.state.product });
    firebaseApp
    .database()
    .ref("/User/")
    .orderByChild("Email")
    .equalTo(this.state.email)
    .on("value", (snap) => {
     snap.ref.orderByChild('Password').equalTo(this.state.password).on
     ("value",dat=>
       { 
          dat.ref.child('Cart/'+item.content).remove();
       }
     )
  });
    this.setTotal();
  }
 setTotal() {
    let total=0
    this.state.product.forEach(element => {
      total=total+element.count*element.price
    });
    this.state.total=total;
    this.setState({total:this.state.total});
    
  } 
  getUsKey=async ()=>{
    var keyUser=''
    await  firebaseApp
      .database()
      .ref("/User/")
      .orderByChild("Email")
      .equalTo(this.state.email)
      .on("value", (snap) => {
        snap.forEach((element) => {
          if (element.val().Password === this.state.password) {
            keyUser=element.key;
         }
        });
      });
return keyUser
  }
  getCartList= async()=>
  {
    var keyUser=await this.getUsKey();
    var list=[]
    firebaseApp
      .database()
      .ref("/User/"+keyUser+'/Cart/')
     .on('value',data=>{
        data.forEach(e=>{
            list.push(e)

        })
     })
     return list
  }
  createOrder= async()=>{
    var keyUser=await this.getUsKey();
    var ListC=[];
    this.state.product.forEach(elm=>{
       var product={
       Title:'',
       Quantity:'',
       Avatar:'',
       Price:'',
      
       }
       product.Title=elm.content,
       product.Quantity=elm.count,
       product.Price=elm.price,
       product.Avatar=elm.img,
       ListC.push(product);
    });
  
          var date= new Date();
          var DateTime=date.getFullYear()+'-'+date.getMonth() + 1;
          var order={
            date:DateTime
         }
          var DateTime=date.getFullYear()+'-'+date.getMonth() + 1;
           var key=  firebaseApp
           .database()
           .ref("/User/"+keyUser+"/Order/").ref.push(order).key;
           firebaseApp
           .database()
           .ref("/User/"+keyUser+"/Order/"+key+'/').ref.update(ListC);
            
            
  //        dat.forEach(e=>{
  //         var date= new Date()
  //         
  //        var order={
  //          date:DateTime
  //        }

  //      var key= e.ref.child('/Order/').push(order).key
  //       e.ref.child('Order/'+key).update(this.state.product)
  //        var total=this.state.total;
  //        e.ref.child('Order/'+key+'/Total').set(total);
  //        e.ref.child('Cart/'+item.content).remove();
  //        })
       
       
       }
 
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
