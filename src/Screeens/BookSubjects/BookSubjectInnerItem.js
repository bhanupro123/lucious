import React, { useState } from "react";
import {  View, Text, FlatList, Dimensions } from 'react-native'
 
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
import BookSubjectItem from "./BookSubjectItem";
const { width, height } = Dimensions.get('window')
const BookSubjectInnerItem = ({ data, ...props }) => {
 
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const pageIndex = Math.round(contentOffset.x / width);
    setCurrentPageIndex(pageIndex);
  };
  const renderItem = ({ itemData,index }) => 
  { 
    return <BookSubjectItem key={itemData} code={data[index]} {...props}
    > 
    </BookSubjectItem>
  }
  return   <View style={{position:'relative'}}>
  <FlatList 
       horizontal
       onScroll={handleScroll}
       pagingEnabled
        data={ data}
        initialNumToRender={5}
        style={{ }}
        renderItem={renderItem}
      >

      </FlatList>
      <View style={{ shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 10,position:'absolute',borderRadius:5, backgroundColor:"#ffffff", top:20,right:"7%",padding:5}}>
      
          <Text style={{color:"black",fontFamily:Fonts.Mulish_Bold,fontSize:ValueConstants.size20}}>{(currentPageIndex+1)<10?"0"+(currentPageIndex+1):(currentPageIndex+1)}/{data.length<10?"0"+data.length:data.length}</Text>
     
      </View>
  </View>
}

export default (BookSubjectInnerItem)