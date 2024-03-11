import React, { } from "react";
import { View, Text, Platform, Touchable, TouchableOpacity } from 'react-native'
import ColorConstants from "../Utils/ColorConstants";
import Fonts from "../Utils/Fonts";
import ValueConstants from "../Utils/ValueConstants";
import Ionicons from "react-native-vector-icons/Ionicons";
export default Header = ({ back = false, title = "Next", style = {}, ...props }) => {

    return <View style={{ backgroundColor: 'white' }}>
        <View style={{
            flexDirection: 'row',
            padding: 10,
            paddingVertical:15,
            backgroundColor: '#1A1E36',
            alignItems: 'center',
        }}>
            {back ?
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.pop()
                        }}
                        accessible={true}
                        testID={"searchCancelButton"}
                        accessibilityLabel={"searchCancelButton"}
                    > 
                        <Ionicons
                            color={"#fff"}
                            name={"chevron-back"}
                            size={35} 
                        />

                    </TouchableOpacity> : null}
            <TouchableOpacity onPress={()=>{
                if(back)
                {
                    props.navigation.pop()
                }
            }}>
            <Text 
                style={{
                    color: ColorConstants.secondaryColor,
                    borderBottomWidth: 1,
                    textAlign: 'center',
                    paddingHorizontal:10,
                    fontFamily: Fonts.Mulish_Bold,
                    fontSize: ValueConstants.size22
                }}
            >
                {title}

            </Text>
                </TouchableOpacity>

        </View>

    </View >

}
