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
  Alert
} from "react-native";
import Product from "../components/Product";
import CategoryItem from "../components/CategoryItem";
import { myColors } from "../assets/myColors";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import ProductCartAppBar from "../components/ProductCartAppBar";
import { firebaseApp } from "../components/FirebaseConfig";
import ProductCartItem from "../components/ProductCartItem";
import { GetData } from "../components/GetData";
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
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
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
    
    if(style==='plus')
    {
   
   this.state.product[index].count=this.state.product[index].count+1
   this.setState({product:this.state.product})
    }
    else{
      if(this.state.product[index].count>=1)
      {this.state.product[index].count=this.state.product[index].count-1
      this.setState({product:this.state.product})}
    }
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
    var listPro=[]
    this.state.product.forEach(e=>{
      var pro={
      Title:'',
      Quantity:'',
      Price:'',
      Avatar:''
    }
    pro.Title=e.content;
    pro.Quantity=e.count;
    pro.Price=e.price;
    pro.Avatar=e.img;
    listPro.push(pro)
    
    })
    this.state.product=[]
    await  firebaseApp
    .database()
    .ref("/User/"+keyUser+"/Cart/"+item.content+'/').set(listPro[index])
   
  
  }
  
  removeItem = async(item, ind) => {
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
    if (typeof(keyUser)!== 'undefined'){
    await  firebaseApp
    .database()
    .ref("/User/"+keyUser+"/Cart/"+item.content).remove()
this.defaultLoadData()
    this.setTotal();
  }
  }
 setTotal() {
    let total=0
    this.state.product.forEach(element => {
      total=total+element.count*element.price
    });
    this.state.total=total;
    this.setState({total:this.state.total});
    
  } 
  getCartList= async()=>
  {
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
    
    var list=[]
    if(keyUser!=null)
    {
    firebaseApp
      .database()
      .ref("/User/"+keyUser+'/Cart/')
     .on('value',data=>{
        data.forEach(e=>{
            list.push(e)

        })
     })
    }
     return list
  }
  createOrder= async()=>{
    var keyUser=await GetData.getUsKey(this.state.email,this.state.password);
    if(this.state.product.length>0){
      if (typeof(keyUser)!== 'undefined')
    {
        var ListC=[];
   
  
          var date= new Date();
          var Total= this.state.total
          var DateTime=date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+"-"+date.getDate();
          var order={
            date:DateTime,
            Total:Total
         }
        
         
           var key=  firebaseApp
           .database()
           .ref("/User/"+keyUser+"/Order/").ref.push(order).key;
           this.state.product.forEach(elm=>{
            var product={
            Title:'',
            Quantity:'',
            Price:'',  
            }
            product.Title=elm.content,
            product.Quantity=elm.count,
            product.Price=elm.price,
            firebaseApp
           .database()
           .ref("/User/"+keyUser+"/Order/"+key+'/'+product.Title).ref.update(product)
         });
           
           firebaseApp
           .database()
           .ref("/User/"+keyUser+"/Cart/").ref.remove().then((result) => {
            Alert.alert('Success !!!');
           }).catch((err) => {
            Alert.alert('ERRO!!!');
           });
           this.componentDidMount();
           this.props.navigation.navigate("ProductsViewScreen")
        }
      }
      else{
        Alert.alert('Cart Is Null !!!');
        this.props.navigation.navigate("ProductsViewScreen")
      }
       
       }
 
  render() {
    return (
      <View style={styles.container}>
        <ProductCartAppBar />
        <ScrollView>
          <View>
            <FlatList
              data={this.state.product}
              keyExtractor={(item)=>item.content}
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
