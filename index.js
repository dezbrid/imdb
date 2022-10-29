/**
 * @format
 */
import Reactotron from '@config/reactotronConfig';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const Root = __DEV__ ? Reactotron.overlay(App) : App;

AppRegistry.registerComponent(appName, () => Root);
