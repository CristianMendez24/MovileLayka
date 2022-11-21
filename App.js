import * as React from 'react';
import Menu from './src/navigation.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import reducers from './Store/storage';
import {createStore} from 'redux';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <Provider store={createStore(reducers)}>
    <NavigationContainer >
      <Menu/>
    </NavigationContainer>
    </Provider>
  );
}
