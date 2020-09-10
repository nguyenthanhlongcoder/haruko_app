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
  AsyncStorage,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ProductTitle from "../components/ProductTitle";
import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import AppBarLight from "../components/AppBarLight";
import { myColors } from "../assets/myColors";
import MyStatusBar from "../components/MyStatusBar";
import { firebaseApp } from "../components/FirebaseConfig";
import { element } from "prop-types";
import { Title } from "react-native-paper";


export default class ProductDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:this.props.route.params,
      product: []
      ,imageList:[],
      password:'',
      email:''  
    };
   
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
 defaultLoadData = () => {
    let Productlist = [];
    var imgList=[];
    this.state.imageList=[];
    firebaseApp.database().ref('/Shop/Product/').orderByChild('Title').equalTo(this.state.item.content).on('value',(data)=>{
      data.forEach(e=>{
    e.child('Images').forEach(el=>{
      var img={
        url:'',
      }
      img.url=el.val();
      this.state.imageList.push(img)
    });
    
    this.setState({imageList:this.state.imageList});
      });
     
    })
    
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
            avatar:''
          };
          
         
          if (element.val().Category === this.state.item.category&& element.val().Title!=this.state.item.content) {
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
componentDidMount=async()=>{
await this.getToken();
this.defaultLoadData();
this.addToNewView();
}
componentWillUnmount=async()=>{
  let userStatus = await AsyncStorage.getItem("status");
  if(userStatus==='true'){
    var keyUser=''
    if (typeof(keyUser)!== 'undefined'){
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
    var pro={
      Title:'',
      Description:'',
      Avatar:'',
      Price:'',
      Category:''

    }
    pro.Title=this.state.item.content;
    pro.Price=this.state.item.price;
    pro.Description=this.state.item.description;
    pro.Avatar=this.state.item.avatar;
    pro.Category=this.state.item.category;
    firebaseApp
    .database()
    .ref("/User/"+keyUser+"/Recent/"+this.state.item.content+'/').set(pro)

    }
  }
  
  }
  reload(item)
  {
    this.state.item=item;
    this.setState({item:this.state.item});
    this.refs._scrollView.scrollTo(0);
    this.state.imageList=[];
    this.defaultLoadData();
  }

  addToCart=async()=>{
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
    var pro={
      Title:'',
      Quantity:'',
      Avatar:'',
      Price:'',

    }
    pro.Title=this.state.item.content
    pro.Quantity=1;
    pro.Avatar=this.state.item.avatar
    pro.Price=this.state.item.price
    console.log(keyUser)
    if (typeof(keyUser)!== 'undefined')
    {
    firebaseApp
    .database()
    .ref("/User/"+keyUser+"/Cart/"+this.state.item.content+'/').set(pro)
    }
  }
  render() {
    const { width } = Dimensions.get("window");
    const { navigation } = this.props;
   
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppBarLight onPress={() => this.props.navigation.goBack()} title="" navigation={navigation} />
        <ScrollView ref='_scrollView' showsVerticalScrollIndicator={false}>
          <View>
            <Carousel
              ref={(c) => {
                this._carousel = c;
               
               
              }}
              onPress={() => { this._carousel.snapToNext(); }}
              // autoplay={true}
              // autoplayDelay={200}
              data={this.state.imageList}
              renderItem={({item})=>{
               
                return (
                  <View style={{justifyContent:'center'}}>
                    <Image resizeMode='cover'
                      style={{width:Dimensions.get('window').width,height:300}}
                      
                      source={{ uri: item.url }}
                    />
                  </View>
                );
              }}
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
                      {this.reload(item)}
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
          <Button title="Add to Cart" color={myColors.defaultPrimaryColor} onPress={
           async ()=>{
            let userStatus = await AsyncStorage.getItem("status");
                    if(userStatus==='false'){
                    this.props.navigation.navigate('LoginScreen');
                    }
                    else
                    {
                      this.addToCart();
                      this.props.navigation.navigate("ProductCartScreen");
                    }
            }} />
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
