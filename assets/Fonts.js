import * as Font from 'expo-font'
const fetchFonts= async()=>{
  return await Font.loadAsync({
    'roboto-medium':require('../assets/fonts/Roboto-Medium.ttf'),
    'roboto-light':require('../assets/fonts/Roboto-Light.ttf'),
    'roboto-bold':require('../assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic':require('../assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular':require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-light-italic':require('../assets/fonts/Roboto-LightItalic.ttf'),
    'roboto-thin':require('../assets/fonts/Roboto-Thin.ttf'),
    'roboto-thin-italic':require('../assets/fonts/Roboto-ThinItalic.ttf'),
    'roboto-black':require('../assets/fonts/Roboto-Black.ttf'),
    'roboto-black-italic':require('../assets/fonts/Roboto-BlackItalic.ttf'),
    'roboto-medium-italic':require('../assets/fonts/Roboto-MediumItalic.ttf'),
 });
 }
 
 export default fetchFonts;