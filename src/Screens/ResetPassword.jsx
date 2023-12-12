import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useMessageAndErrorUser } from '../utils/hooks'
import { resetPassword } from '../redux/actions/action'

const ResetPassword = () => {
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "home")
    const submitHandler = () => {
        dispatch(resetPassword(otp, password))
    }

  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>


        <View style={{
            padding:10,
            margin:10
        }}>
            <TextInput value={otp} onChangeText={setOtp} placeholder='Enter Otp' />
            <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' />
        </View>

        <TouchableOpacity onPress={submitHandler}>
                <Button
                loading={loading}
                style={{
                    backgroundColor:'blue',
                    padding:10,
                    margin:10
                }}> reset Password</Button>
            </TouchableOpacity>
      
    </View>
  )
}

export default ResetPassword