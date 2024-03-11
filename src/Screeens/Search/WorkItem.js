import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Image, Dimensions } from 'react-native'
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import GlobalImage from "../../CustomComponents/GlobalImage";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, SlideOutUp } from 'react-native-reanimated';
import PressableButtonWithDelay from "../../CustomComponents/PressableButtonWithDelay";

const WorkItem = ({index=0,navigateTo,itemData={},url, ...props }) => {
const [isItFav,setIsFav]=useState(false)
  useEffect(()=>{
    console.log(props.getFavData())
    setIsFav(props.getFavData().includes(itemData.key))
        
  },[])

  return  <Animated.View style={{ flex:1, }} entering={index%2==0?SlideInLeft.delay(200):SlideInRight.delay(200)}>
     < TouchableOpacity 
  onPress={navigateTo}
  style={{
      padding: 10, 
      flex:1, 
      margin:5,
      borderRadius:10,
      justifyContent:'space-around',
      backgroundColor: itemData.backgroundColor,
    }}
    > 
    
      <GlobalImage height={300} url={`https://covers.openlibrary.org/b/id/`+(itemData.cover_id?itemData.cover_id:itemData.cover_i)+`-M.jpg`}></GlobalImage>
        <View style={{flex:1}}>
        <Text  style={{color:"white",
        textAlign:'center', 
        fontFamily: Fonts.Mulish_Bold,
        fontSize:ValueConstants.size24}}>{itemData.title}</Text>
        </View>
    </TouchableOpacity>
   <PressableButtonWithDelay 
   presshandler={async ()=>{
    props.modifyFavData(itemData.key)
    setIsFav(!isItFav)
   }}
   style={{position:'absolute',
     top:20,right:20,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 5,
     padding:5,
     borderRadius:99,
     elevation: 10, 
     backgroundColor:isItFav?"red":"darkgrey"
  }}>
   <MaterialIcons
   name={isItFav?"favorite":"favorite-border"} size={25} color={"white"}></MaterialIcons>
   </PressableButtonWithDelay>
    </Animated.View> 
 
}

export default WorkItem;