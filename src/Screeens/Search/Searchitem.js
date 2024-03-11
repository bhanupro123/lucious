import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Image, Dimensions } from 'react-native'
import ColorConstants from "../../Utils/ColorConstants";
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
import IconEntypo from "react-native-vector-icons/Entypo";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, SlideOutUp } from 'react-native-reanimated';

const Searchitem = ({makeApi,navigateTo,itemData={},url, ...props }) => {

  const [input,setInput]=useState([]) 
  const timerRef = useRef(null);

  return <Animated.View 
  entering={SlideInRight.delay(100)} style={{flexDirection:'row',padding:10,
  margin:5,
  borderRadius:10, 
  borderWidth:1, 
  borderBottomColor:'grey',}}>
  <TextInput
  autoFocus
       value={input}
       onChangeText={async (searchText) => {
         if(timerRef.current)
         {
          clearTimeout(timerRef.current)
           
         } 
          timerRef.current=setTimeout(()=>{
           makeApi(searchText)
          },1500)
         
         setInput(searchText) 
       }}
       style={{
           borderWidth:0, 
         padding: 0, margin: 0, paddingHorizontal: 5,
         paddingBottom:5,
         fontFamily: Fonts.Mulish_Regular,
         fontSize: ValueConstants.size24,
         flex: 1,
         color: ColorConstants.primaryColor,
       }}
       placeholderTextColor={"grey"}
       placeholder={"Search by title"} >

     </TextInput>

     {input.length? (
       <TouchableOpacity
         style={{ alignSelf: "center", paddingHorizontal: 5 }} 
         onPress={() => {
           setInput("")
           makeApi("")
         }}
       >
         <IconEntypo
           name={"circle-with-cross"}
           size={30}
           color={"black"}
         />
       </TouchableOpacity>
     ) : null}
  </Animated.View>
 
}

export default Searchitem;