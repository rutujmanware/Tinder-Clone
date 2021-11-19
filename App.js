import React from 'react';
import tw from 'tailwind-rn';
import StackNavigator from './Stacknavigator';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

