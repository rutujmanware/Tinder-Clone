import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import LoginScreen from './Screens/LoginScreen';
import useAuth from './Hooks/useAuth';
import ModalScreen from './Screens/ModalScreen';
import MatchedScreen from './Screens/MatchedScreen';

const Stack= createNativeStackNavigator();
const StackNavigator = () =>{
    const {user}=useAuth();
    return (
    
       <Stack.Navigator screenOptions={{
           headerShown:false,
       }}>
           {user ?(
<>              
            <Stack.Group>
               <Stack.Screen name="Home" component={HomeScreen} />
               <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:"modal"}}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:"transparentModal"}}>
                <Stack.Screen name="Match" component={MatchedScreen} />
            </Stack.Group>
               </>
           ):(

               <Stack.Screen name="Login" component={LoginScreen} />
           )}
       </Stack.Navigator>
    )
}

export default StackNavigator;