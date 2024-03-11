import React, { useEffect, useState } from "react";
import { View, Text, Linking, Platform } from 'react-native'
import ScreenNames from "../Utils/ScreenNames";
import { withGlobalContext } from "../CustomProvider/CustomProvider";
import ValueConstants from "../Utils/ValueConstants";
import Fonts from "../Utils/Fonts";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutUp, withSpring } from 'react-native-reanimated';
 
const SplashScreen = ({ ...props }) => {
     
    useEffect(() => { 
       setTimeout(()=>{
        props.navigation.replace(ScreenNames.Main)
       },1500)
    }, [])


    return <View style={{ flex: 1, backgroundColor: '#1A1E36',alignItems:'center',justifyContent:'center' }}>
            <Animated.Text sharedTransitionTag="tag" entering={SlideInDown.delay(1000)} exiting={SlideInUp.delay(1000)}  style={{fontSize:ValueConstants.size32+10,fontFamily:Fonts.Mulish_ExtraBold}}>
                Licious
                </Animated.Text>
    </View>
}


export default withGlobalContext(SplashScreen)