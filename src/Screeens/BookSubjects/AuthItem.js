import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image';
import ScreenNames from "../../Utils/ScreenNames";

const AuthItem = ({ code, ...props }) => {
  return   <TouchableOpacity onPress={()=>{
props.navigation.push(ScreenNames.imageView,{url:`https://covers.openlibrary.org/b/id/`+code+`-L.jpg`})
  }} style={{}}>
 <FastImage style={{margin:5,width:100,height:100,
  borderRadius:50}} source={{uri:`https://covers.openlibrary.org/b/id/`+code+`-L.jpg`}}></FastImage>

  </TouchableOpacity>
}

export default (AuthItem)