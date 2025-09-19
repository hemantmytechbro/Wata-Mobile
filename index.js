import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import mobileAds from 'react-native-google-mobile-ads';

// Initialize AdMob SDK before rendering the app
mobileAds().initialize();

AppRegistry.registerComponent(appName, () => App);
