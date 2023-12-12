import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useMessageAndErrorUser } from '../utils/hooks'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { changePassword } from '../redux/actions/action'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "profile")


    const submitHandler = () => {
        dispatch(changePassword(oldPassword, newPassword))
        
    }

  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>
        <View style={{
            padding:10
        }}>
            <TextInput value={oldPassword} onChangeText={setOldPassword} placeholder='Enter Old Password' />
            <TextInput value={newPassword} onChangeText={setNewPassword} placeholder='Enter New Password' />
        </View>

        <TouchableOpacity onPress={submitHandler}>
            <Button
            loading={loading}
            style={{
                backgroundColor:'blue',
                margin:10,
                padding:10
            }}>
                change Password
            </Button>
        </TouchableOpacity>
 
    </View>
  )
}

export default ChangePassword