import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Dimensions } from 'react-native'

import GlobalImage from "../../CustomComponents/GlobalImage";
import ScreenNames from "../../Utils/ScreenNames";
const { width, height } = Dimensions.get('window')
const BookSubjectItem = ({ code, ...props }) => {

  
const url=`https://covers.openlibrary.org/b/id/` + code + `-M.jpg`
  return <View style={{
    width: width, alignItems: 'center',
  }}>
    <TouchableOpacity
    onPress={()=>{
      props.navigation.push(ScreenNames.imageView,{url:url})
    }}
    style={{
      borderRadius: 10, height: 300, width: "95%",
    }}>    
    <GlobalImage height={300} url={url}></GlobalImage>
  
    </TouchableOpacity>

  </View>
}

export default BookSubjectItem