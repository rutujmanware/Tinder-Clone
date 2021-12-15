import React from 'react';
import tw from 'tailwind-rn';
import StackNavigator from './Stacknavigator';
import {NavigationContainer} from '@react-navigation/native';
import { AuthProvider } from './Hooks/useAuth';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

