import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import mime from "mime"
import { useMessageAndErrorUser } from '../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/action'
import Toast from 'react-native-toast-message'



const Signup = () => {

    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const route = useRoute()

    const submitHandler = () => {

        const myForm = new FormData()
        myForm.append("avatar", avatar)
        myForm.append("name", name)
        myForm.append("email", email)
        myForm.append("password", password)

        if (avatar !== "" ){
            myForm.append("file",{
              uri: avatar,
              type: mime.getType(avatar),
              name: avatar.split("/").pop()
            });
          }

          dispatch(register(myForm))
    }

    const dispatch = useDispatch()
    const navigation = useNavigation()
    // const loading = useMessageAndErrorUser(navigation, dispatch, "home")

    useEffect(() => {
        if (route.params?.image) setAvatar(route.params.image)
          // dispatch update image 
      }, [route.params])   // only one 



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
              routes:[{"name":"home"}]
            })
              Toast.show({
                  type:"success",
                  text1:message
              })
              dispatch({
                type:"clearMessage"
              })
          }
          // dispatch(loadUser())
      
          
        },[error,message, dispatch])

  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>

         {/* Image  */}
      <View>
        <Avatar.Image
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          size={80}
          source={{
            uri: avatar ? avatar : defaultImg,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('cameraComponent')}>
            <Button>change Photo</Button>
        </TouchableOpacity>
      </View>

        <View style={{
            padding:10,
            margin:10
        }}>

            <TextInput value={name} onChangeText={setName} placeholder='Enter name' />
            <TextInput value={email} onChangeText={setEmail} placeholder='Enter email' />
            <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' />

            <TouchableOpacity onPress={submitHandler}>
            <Button
            loading={loading}
            style={{
                backgroundColor:'blue',
                padding:10,
                margin:10
            }}>SignUp</Button>
            </TouchableOpacity>
           
           <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
           }}>
           <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
            <Text style={{
                color:'white'
            }}>ForgetPassword?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login') }>
            <Text style={{
                color:'white'
            }}>Login</Text>
        </TouchableOpacity>
           </View>
           
        </View>
        
      




    </View>
  )
}


export const defaultImg = "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"

export default Signup