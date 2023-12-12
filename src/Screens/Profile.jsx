import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Loader from '../component/Loader'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useMessageAndErrorUser } from '../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { defaultImg } from './Signup'
import ButtonBox from '../component/ButtonBox'
import { logout } from '../redux/actions/action'

const Profile = () => {

    // const loading = false
    const navigation = useNavigation()
   

    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "login")

    const {user} = useSelector((state) => state.user)
    const [avatar, setAvatar] = useState(user?.avatar?user.avatar.url: defaultImg)


    const logoutHandler = () => {
      dispatch(logout())
    }


    const handler = (text) => {

      switch(text){
        case "Orders":
          navigation.navigate("order")
          break

        case "Sign Out":
          logoutHandler()
          break

        case "Admin":
          navigation.navigate('adminpanel')
          break


        case "Profile":
          navigation.navigate("updateprofile")
          break

        case "password":
          navigation.navigate('changepassword')
          break

        
      }


      
      
    }


    



  return (
    <>
      <View style={{
        flex:1,
        backgroundColor:'green',
        
    }}>

        {
            loading ?
            (<Loader  />)
             : (
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
          <TouchableOpacity onPress={() => navigation.navigate('cameraComponent', {updateProfile:true})}>
              <Button>Change Photo</Button>
          </TouchableOpacity>
  
          <View style={{
              flexDirection:'column',
              alignSelf:'center'
          }}>
          <Text>{user?.name}</Text>
          <Text>{user?.email}</Text>
          </View>
  
          <View style={{
            height:200,
            width:400,
            backgroundColor:'grey',
            alignSelf:'center',
            margin:20,
            borderRadius:10
            
            
          }}>
  
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              margin:10
            }}>
            <ButtonBox icon={'format-list-bulleted-square'} text={'Orders'} handler={handler} />
           <ButtonBox icon={'view-dashboard'} text={'Admin'} handler={handler} />
           <ButtonBox icon={'pencil'} text={'Profile'} handler={handler} />
            </View>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              margin:10
            }}>
            <ButtonBox icon={'key-change'} text={'password'} handler={handler} />
            <ButtonBox icon={'exit-to-app'} text={'Sign Out'} handler={handler} />
            </View>
  
          
  
  
  
          </View>
          
  
  
        </View>
              </>

             )
           
        }
      
    </View>
    </>
  
  )
}

export default Profile