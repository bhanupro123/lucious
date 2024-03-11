import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import GlobalAlertByProvider from "./GlobalAlertProvider";
import GlobalLoaderProvider from "./GlobalLoaderProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Toast from 'react-native-simple-toast'
export const AlertContext = React.createContext({});
export const AlertConsumer = AlertContext.Consumer;

export const AlertProvider = (props) => {

  const modalRef = useRef(null);
  const alertRef = useRef(null);
  const favlist = useRef({
    list: []
  })
  const getFavData = () => {
    return favlist.current.list
  }
  const modifyFavData = (item) => {
    if (item) {
      let index = favlist.current.list.indexOf(item)
      if (index != -1) {
        favlist.current.list.splice(index, 1);
      }
      else {
        favlist.current.list.push(item)
      }
      AsyncStorage.setItem("favData", JSON.stringify(favlist.current.list))
    }
  }


  useEffect(() => { 
    AsyncStorage.getItem("favData").then((res) => {
      if (res) {
        favlist.current.list = JSON.parse(res)
      }
    }) 
  }, [])

  const loaderstate = (visible = false, obj = {}, whiteBg = false) => {
    if (modalRef && modalRef.current && modalRef.current.loaderRefresh) {
      obj.whiteBg = whiteBg
      modalRef.current.loaderRefresh(visible, obj, whiteBg);
    }
  };

  const alertState = (visible = false, cancellable = false, value = "") => {
    if (alertRef && alertRef.current && alertRef.current.alertConfig) {
      alertRef.current.alertConfig(visible, cancellable, value);
    }
  };



  return (
    <View
      style={{ flex: 1 }}

    >
      <AlertContext.Provider
        value={{
          alert: alertState,
          loader: loaderstate,
          getFavData: getFavData,
          modifyFavData: modifyFavData
        }}
      >
        {props.children}
      </AlertContext.Provider>
      <GlobalLoaderProvider ref={modalRef}> </GlobalLoaderProvider>
      <GlobalAlertByProvider ref={alertRef}> </GlobalAlertByProvider>

    </View>
  );
};
export const withGlobalContext = (ChildComponent) => (props) =>
(
  <AlertContext.Consumer>
    {(context) => (
      <ChildComponent
        {...props}
        {...context}
      />
    )}
  </AlertContext.Consumer>
);
