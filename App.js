/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListDemo from './app/components/ListDemo';
import HomeScreen from './app/components/HomeScreen';
import ImageScreen from './app/components/ImageScreen'
import Counter from './app/components/Counter'
import ColorComponent from './app/components/ColorComponent'
import SquareScreen   from './app/components/SquareScreen'
import TextDemo from './app/components/TextDemo'
const Stack =  createStackNavigator()

const App = ()=> {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="ListDemo" component={ListDemo}/>
          <Stack.Screen name="ImageScreen" component={ImageScreen}/>
          <Stack.Screen name="Counter" component={Counter}/>
          <Stack.Screen name="ColorComponent" component={ColorComponent}/>
          <Stack.Screen name="SquareScreen" component={SquareScreen}/>
          <Stack.Screen name="TextDemo" component={TextDemo}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
