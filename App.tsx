 


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BaseNavigation from './app/navigations/baseNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BaseNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;