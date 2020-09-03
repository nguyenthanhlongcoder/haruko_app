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
          onAnimateNextPage={(p) => {}}
        >
          <Image style={{width: Dimensions.get('window').width, height: '100%'}} source={{uri: 'http://www.hoshinoresorts-magazine.com/wp-content/uploads/2016/06/lanterns-in-japan-1500x1000_150dpi.jpg'}} resizeMode='center'/>
          <View style={[{ backgroundColor: 'red' }, state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, state.size]}><Text>3</Text></View>
        </Carousel>
      </View>
    )
}