import React,{useState} from 'react'
import {View,Text,Image,ActivityIndicator, StatusBar,StyleSheet} from 'react-native'
import Color from '../assets/myColors'
import AppLoading from 'expo'
import Fonts from '../assets/Fonts'

export default class Product extends React.Component{
  
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
        
        <Image style={styles.img,{zIndex:0}} source={this.props.item.image}/>
        <Text onPress={this.props.onPress} style={styles.content}>{this.props.item.content}</Text>
        <View style={{backgroundColor:'red',width:'100%'}}>
            <Text style={{width:'50%',position:"absolute",left:0,textAlign:'center' ,color:'red'}}>{this.props.item.price}đ</Text>
            <Text style={{width:'50%',position:"absolute",right:0,textAlign:'center',fontFamily:'roboto-medium'}}>đã bán : {this.props.item.sold}</Text>
        </View>
    </View>)
    }
    else
    {
        return(
            
            <View style={styles.container} onTouchEnd={this.props.onPress} >
           <Image style={styles.img,{zIndex:0}} source={this.props.item.image}/>
           <Text onPress={this.props.onPress} style={styles.content}>{this.props.item.content}</Text>
           <View style={{backgroundColor:'red',width:'100%'}}>
               <Text style={{width:'50%',position:"absolute",left:0,textAlign:'center' ,color:'red'}}>{this.props.item.price}đ</Text>
               <Text style={{width:'50%',position:"absolute",right:0,textAlign:'center',fontFamily:'roboto-medium'}}>đã bán : {this.props.item.sold}</Text>
           </View>
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
        
backgroundColor:'#EBEEF3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        width:'45%',
        marginRight:'3%',
        marginLeft:'2%',
        marginTop:'3%',
        marginBottom:'2%',
       height:200,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,

       elevation: 5,
       
      },
      img:{
         width:99,
         height:100,
         top:0,
         position:"absolute",
         borderRadius:20,
        
      },
      content:{
        marginTop:10,
        alignContent:"center",
        fontFamily:'roboto-light',
        fontSize:15
        
      }
})