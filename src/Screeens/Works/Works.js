import React, { useEffect, useState } from "react";
import { TouchableOpacity,View,FlatList } from 'react-native'
import ColorConstants from "../../Utils/ColorConstants";
import { withGlobalContext } from "../../CustomProvider/CustomProvider";
import ScreenNames from "../../Utils/ScreenNames";
import {getDarkColor, showAlertWithValue } from "../../Utils/Util";
import {requestGET} from "../../Network/NetworkOperations";
import WorkItem from "./WorkItem";
import Header from "../../CustomComponents/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutRight, SlideOutUp } from 'react-native-reanimated';
const Works = ({ ...props }) => {

  const [works, setWorks] = useState([])

  useEffect(() => {
    props.loader(true)
    requestGET("https://openlibrary.org/subjects/sci-fi.json?details=true").then((res) => {
      props.loader(false)
      if (res && res.status == 200) {
        setWorks(res?.data?.works ? res.data.works : [])
      }
      else {
        showAlertWithValue(props, "Network error")
      }
    })
  }, [])
 
 
  const renderItem = ({ item,index }) => 
  {
    return <WorkItem
    index={index}
    navigateTo={()=>{
      props.navigation.push(ScreenNames.Subject,{data:item.key})
    }}
    key={item.key}
    itemData={item}
    >

    </WorkItem>
  }
  ;
  return  < View style={{
      flex: 1,
      backgroundColor: ColorConstants.white,
    }}
    > 
    <Header title={"Total: "+works.length}></Header>
       <FlatList 
      numColumns={2}
        data={works}
        initialNumToRender={5}
        style={{ flex: 1, }}
        renderItem={renderItem}
      >
      </FlatList>
      <Animated.View 
      sharedTransitionTag="tagsearch"
      entering={SlideInDown.delay(1500)} style={{backgroundColor:getDarkColor(),
      width:70,height:70,right:20,borderRadius:999,bottom:20,
      alignItems:'center',
      position:'absolute',
      justifyContent:'center',
    }}>
      <TouchableOpacity style={{
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.5,
           shadowRadius: 5,
           elevation: 10,
          
}}>
<AntDesign
              onPress={() => { 
                props.navigation.push(ScreenNames.Search)
              }}
              color={"white"} 
              name={"search1"}
              size={30}
              style={{ }}
            />
        </TouchableOpacity>
      </Animated.View>
      
       
    </View> 
}

export default withGlobalContext(Works)