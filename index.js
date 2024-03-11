/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import StackContainer from './StackContainer'; 
import 'react-native-gesture-handler'
import App from './App';
 
AppRegistry.registerComponent(appName, () =>StackContainer);
