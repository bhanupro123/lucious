import React, { useEffect, useState } from "react";
import { View, Text, Platform, ActivityIndicator, TouchableOpacity } from 'react-native'
import FastImage from "react-native-fast-image";
import Animated from "react-native-reanimated";
export default GlobalImage = ({url,height=300, ...props }) => {
  
    return <Animated.View  sharedTransitionTag={url}
     
    style={{flex:1,alignItems:'center',
    justifyContent:'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    padding:10 }}>
          <ActivityIndicator style={{position:'absolute',alignSelf:'center'}} 
          size={40}
          color={"white"}></ActivityIndicator>
       
      
      <FastImage  resizeMode="cover" 
       style={{flex:1,height:height,width:"100%",borderRadius:10,shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.5,
       shadowRadius: 5,
       elevation: 2}}
        source={{uri:url}}>
         </FastImage>
     
      
    </Animated.View >

}
