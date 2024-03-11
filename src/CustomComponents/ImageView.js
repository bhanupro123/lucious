import React, { useEffect, useState } from "react";
import { View, Text, Platform, ActivityIndicator, TouchableOpacity } from 'react-native'
import FastImage from "react-native-fast-image";
import Animated from "react-native-reanimated";
import Header from "./Header";
export default ImageView = ({  ...props }) => {
  
    return <Animated.View  
     
    style={{flex:1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
     }}>
        <Header back title="Image View" {...props}></Header>
      <FastImage  resizeMode="contain" 
       style={{flex:1,backgroundColor:"black"
       }}
        source={{uri:props.route.params.url}}>
         </FastImage>
    </Animated.View >

}
