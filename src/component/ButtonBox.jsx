import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({icon, text, handler, loading=false}) => {
  return (
    <View style={{

    }}>
        <TouchableOpacity onPress={() => handler(text)}>
        <Avatar.Icon 
      size={50}
      style={{
        backgroundColor:'transparent'
      }}
      color={'blue'}
      icon={icon}
      />
       <Text
      style={{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold'
      }}
      >{text}</Text>
        </TouchableOpacity>
      
     
    </View>
  )
}

export default ButtonBox