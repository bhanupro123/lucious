import React, { useRef, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import ValueConstants from '../Utils/ValueConstants';
 

const PressableButtonWithDelay = ({ presshandler, style, children }) => {

 
    const [actived,setActive]=useState(true)

    return (
        <TouchableOpacity activeOpacity={actived?0:1}
            style={style ? style : { flexDirection: 'row' }}
            onPress={() => {
                if (actived && presshandler) {
                    setActive(false)
                    try {
                        presshandler()
                    } catch (error) {

                    }
                    setTimeout(() => {
                        setActive(true)
                    }, 2000)
                }
            }}
        >
            {actived?children:<ActivityIndicator size={'small'} color={"white"}></ActivityIndicator>}
        </TouchableOpacity>
    )
};
export default PressableButtonWithDelay;