import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// Kích hoạt các phần UI Customize (Ghi đè)
import './src/customize';
import { COLORS } from './src/constants/theme';

const AppContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1,
      borderTopWidth: insets.top,
      // borderBottomWidth: insets.bottom,
      borderColor: COLORS.tabBackground
    }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
