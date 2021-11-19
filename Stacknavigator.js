import react from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './Screens/HomeScreen';

const Stack= createNativeStackNavigator();
const StackNavigator = () =>{
    return (
       <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
       </Stack.Navigator>
    )
}

export default StackNavigator;