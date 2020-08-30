import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Alert,TextInput, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { HeaderBackground } from 'react-navigation-stack';
import { render } from 'react-dom';


export default class AppNavigation extends React.Component {
render(){
    return(
  <Appbar style={s.top}
  >
  <TextInput
          style={s.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
  </Appbar>);
  
 
}


}

const s = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top:0,
    padding:5,
   paddingTop:20,
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
    width:300,
    marginLeft:10,
    paddingLeft:20
  },
});