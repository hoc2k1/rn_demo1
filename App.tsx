import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar } from 'react-native';

// Kích hoạt các phần UI Customize (Ghi đè)
import './src/customize';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
