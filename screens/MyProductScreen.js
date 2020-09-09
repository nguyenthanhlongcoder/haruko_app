import React  from 'react';
import {SafeAreaView,AsyncStorage} from 'react-native';
import AppBarLight from '../components/AppBarLight';
import { firebaseApp } from "../components/FirebaseConfig";
export default  class MyProductScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      email:'',
      password:'',
    
    };
  }
  componentDidMount= async()=> {
  
    await this.getToken();
   await this.defaultLoadData();
    this.setTotal()
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
        data.child("Category").forEach((element) => {
          var cate = {
            Title: "",
            isChecked: false,
          };
          cate.Title = element.val().Title;
          catelist.push(cate);
        });
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

        this.setState({ data: catelist, product: Productlist });
        
      });
      console.log(this.state.product)
  };
 render(){
    return(
        <SafeAreaView>
            <AppBarLight navigation={this.props.navigation} title={this.props.route.params.title}/>

        </SafeAreaView>
    )}
}
 
