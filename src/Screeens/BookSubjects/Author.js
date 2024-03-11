import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Dimensions } from 'react-native'
 
import ColorConstants from "../../Utils/ColorConstants"; 
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts"; 
import moment from "moment";
 
import { handleResponse, requestGET, requestPost } from "../../Network/NetworkOperations";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutLeft, SlideOutRight, SlideOutUp } from 'react-native-reanimated';

import AuthItem from "./AuthItem"; 
import { showAlertWithValue } from "../../Utils/Util";
const Author = ({autherLink="/authors/OL34184A", ...props }) => {

  const [works,setWorks]=useState({})
     const [authData,setAuthData]=useState({})
   useEffect(()=>{
     requestGET(`https://openlibrary.org`+"/authors/OL34184A"+`.json`).then((res)=>{
if(res&&res.status==200)
{
   setAuthData(res.data)
}else {
  showAlertWithValue(props, "Network error")
}
     })
   },[])
  return  <Animated.View entering={SlideOutLeft.delay(200)} style={{
  backgroundColor:"white"
   }}>
   
    <Text style={{
        margin: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
      }}>Author :  <Text style={{color:"black",fontFamily:Fonts.Mulish_SemiBold,fontSize:ValueConstants.size20}}>{authData.personal_name}</Text>
      </Text>
      {authData?.photos?.length ?  <Text style={{
        margin: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
      }}>Author Images</Text> : <Text style={{
        marginHorizontal: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Regular, fontSize: ValueConstants.size20
      }}>{"No content available"}</Text>}
    <View style={{marginHorizontal:10,justifyContent:'space-between',flexShrink:1,flexDirection:'row',flexWrap:'wrap'}}>
      {authData.photos&&authData.photos.map((item)=>{ 
        return <AuthItem {...props} key={item} personal_name={authData.personal_name} code={item}></AuthItem>
              })} 
      </View>
     {authData?.created?.value? <Text style={{
        margin: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
      }}>Created At :  <Text style={{color:"black",fontFamily:Fonts.Mulish_SemiBold,fontSize:ValueConstants.size20}}>{moment(authData.created.value).format('DD-MM-YYYY hh:mm a')}</Text>
      </Text>:null}
     {authData?.last_modified?.value? <Text style={{
        margin: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
      }}>Modified At :  <Text style={{color:"black",fontFamily:Fonts.Mulish_SemiBold,fontSize:ValueConstants.size20}}>{moment(authData.last_modified.value).format('DD-MM-YYYY hh:mm a')}</Text>
      </Text>:null}
  </Animated.View>

 
}

export default Author