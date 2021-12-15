import { TwitterAuthProvider } from "@firebase/auth";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../Hooks/useAuth";





const ModalScreen = () => {
  const [image, setImage] = useState();
  const [Job, setJob] = useState();
  const [Age, setAge] = useState();
  const { user } = useAuth();
  const navigation=useNavigation();

  const incompleteForm = !image||!Job||!Age;
  const updateUserProfile = () => {
      setDoc(doc(db,'users',user.uid),{
          id:user.uid,
          displayName:user.displayName,
          PhotoUrl: image,
          Job: Job,
          Age:Age,
          timestamp:serverTimestamp(),
      }).then(() =>{
          navigation.navigate('Home')
      }).catch((error) => {
          alert(error.message);
      })
  };

  return (
    <View style={tw("flex-1 items-center pt-4")}>
      <Image
        style={tw("h-20 w-full")}
        resizeMode="contain"
        source={{ uri: "https://links.papareact.com/2pf" }}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Profile Pic:
      </Text>
      <TextInput
      value={image}
      onChangeText={setImage}
        style={tw("text-center pb-2 text-xl")}
        placeholder="Enter Profile Pic URL"
      />
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>
        Occupation
      </Text>
      <TextInput
      value={Job}
      onChangeText={setJob}
        style={tw("text-center pb-2 text-xl")}
        placeholder="Enter your occupation"
      />
      <Text style={tw("text-center text-red-400 p-4 font-bold")}>Age</Text>
      <TextInput
      value={Age}
      maxLength={2}
      keyboardType={"numeric"}
      onChangeText={text=>setAge(text)}
        style={tw("text-center pb-2 text-xl")}
        placeholder="Enter your Age"
      />

      <TouchableOpacity
      disabled={incompleteForm}
        style={[tw("w-64 p-3 rounded-xl absolute bottom-10  "), incompleteForm ? tw("bg-gray-400"):tw("bg-red-400")]}
        onPress={updateUserProfile}
      >
        <Text style={tw("text-center text-xl text-white")
           }
        >Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
