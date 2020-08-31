
import React from 'react';
import { StyleSheet, Text, View,FlatList, Image } from 'react-native';  
import Carousel from 'react-native-snap-carousel';
import ProductTitle from '../components/ProductTitle'
import AppBottomNavigation from '../components/AppBottomNavigation'
export default class ProductDetailScreen extends React.Component {

    static navigationOptions =
    {
       title: 'SecondActivity',
    };
    constructor(props){
      super(props);
      this.state={
       conData:[{
         image:require('../assets/favicon.png'),
         content:'ogre',
         sale:'45%'
         ,price:18000
         ,sold:8
     },
     {
         image:require('../assets/favicon.png'),
         content:'ogre',
         sale:'40%'
         ,price:16000
         ,sold:7
     },
     {
       image:require('../assets/favicon.png'),
       content:'ogre',
       sale:'45%'
       ,price:18000
       ,sold:8
   },
   {
       image:require('../assets/favicon.png'),
       content:'ogre',
       sale:'40%'
       ,price:16000
       ,sold:7
   },
   {
     image:require('../assets/favicon.png'),
     content:'ogre',
     sale:''
     ,price:18000
     ,sold:8
 },
 {
     image:require('../assets/favicon.png'),
     content:'ogre',
     sale:'40%'
     ,price:16000
     ,sold:7
 },
 {
   image:require('../assets/favicon.png'),
   content:'ogre',
   sale:'45%'
   ,price:18000
   ,sold:8
},
{
   image:require('../assets/favicon.png'),
   content:'ogre',
   sale:''
   ,price:16000
   ,sold:7
},
   ],
   cateData:[
     {
      url:"https://cf.shopee.vn/file/6dedd68aa6b73f3b8d5726fb0921a6d2",
       content:'Bracelet',
     },
     {
      url:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
       content:'Doll',
     },
     {
       url:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
       content:'Hat',
     },
     {
       url:"https://cf.shopee.vn/file/f65adf2f5b6912dc102a74c2acad840c",
       content:'Lantern',
     },
   ]
      }
      
    }
    _renderItem = ({item, index}) => {
      return (
          <View style={{justifyContent:"center"}}>
              <Image style={{height:200,width:'100%'}} source={{uri:item.url}}/>
              
          </View>
         
      );
  }
 render(){
  const { navigation } = this.props;
  const item={
    image:navigation.getParam('image', 'NO-User'),
    content:navigation.getParam('content', 'NO-User'),
    sale:navigation.getParam('sale', 'NO-User')
    ,price:navigation.getParam('price', 'NO-User')
    ,sold:navigation.getParam('sold', 'NO-User')
  }
   return (
   <View style={styles.container}>
  <Carousel
  ref={(c) => { this._carousel = c; }}
  data={this.state.cateData}
  renderItem={this._renderItem}
  sliderWidth={400}
  itemWidth={300}
  
/>
<ProductTitle item={item}/>
<AppBottomNavigation/>
</View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
