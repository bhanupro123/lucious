import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, Dimensions } from 'react-native'
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
import {getDarkColor } from "../../Utils/Util";
import GlobalImage from "../../CustomComponents/GlobalImage";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutUp, withSpring } from 'react-native-reanimated';
 

const WorkItem = ({index=0,navigateTo,itemData={},url, ...props }) => {
 
  return   <Animated.View
  entering={index%2==0?SlideInLeft.delay(50*index):SlideInRight.delay(50*index)} 
  
  style={{
      padding: 10, 
      flex:1, 
      margin:5,
      borderRadius:10,
      justifyContent:'space-around',
      backgroundColor: getDarkColor("60"),
    }}
    >
      <TouchableOpacity onPress={navigateTo}>
      <GlobalImage height={300} url={`https://covers.openlibrary.org/b/id/`+itemData.cover_id+`-M.jpg`}></GlobalImage>
        <View style={{flex:1}}>
        <Text style={{color:"white",
        textAlign:'center', 
        fontFamily: Fonts.Mulish_Bold,
        fontSize:ValueConstants.size24}}>{itemData.title}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
 
}

export default WorkItem;