import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, SafeAreaView, StatusBar, TextInput, FlatList, Dimensions } from 'react-native'
import ColorConstants from "../../Utils/ColorConstants";
import { withGlobalContext } from "../../CustomProvider/CustomProvider";
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
 
import { generateRandomColor, showAlertWithValue } from "../../Utils/Util";
import { handleResponse, requestGET, requestPost } from "../../Network/NetworkOperations";
import Header from "../../CustomComponents/Header";
import BookSubjectInnerItem from "./BookSubjectInnerItem";
import Author from "./Author"; 
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, SlideOutUp } from 'react-native-reanimated';
import ScreenNames from "../../Utils/ScreenNames";

const BookSubject = ({ ...props }) => {

  const [booksubjectdata, setbooksubjectdata] = useState({
    covers: []
  })


  useEffect(() => {
  setTimeout(()=>{
    try {
      props.loader(true)
      requestGET(`https://openlibrary.org` + props.route.params.data + `.json`).then((res) => {
        props.loader(false)
        if (res && res?.status == 200) {
          setbooksubjectdata(res.data)
        }
        else {
          showAlertWithValue(props, "Network error")
        }
      })
     } catch (error) {
      props.loader(false)
     }
  },200)
  }, [])

  return <View style={{
    flex: 1,
    backgroundColor: ColorConstants.white,
  }}
  >
    <Header back title={booksubjectdata?.title} {...props}></Header>

    <ScrollView style={{ flex: 1 }}>

      <BookSubjectInnerItem {...props} data={booksubjectdata.covers}></BookSubjectInnerItem>
      
      
      <View style={{flexDirection:'row',flexWrap:'wrap',flexShrink:1,marginBottom:10}}>
     
        {booksubjectdata?.authors?.map((item) => {
          return <Author {...props} key={item.author.key} autherLink={item.author.key}></Author>
        })}
      </View>
      
      <Animated.Text entering={SlideInDown.delay(200)} style={{
        margin: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
      }}>Description</Animated.Text>
     <Animated.Text entering={SlideInDown.delay(300)}  style={{
        marginHorizontal: 10, color: ColorConstants.primaryColor,
        fontFamily: Fonts.Mulish_Regular, fontSize: ValueConstants.size20
      }}>{booksubjectdata.description ? (booksubjectdata?.description?.value?booksubjectdata.description.value:booksubjectdata.description) : "No content available"}</Animated.Text>

      {booksubjectdata.subjects ?
        <>
          <Animated.Text  style={{
            color: ColorConstants.primaryColor, margin: 10,
            fontFamily: Fonts.Mulish_Bold, fontSize: ValueConstants.size24
          }}>{"Subjects"}</Animated.Text>
          <View style={{
            flexWrap: 'wrap',
            paddingBottom: 20,
            marginHorizontal: 10,
            flexShrink: 1, flexDirection: 'row'
          }}>
            {booksubjectdata.subjects.
              map((item) => {
                return <Text key={item} style={{
                  margin: 5, borderRadius: 10,
                  color: ColorConstants.primaryColor,
                  paddingHorizontal: 10,
                  fontFamily: Fonts.Mulish_Medium,
                  fontSize: ValueConstants.size20,
                  paddingVertical: 5,
                  fontSize: ValueConstants.size20,
                  backgroundColor: generateRandomColor("30")

                }}>{item}</Text>
              })}
          </View>
        </>
        : null}
    </ScrollView>


  </View>
}

export default withGlobalContext(BookSubject)