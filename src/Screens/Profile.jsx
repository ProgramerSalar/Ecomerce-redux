import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../component/Loader'
import { Avatar, Button } from 'react-native-paper'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { useMessageAndErrorOther, useMessageAndErrorUser } from '../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { defaultImg } from './Signup'
import ButtonBox from '../component/ButtonBox'
import { loadUser, logout } from '../redux/actions/action'
import mime from "mime"
import { updatePic } from '../redux/actions/otherAction'
import Toast from 'react-native-toast-message'

const Profile = () => {

  const {user} = useSelector((state) => state.user)
  
    const [avatar, setAvatar] = useState(defaultImg)

    // const loading = false
    const navigation = useNavigation()
   
    const route = useRoute()
    const isFocused = useIsFocused();
    const dispatch = useDispatch()
    const isAdmin = true 
    

    const {loading, message, error, isAuthenticated} = useSelector((state) => state.user)
    console.log(isAuthenticated)

    useEffect(() => {
        if(error){
            Toast.show({
                type:"error",
                text1:error
            })
            dispatch({
              type:"clearError"
            })
        }
    
        if(message){
          navigation.reset({
            index:0,
            routes:[{"name":"login"}]
          })
            Toast.show({
                type:"success",
                text1:message
            })
            dispatch({
              type:"clearMessage"
            })
        }
        dispatch(loadUser())
    
        
      },[error,message, dispatch])


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



    // update Image
    const loadingPic = useMessageAndErrorOther(dispatch, navigation, "profile", loadUser);
   
    useEffect(() => {
      if (route.params?.image) {
        setAvatar(route.params.image);
        // dispatch updatePic Here
        const myForm = new FormData();
        myForm.append("file", {
          uri: route.params.image,
          type: mime.getType(route.params.image),
          name: route.params.image.split("/").pop(),
        });
        dispatch(updatePic(myForm));
      }
  
      dispatch(loadUser());
    }, [route.params, dispatch, isFocused]);

   
    


    useEffect(() => {
      if (user?.avatar) {
        setAvatar(user.avatar.url);
      }
    }, [user]);


 



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
          <TouchableOpacity
          disabled={loadingPic}
          onPress={() => navigation.navigate('cameraComponent', {updateProfile:true})}>
              <Button
              // disabled={loadingPic}
              loading={loadingPic}
              >Change Photo</Button>
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