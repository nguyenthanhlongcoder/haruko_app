import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Image,ScrollView } from 'react-native';
import Product from '../components/Product'
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
    ]
       }
     }
 render(){ return (
  
    <View style={styles.container}>
    <AppNavigation/>
    {/* <Product img={require(image)} content={content}/> */}
    <ScrollView
  showsVerticalScrollIndicator={false}
  >
    <FlatList
    style={{height:500,marginTop:110}}
        data={this.state.conData}
        numColumns={2}
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
});
