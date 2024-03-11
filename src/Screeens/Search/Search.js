import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import ColorConstants from "../../Utils/ColorConstants";
import { withGlobalContext } from "../../CustomProvider/CustomProvider";
import ValueConstants from "../../Utils/ValueConstants";
import Fonts from "../../Utils/Fonts";
import ScreenNames from "../../Utils/ScreenNames";
import {   getDarkColor, showAlertWithValue, } from "../../Utils/Util";
import {  requestGET,} from "../../Network/NetworkOperations";
import WorkItem from "./WorkItem";
import Header from "../../CustomComponents/Header";
import Searchitem from "./Searchitem";
 import Animated,{} from "react-native-reanimated";
const Search = ({ ...props }) => {

    const [works, setWorks] = useState([])
    const inputRef = useRef("")
    const reachedRef = useRef(false)
    const [loading, setLoading] = useState(false); // State to track loading status
    const [error, setError] = useState(null); // State to track errors
 
    const fetchData = async () => {
        if (reachedRef.current) return

        pageIndex.current = pageIndex.current + 1
        makeApi(inputRef.current, true)

    };
    const renderItem = ({ item, index }) => {
        if (!item.backgroundColor) {
            item.backgroundColor = getDarkColor()
        }
        return <WorkItem {...props}
            index={index}
            navigateTo={() => {
                props.navigation.push(ScreenNames.Subject, { data: item.key })
            }}
            key={item.key}
            itemData={item}
        >

        </WorkItem>
    }
        ;
    const pageIndex = useRef(1);
    const makeApi = (input = "", fetch = false) => {
        inputRef.current = input
        if (fetch == false) pageIndex.current = 1
        reachedRef.current = false
        if (input) {
            setLoading(true)
            if (fetch == false) {
                props.loader(true)
            }
            requestGET(`https://openlibrary.org/search.json?title=` + input + `&page=` + pageIndex.current).then((res) => {
                setLoading(false)
                props.loader(false)
                if (res && res.status == 200) {
                    if (pageIndex.current == 1 && res?.data?.docs) {
                        if (res.data.docs.length != 100) {
                            reachedRef.current = true
                        }
                        setWorks(res.data.docs)
                    }
                    else if (res?.data?.docs) {
                        if (res.data.docs.length != 100) {
                            reachedRef.current = true
                        }
                        setWorks([...works, ...res.data.docs])
                    }
                }
                else {
                    showAlertWithValue(props, "Network error")
                  }
            })
        }
        else {
            reachedRef.current = false
            setWorks([])
        }
    }
    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator animating size="large" color={ColorConstants.primaryColor} />
            </View>
        );
    };
    const renderEmpty = () => (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: ColorConstants.primaryColor,
                fontFamily: Fonts.Mulish_Bold,

                fontSize: ValueConstants.size24
            }}>{inputRef.current.length ? loading ? "" : "No data available" : ""}</Text>
        </View>
    );


    return <View

    style={{
        flex: 1,
        backgroundColor: ColorConstants.white,
    }}
    > 
        <Header back {...props} title={"Total Search Results: " + works.length}></Header>
        <Searchitem makeApi={makeApi}></Searchitem>
        
        <FlatList
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            onEndReached={fetchData} // Fetch more data when end is reached
            onEndReachedThreshold={0.5}
            numColumns={2}
            data={works}
            initialNumToRender={5}
            style={{ flex: 1, paddingBottom: 20, }}
            renderItem={renderItem}
        >

        </FlatList>

    </View>
}

export default withGlobalContext(Search)