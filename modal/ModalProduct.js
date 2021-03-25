import { firebaseApp } from "../components/FirebaseConfig"
import {ConvertString} from "../components/ConvertString";
import { Products } from './Products'
export const ModalProduct={
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
    getProductBySimilar:(cate,name)=>{ 
      var list=[]
      firebaseApp
        .database()
        .ref("/Shop/")
        .on("value", (data) => {
         
          data.child("Product").forEach((element) => {
            var product =new Products();    
            if (element.val().Category === cate&& element.val().Title!=name) {
              product.content = element.val().Title;
              product.price = element.val().Price;
              product.description = element.val().Description;
              product.avatar = element.val().Avatar;
              product.category = element.val().Category;
              list.push(product);
            }
          });
        });
        return list
    }
    ,
    getProductImgs:(name)=>{
      var list=[]
      firebaseApp.database().ref('/Shop/Product/').orderByChild('Title').equalTo(name).on('value',(data)=>{
        data.forEach(e=>{
      e.child('Images').forEach(el=>{
        var img={
          url:'',
        }
        img.url=el.val();
       list.push(img)
      });
      
        });
       
      })
      return list 
  }
    

    
}