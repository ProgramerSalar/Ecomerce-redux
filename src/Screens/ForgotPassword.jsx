import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useMessageAndErrorUser } from '../utils/hooks'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../redux/actions/action'
import Toast from 'react-native-toast-message'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // const loading = useMessageAndErrorUser(navigation, dispatch, "resetPassword")
    const submitHandler = () => {
        dispatch(forgotPassword(email))
    }


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
            routes:[{"name":"resetPassword"}]
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

<View style={{
    padding:10,
    margin:10,
    top:50
}}>
<View>
            <TextInput value={email} onChangeText={setEmail} placeholder='Enter Email' />
        </View>
        <View>
            <Button
            loading={loading}
            onPress={submitHandler} style={{
                backgroundColor:'blue',
                padding:10,
                margin:10
            }}>
                Forgot Password
            </Button>
        </View>
</View>
       
      
    </View>
  )
}

export default ForgotPassword