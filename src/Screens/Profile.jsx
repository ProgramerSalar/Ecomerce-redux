import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Loader from '../component/Loader'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useMessageAndErrorUser } from '../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { defaultImg } from './Signup'

const Profile = () => {

    // const loading = false
    const navigation = useNavigation()
   

    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "login")

    const {user} = useSelector((state) => state.user)
    const [avatar, setAvatar] = useState(user?.avatar?user.avatar.url: defaultImg)



  return (
    <>
      <View style={{
        flex:1,
        backgroundColor:'green',
        
    }}>

        {
            loading ? <Loader  /> : 
            <>
            <View style={{
        backgroundColor:'white',
        height:200,
        width:400,
        borderRadius:10,
        margin:10,
        padding:10
        
      }}>
        <Avatar.Image  
        size={100}
        source={{
            uri: avatar
        }}
        style={{
            flexDirection:'row',
            justifyContent:'center',
            alignSelf:'center'
        }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('cameraComponent')}>
            <Button>Change Photo</Button>
        </TouchableOpacity>

        <View style={{
            flexDirection:'column',
            alignSelf:'center'
        }}>
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
        </View>
        


      </View>
            </>
        }
      
    </View>
    </>
  
  )
}

export default Profile