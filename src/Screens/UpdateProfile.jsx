import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useMessageAndErrorUser } from '../utils/hooks'
import { updateProfile } from '../redux/actions/action'

const UpdateProfile = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pinCode, setPinCode] = useState("")
    // const loading = false
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "profile")
    const updateProfileHandler = () => {
        dispatch(updateProfile(name,email,address,
            city,
            country,
            pinCode))
    }



  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>
        <View style={{
            margin:10,
            top:50
        }}>
        <View>
            <TextInput value={name} onChangeText={setName} placeholder='Enter Name' />
            <TextInput value={email} onChangeText={setEmail} placeholder='Enter Email' />
            <TextInput value={address} onChangeText={setAddress} placeholder='Enter Address' />
            <TextInput value={city} onChangeText={setCity} placeholder='Enter City' />
            <TextInput value={country} onChangeText={setCountry} placeholder='Enter Country' />
            <TextInput value={pinCode} onChangeText={setPinCode} placeholder='Enter PinCode' />
        </View>
        <TouchableOpacity onPress={updateProfileHandler}>
            <Button
            loading={loading}
            style={{
                backgroundColor:'blue',
                padding:10,
                margin:10
            }}>UpdateProfile</Button>
        </TouchableOpacity>
        </View>

       



      





    </View>
  )
}

export default UpdateProfile