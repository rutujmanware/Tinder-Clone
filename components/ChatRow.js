import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import useAuth from '../Hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';
import tw from "tailwind-rn";

const ChatRow = ({matchDetails}) => {
    const navigation= useNavigation();
    const {user}=useAuth();
    const {matchedUserInfo, setMatchedUserInfo} = useState(null)

useEffect(() =>{
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid))
},[matchDetails, user])

    return (
        <TouchableOpacity style={[tw("flex-row py-3 px-5 items-center bg-white mx-3 my-1 rounded-lg"), styles.cardShadow]}>
            <Image style={tw("rounded-full h-16 w-16 mr-4")} 
            source={{uri: matchedUserInfo?.photoURL}}   />
        </TouchableOpacity>
    )
}

export default ChatRow;
const styles = StyleSheet.create({
    cardShadow: {
      shadowColor: "#000",
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
  });