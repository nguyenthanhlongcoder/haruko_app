import React  from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet , AsyncStorage} from 'react-native';
import AccountPurchases from '../components/AccountPurchases';
import AccountHeader from '../components/AccountHeader';
import AccountMyProduct from '../components/AccountMyProducts';
import AccountSetting from '../components/AccountSetting';
import AccountLogout from '../components/AccountLogout';
import { myColors } from '../assets/myColors';
import AppBar from '../components/AppBar';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default class AccountScreen extends React.Component {
   constructor({navigation})
   {
       super(navigation)
       this.state={
           email:'',
           displayName:'',
           status:'',
           navigation:navigation
       }
      

   }
  getToken = async (user) => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let userStatus = await AsyncStorage.getItem("status");
      let data = JSON.parse(userData);
      var us = JSON.parse(data);
      this.state.email = us.Email;
      this.setState({ email: this.state.email });
      this.state.displayName = us.DisplayName;
      this.setState({ displayName: this.state.displayName });
      this.state.status=userStatus
      this.setState({status:this.state.status})
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  componentDidMount=async ()=>{
   this.props.navigation.addListener('focus', async() => {
    await this.getToken()
    })
    
  }

 
click= async()=>{
    
    await this.getToken()
  }
  login=()=>{
    
    this.props.navigation.navigate("LoginScreen", { names: ['Brent', 'Satya', 'Michaś'] }); 
  }
  render(){
  
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <AppBar title='' navigation={this.state.navigation}/>
                <AccountHeader login={this.login} click={this.click} data={this.state}  navigation={this.state.navigation}/>
                <AccountPurchases navigation={this.state.navigation} />
                <View style={styles.divider} />
                <AccountMyProduct navigation={this.state.navigation}/>
                <View style={styles.divider} />
                <AccountSetting />
                <View style={styles.divider} />
                <AccountLogout click={this.click}/>
            </ScrollView>
        </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
    divider: {
        height: 10,
        backgroundColor: '#d5d5d5',
        opacity: 0.3,
    }
})