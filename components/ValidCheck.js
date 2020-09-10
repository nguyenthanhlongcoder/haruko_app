import { firebaseApp } from "../components/FirebaseConfig";
export const ValidCheck = {
   checkMailVail:(email)=>{
    var re =/(.+)(@)(.+)(.com)/mg
    if(re.test(email)){
       return true
    }
    else{
      return false
    }
   },
   checkPassValid:(password)=>{
    var re=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/
          if(re.test(password))
          {
              return true;
          }
          else{
              return false
          }
  },
  checkEmailExists:async(email)=>{
      var s
    firebaseApp
          .database()
          .ref("/User/")
          .orderByChild("Email")
          .equalTo(email).on('value',snap=>{
         s=snap.exists()
            
          })
          return s
         
      }
}