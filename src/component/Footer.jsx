import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Footer = ({ activeRoute = "home"}) => {

    const navigation = useNavigation()
    const isAuthenticated = false
    


    const Handler = () => {

      if(isAuthenticated) return navigation.navigate("profile")
      navigation.navigate("login")

    }

    


  return (
    <View style={{
        backgroundColor:'grey',
        borderTopRightRadius:120,
        borderTopLeftRadius:120,
        position:"absolute",
        width:"100%",
        bottom:0
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('cart')} >
            <Avatar.Icon icon={activeRoute === "cart" ? "shopping" : "shopping-outline"} style={{
                backgroundColor:'transparent'
            }} color={'blue'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={Handler}>
            <Avatar.Icon icon={activeRoute === "profile" ? "account" : "account-outline"} style={{
                backgroundColor:'transparent'
            }} color={'black'}/>
        </TouchableOpacity>
      </View>
      <View style={{
        position:'absolute',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center'
      }}>
      <View style={{
        justifyContent:'center',
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={() =>  navigation.navigate("home")}>
            <Avatar.Icon icon={activeRoute === 'home' ? "home" : "home-outline"} style={{
                backgroundColor:'transparent',
            }} color={'white'}/>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  )
}

export default Footer