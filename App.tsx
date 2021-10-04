
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message'
import Routes from './src/routes';


export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Routes/>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}
