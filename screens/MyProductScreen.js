import React  from 'react';
import {SafeAreaView,AsyncStorage,FlatList} from 'react-native';
import AppBarLight from '../components/AppBarLight';
import { firebaseApp } from "../components/FirebaseConfig";
import Product  from '../components/Product'
export default  class MyProductScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      email:'',
      password:'',
    
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
  componentWillMount= async()=> {
  
    let userStatus = await AsyncStorage.getItem("status");
    if(userStatus=='true'){
    await this.getToken();
   await this.defaultLoadData();
    this.setTotal()
  }
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
  defaultLoadData = async() => {
   var keyUser=await this.getUsKey()
    let Productlist = [];
    firebaseApp
      .database()
      .ref("/User/"+keyUser)
      .on("value", (data) => {
        data.child("Recent").forEach((element) => {
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
           
        this.setState({ product: Productlist });
        
      });
      console.log(this.state.product)
  };
 render(){
    return(
        <SafeAreaView>
            <AppBarLight navigation={this.props.navigation} title={this.props.route.params.title}/>
            <FlatList
              data={this.state.product}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item)=>item.content}

              renderItem={({item})=>{return(<Product item={item}
                onPress={() =>
                {
                  this.props.navigation.navigate("ProductDetailScreen",item)
                 
                  }
                }
               />)}}

            />
        </SafeAreaView>
    )}
}
 
