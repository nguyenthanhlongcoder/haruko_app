import React,{useState} from 'react'
import {View,Text,Image,ActivityIndicator, StatusBar,StyleSheet} from 'react-native'
import Color from '../assets/myColors'
import AppLoading from 'expo'
import Fonts from '../assets/Fonts'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class ProductTitle extends React.Component{
  
  constructor()
  {
      super();
      this.state = {
        assetsLoaded: false,
    };
      this.componentDidMount();
  }
   
 
    async componentDidMount() {
    await  Fonts();
    this.setState({ assetsLoaded: true });
      }
 render(){ 
    const {assetsLoaded} = this.state;
    if( assetsLoaded ) {
    if(this.props.item.sale!='')

      {
       
           return(
         
         <View style={styles.container} onTouchEnd={this.props.onPress} >
         <View style={{width:50,height:50,position:'absolute',zIndex:1,right:0,top:0,alignItems:'center',}}>
         <Image  style={{width:50,height:50,position:'absolute',zIndex:0,right:0,top:0,opacity:0.9}}  source={require('../assets/warranty_100px.png')}/>
        <Text style={{  zIndex:1,fontSize:10 ,marginTop:15,color:'red'}}>{this.props.item.sale}</Text>
         </View>
        
       
        <Text style={[styles.content]} >{this.props.item.content}</Text>
        <Text style={[styles.text,{color:'red'}]}>{this.props.item.price}đ</Text>
        <Text style={[styles.text,{textDecorationLine:"line-through"}]}>đã bán : {this.props.item.sold}</Text>
        
    </View>)
    }
    else
    {
        return(
            
    <View style={styles.container} onTouchEnd={this.props.onPress} >

            <Text style={[styles.content]}>{this.props.item.content}</Text>
            <Text style={[styles.text,{color:'red'}]}>{this.props.item.price}đ</Text>
            <Text style={[styles.text,{textDecorationLine:"line-through"}]}>đã bán : {this.props.item.sold}</Text>
           
       </View>)
    }
}
else
{
    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}
 }
 
}
const styles = StyleSheet.create({
    container: {      
  width:'100%',
  height:6.5,
 flexDirection:'column'


       },
      text:{
          paddingLeft:10,
          
      },
      content:{
       width:'100%',
       textAlign:"center",
        fontFamily:'roboto-light',
        fontSize:25,    
       
        
      }
})