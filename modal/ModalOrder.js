import { firebaseApp } from "../components/FirebaseConfig"
export const ModalOrder ={
  
    creteOrder:(keyUser,product)=>{
        firebaseApp
        .database()
        .ref("/User/"+keyUser+"/Order/"+product.Title).ref.update(product).then((result)=>{
            return true;
        }).catch((error)=>{
            return false;
        })

    },

}