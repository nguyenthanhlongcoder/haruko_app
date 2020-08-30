import * as Font from 'expo'
import AppLoading from 'expo' 
import React,{useState} from 'react'
const fetchFonts=()=>{
 
 return Font.loadAsync({
     'roboto-bold':require('./fonts/Roboto-Bold.ttf'),
     'roboto-italic':require('./fonts/Roboto-Italic.ttf'),
     'roboto-regular':require('./fonts/Roboto-Regular.ttf'),
 });
 }
 const Fonts=()=>{
      return(
          
      <AppLoading
             startAsync={fetchFonts}
             onFinish={()=>setDataLoaded(true)}
         />);
 }
 export default Fonts;