
import { Dimensions,  PixelRatio, Platform } from "react-native";
 
export function generateRandomString(upto = 10) {
    const characters = 'UPSQUADABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789BLOOMING';
    let result = '';

    for (let i = 0; i < upto; i++) {
        result += characters.charAt(Math.floor(Math.random() * upto));
    }
    return result;
}
 
export function generateRandomColor(opacity="") {
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`+opacity
}
export function getDarkColor(opacity="") {
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color+opacity;
}

 

export const getFontSize = (size) => {
    const newSize = (size / Dimensions.get("window").fontScale);
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};
 

export const showAlertWithValue = (props, value = "") => {
    if (value)
        props.alert(true, { value: value })
}