import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { firebaseApp } from '../components/FirebaseConfig';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { cos } from 'react-native-reanimated';

export default function HomeCarousel() {
  const [state, setState] = useState({});
  const [img, setImg] = useState([''])
  const { height } = Dimensions.get('window');

  useEffect(() => {
    let isMounted = true; //note this flag denote mount status

    firebaseApp.database().ref('/Shop/Wallpaper').once('value', (snapshot) => {
    var img = [];
      snapshot.forEach(element => {
        img.push(element.val());
      })  
    setImg(img);
    })
    return () => { isMounted = false } //useEffect cleanup to set flag false, if unmounted
  },[img.size])


  return (
    <View style={{ height: height / 3 }} onLayout={(e) => {
      const layout = e.nativeEvent.layout;
      setState({ size: { width: layout.width, height: layout.height } })
    }}>
      <Carousel
        delay={2000}
        style={state.size}
        leftArrowText={<SimpleLineIcons name='arrow-left' size={20} />}
        leftArrowStyle={{ color: 'white', margin: 10 }}
        rightArrowText={<SimpleLineIcons name='arrow-right' size={20} />}
        rightArrowStyle={{ color: 'white', margin: 10 }}
        autoplay
        arrows
        onAnimateNextPage={(p) => { }}
      >

        {img?img.map(item=>
          <Image style={{ width: Dimensions.get('window').width, height: '100%' }} source={{uri: item}} resizeMode='cover' />
        ): null}
      </Carousel>
    </View>
  )
}