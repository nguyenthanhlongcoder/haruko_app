import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Animated,View,FlatList, Image,ScrollView,ListView,Dimensions } from 'react-native';
import Product from '../components/Product'
import CategoryItem from '../components/CategoryItem'
import AppNavigation from '../components/AppNavigation'
import { myColors } from "../assets/myColors";
import IconAntDesign from 'react-native-vector-icons/AntDesign'
export default class ProductsViewScreen extends React.Component {
  static navigationOptions =
  {
    headerShown: false,
  };
    
     constructor(){
       super();
       this.state={
      
        conData:[{
          image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
          content:'ogre',
          sale:'45%'
          ,price:18000
          ,sold:8
      },  
      {
          image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
          content:'ogre',
          sale:'40%'
          ,price:16000
          ,sold:7
      },
      {
        image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
        content:'ogre',
        sale:'45%'
        ,price:18000
        ,sold:8
    },
    {
        image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
        content:'ogre',
        sale:'40%'
        ,price:16000
        ,sold:7
    },
    {
      image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
      content:'ogre',
      sale:''
      ,price:18000
      ,sold:8
  },
  {
      image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
      content:'ogre',
      sale:'40%'
      ,price:16000
      ,sold:7
  },
  {
    image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
    content:'ogre',
    sale:'45%'
    ,price:18000
    ,sold:8
},
{
    image:"https://cf.shopee.vn/file/ead47f6e94606a532bdb90cfeff5da8a",
    content:'ogre',
    sale:''
    ,price:16000
    ,sold:7
},
    ],
    cateData:[
      {
       
        content:'Bracelet',
      },
      {
       
        content:'Doll',
      },
      {
       
        content:'Hat',
      },
      {
       
        content:'Lantern',
      },
    ],
    iconName:'right',
    cateListHeight:0

       }
       
     }
 render(){ 
  
   return (
 
    <View style={styles.container}>
    {/* <Product img={require(image)} content={content}/> */}
    <View onTouchEnd={()=>{
      if(this.state.iconName==='right'&&this.state.cateListHeight===0)
      {
        this.setState({iconName:'down',cateListHeight:Dimensions.get('window').height/10})
       
      }
      else{
        this.setState({iconName:'right',cateListHeight:0})
      }
    }} style={{flexDirection:'row',height:Dimensions.get('window').height/15 ,alignItems:"center"}}>
      <Text style={{flex:1, fontSize:25}}>Category</Text>
      <IconAntDesign
        name={this.state.iconName}
        style={{fontSize:25,flex:1,textAlign:'right'}}
      />
    </View>
  <View style={{height:this.state.cateListHeight,width:'100%'}}>
    
    <FlatList
    horizontal={true}
      data={this.state.cateData}
      
      renderItem={({item})=>{return(<CategoryItem onPress={()=>{}} item={item}/>)}}
     showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index}
    />
  </View>
    <FlatList 
    style={{flex: 1,padding:2.5}}
        data={this.state.conData}
        numColumns={2}
        keyExtractor={(item, index) => index}
        nestedScrollEnabled={true}   
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{ return( <Product  item={item} onPress={() => this.props.navigation.navigate('Second',item)}/>)}}
    />   
    </View>
   
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
    
  },
  scrollViewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
}
});


