/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  SafeAreaView, 
  StatusBar, 
} from 'react-native';

import { AlertConsumer, AlertProvider } from './src/CustomProvider/CustomProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import ScreenNames from './src/Utils/ScreenNames';
import SplashScreen from './src/Screeens/SplashScreen';
import Search from './src/Screeens/Search/Search';
import Works from './src/Screeens/Works/Works';
import BookSubject from './src/Screeens/BookSubjects/BookSubject';
import ImageView from './src/CustomComponents/ImageView';


const Stack = createNativeStackNavigator();

const StackContainer = ({ ...props }) => {

const containerRef=useRef(null)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ColorConstants.primaryColor }}>
 
    <StatusBar barStyle={'light-content'}></StatusBar>
   
      <NavigationContainer ref={containerRef}
        independent
      >
        <Stack.Navigator
        
          screenOptions={{ headerShown: false }}
          initialRouteName={ScreenNames.Splash}>
          <Stack.Screen
            name={ScreenNames.Splash}
            component={SplashScreen}
          />
           <Stack.Screen
            name={ScreenNames.imageView}
            component={ImageView}
          />
<Stack.Screen
            name={ScreenNames.Main}
            component={Works}
          />
<Stack.Screen
            name={ScreenNames.Search}
            component={Search}
          />
          <Stack.Screen
            name={ScreenNames.Subject}
            component={BookSubject}
          />

           
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default MainApp = () => {
  return <AlertProvider>
    <AlertConsumer>{({ ...props }) => <StackContainer {...props} />}</AlertConsumer>
  </AlertProvider>
}

