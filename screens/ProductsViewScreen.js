import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Image,ScrollView,ListView } from 'react-native';
import Product from '../components/Product'
import CategoryItem from '../components/CategoryItem'
import AppNavigation from '../components/AppNavigation'
export default class ProductsViewScreen extends React.Component {
  static navigationOptions =
  {
    headerShown: false,
  };
    
     constructor(){
       super();
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
        image:require('../assets/bracelet_100px.png'),
        content:'Bracelet',
      },
      {
        image:require('../assets/teddy_bear_100px.png'),
        content:'Doll',
      },
      {
        image:require('../assets/hat_100px.png'),
        content:'Hat',
      },
      {
        image:require('../assets/lantern_100px.png'),
        content:'Lantern',
      },
    ]
       }
       
     }
 render(){ 
  
   return (
 
    <View style={styles.container}>
    <AppNavigation/>
    {/* <Product img={require(image)} content={content}/> */}
    <ScrollView
  showsVerticalScrollIndicator={false}
  >
  <View style={{height:90, width:'100%', marginTop:100}}>
    <FlatList
    horizontal={true}
      data={this.state.cateData}
      renderItem={({item})=>{return(<CategoryItem item={item}/>)}}
     showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index}
    />
  </View>
    <FlatList 
       style={{ height:500}}
        data={this.state.conData}
        numColumns={2}
        keyExtractor={(item, index) => index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{ return( <Product item={item} onPress={() => this.props.navigation.navigate('Second',item)}/>)}}
    />   
      </ScrollView>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  scrollViewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
}
});
