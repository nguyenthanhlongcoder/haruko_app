import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Alert,TextInput,View,StatusBar,ActivityIndicator, Text } from 'react-native';
import Fonts from '../assets/Fonts'
import {myColors} from '../assets/myColors'
export default class AppNavigation extends React.Component {
  constructor()
  {
      super();
      this.state = {
        assetsLoaded: false,
    };
      this.componentDidMount();
     
  }
  async componentDidMount() {
   
  await Fonts();
  this.setState({ assetsLoaded: true });
    }
render(){
  const {assetsLoaded} = this.state;
  if( assetsLoaded ){
    return(
  <Appbar style={s.top}
  >

  </Appbar>);
  }
  else
  {
      return (
          <View  style={{flex:1}}>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
          </View>
      );
  }
 
}


}

const s = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top:0,  
    alignItems:'center',
    justifyContent:'center',
    height:60,
    backgroundColor:myColors.defaultPrimaryColor,  
  },
 
});