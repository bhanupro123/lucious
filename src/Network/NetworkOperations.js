import axios from "axios" 
export const requestPost = async (url = "", reqObj = {}, headers = {}) => {
    let res;
    try {  
        res = await axios.post(url, reqObj, headers)
    } catch (error) {
        res = error && error.response ? error.response : error
    }
    return res
}
export const requestGET = async (url = "", reqObj = {}, headers = {}) => {
    let res;
    try { 
        console.log(url)
        res = await axios.get(url, reqObj, headers)
    } catch (error) {
        res = error && error.response ? error.response : error
    }
    return res
}
 
 