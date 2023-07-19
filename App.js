import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './scr/navigation/AppNavigator';
import {Provider as StoreProvider} from 'react-redux';
import store from './scr/redux/store';
const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};
export default App;
