import { firebaseApp } from "../components/FirebaseConfig"
import {ConvertString} from "../components/ConvertString";
import {Products} from "./Products"
export const GetData={
    getProduct:()=>{
          var ProductList = [];
          firebaseApp
            .database()
            .ref("/Shop/")
            .on("value", (data) => {
              data.child("Product").forEach((element) => {
               
                var product =new Products();
                product.content = element.val().Title;
                product.price = element.val().Price;
                product.description = element.val().Description;
                product.avatar = element.val().Avatar;
                product.category = element.val().Category;
                ProductList.push(product);
              });
                  
            });
            return ProductList
           
        },
        getCategory: ()=>{
            var catelist = [
                {
                  Title: "ALL",
                  isChecked: true,
                },
              ];
             
              firebaseApp
                .database()
                .ref("/Shop/")
                .on("value", (data) => {
                  data.child("Category").forEach((element) => {
                    var cate = {
                      Title: "",
                      isChecked: false,
                    };
                    cate.Title = element.val().Title;
                    catelist.push(cate);
                  });
                  
                });
                return catelist;
              
        },
    getProductByCate:(cate)=>{
      var Productlist = [];
      firebaseApp
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Product").forEach((element) => {
          var product =new Products();
          if (element.val().Category === cate) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
            
            Productlist.push(product);
          
          }
          if (cate === "ALL") {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
           
            Productlist.push(product);
          }
        });
        
      });
      return Productlist
     
    },
    getProductByName:(inputText)=>{
      var Productlist = [];
      firebaseApp
      .database()
      .ref("/Shop/")
      .on("value", (data) => {
        data.child("Product").forEach((element) => {
          var product =new Products();
          if (ConvertString.vnToNa(element.val().Title.toUpperCase()).search(ConvertString.vnToNa(inputText.toUpperCase()))!=-1) {
            product.content = element.val().Title;
            product.price = element.val().Price;
            product.description = element.val().Description;
            product.avatar = element.val().Avatar;
            product.category = element.val().Category;
           
            Productlist.push(product);
          
          }
        });
      });
      return Productlist
    },
    getUsKey: (email,password)=>{
      var keyUser=''
        firebaseApp
        .database()
        .ref("/User/")
        .orderByChild("Email")
        .equalTo(email)
        .on("value", (snap) => {
          snap.forEach((element) => {
            if (element.val().Password ===password) {
              keyUser=element.key;
           }
          });
        });
  return keyUser
    },
    getUsAddress: (email,password)=>{
      var Address=''
        firebaseApp
        .database()
        .ref("/User/")
        .orderByChild("Email")
        .equalTo(email)
        .on("value", (snap) => {
          snap.forEach((element) => {
            if (element.val().Password ===password) {
             Address=element.val().Address;
           }
          });
        });
  return Address
    },
    getUsPhone: (email,password)=>{
      var Phone=''
        firebaseApp
        .database()
        .ref("/User/")
        .orderByChild("Email")
        .equalTo(email)
        .on("value", (snap) => {
          snap.forEach((element) => {
            if (element.val().Password ===password) {
              Phone=element.val().Phone;
           }
          });
        });
  return Phone
    }
    
}