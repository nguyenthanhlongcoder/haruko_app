import { firebaseApp } from "../components/FirebaseConfig"
export const ModalRecent={
    addRecent:(keyUser,name,pro)=>{
        firebaseApp
        .database()
        .ref("/User/" + keyUser + "/Recent/" +name + "/")
        .set(pro);
    }
}