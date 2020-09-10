

import { firebaseApp } from "../components/FirebaseConfig";
export const PushData={
SignUp:async(user)=>{
    firebaseApp
    .database()
    .ref("/User/"+user.DisplayName).set(user)

}
}