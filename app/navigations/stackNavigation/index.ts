import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../src/screens/splashScreen";

const Stack = createStackNavigator();

const stackNavigation = createStackNavigator({
  screens: {
    Home: SplashScreen,
  },
});

export default stackNavigation;