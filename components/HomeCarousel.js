import React, { useState } from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import Carousel from 'react-native-looped-carousel';

export default function HomeCarousel(){
    const [state, setState] = useState({});
    const {height} = Dimensions.get('window');
    return(
        <View style={{height: height /4}} onLayout={(e) =>{
            const layout = e.nativeEvent.layout;
            setState({size: {width: layout.width, height: layout.height}})
        }}>
        <Carousel
          delay={2000}
          style={state.size}
          autoplay
          bullets
          onAnimateNextPage={(p) => console.log(p)}
        >
          <Image style={{width: '100%', height: '100%'}} source={{uri: 'https://yulcsa.com/wp-content/uploads/2019/03/weblila2.jpg'}} resizeMode='center'/>
          <View style={[{ backgroundColor: 'red' }, state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, state.size]}><Text>3</Text></View>
        </Carousel>
      </View>
    )
}