import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Alert,TextInput,View,StatusBar,ActivityIndicator, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { HeaderBackground } from 'react-navigation-stack';
import { render } from 'react-dom';
import Fonts from '../assets/Fonts'

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
  <Text style={{fontFamily:'roboto-medium-italic',fontSize:25, marginLeft:10}}>Haruko</Text>
  <TextInput
          style={s.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
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
    height:100,
    backgroundColor: '#329ea8',
    
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    width:250 ,
    paddingLeft:20,
    marginLeft:5
  },
});