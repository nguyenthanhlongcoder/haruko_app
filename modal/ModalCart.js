
import { firebaseApp } from "../components/FirebaseConfig"

export const ModalCart={
   
    getCart:(keyUser)=>{
        var list=[]
        firebaseApp
        .database()
        .ref("/User/" + keyUser + '/Cart/')
        .on('value', data => {
          data.forEach(e => {
            var pro = {
              content: '',
              price: '',
              count: '',
              img: "",
  
            }
            pro.content = e.val().Title;
            pro.count = e.val().Quantity;
            pro.price = e.val().Price;
            pro.img = e.val().Avatar;
           list.push(pro);
  
          })
         
        }
        );
            return list;
    },
    updateCart:(keyUser,name,product)=>{
        firebaseApp
      .database()
      .ref("/User/" + keyUser + "/Cart/" + name + '/').set(product);
    },
    removeCart:(keyUser)=>{
     
       firebaseApp
        .database()
        .ref("/User/"+keyUser+"/Cart/").ref.remove()
      
    },
    removeCartItem:(keyUser,name)=>{
        firebaseApp
        .database()
        .ref("/User/" + keyUser + "/Cart/" + name).remove()
    }
  
}