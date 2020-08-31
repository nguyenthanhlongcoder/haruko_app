import React,{useState} from 'react'
import {View,Text,Image,ActivityIndicator, StatusBar,StyleSheet} from 'react-native'
import Fonts from '../assets/Fonts'
import Color from '../assets/myColors'
import AppLoading from 'expo'

export default class CategoryItem extends React.Component{
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
      return(
            
            <View style={styles.container}>
           <Image style={styles.img} source={this.props.item.image}/>
           <Text onPress={this.props.onPress} style={styles.content}>{this.props.item.content}</Text>
       </View>)   
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
        
      backgroundColor:'rgba(255, 255, 255,1)',
        alignItems: 'center',
        justifyContent: 'center',
        width:100,
       height:140,
      
       
      },
      img:{
         width:45,
         height:45,
         top:4,
         backgroundColor:'rgba(0, 0, 0, .2)',
         position:"absolute",
         borderRadius:100,
         
         shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,

          elevation: 24,
         
      },
      content:{
       
        alignContent:"center",
        fontFamily:'roboto-medium-italic',
        fontSize:15
        
      }
})