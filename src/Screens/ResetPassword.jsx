import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { resetPassword } from '../redux/actions/action';





const ResetPassword = () => {
  const navigation = useNavigation()
  const [otp, setotp] = useState('');
  const [password, setPassword] = useState('');
 


    const dispatch = useDispatch()
    // const loading = useMessageAndErrorUser(navigation, dispatch, "home")
    


  const submitHandler = () => {
    dispatch(resetPassword(otp,password))
  };


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
        // dispatch(loadUser())
    
        
      },[error,message, dispatch])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        padding:10,
        
      }}>

        

      <View style={{
        top:50
      }}>
        <TextInput placeholder="Emter OTP" value={otp} onChangeText={setotp} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={submitHandler}>
          <Button
          loading={loading}
          style={{
            backgroundColor:'blue',
            margin:10,
            padding:10
          }}>Reset Password</Button>
        </TouchableOpacity>
      </View>
      
     
      
    </View>
  );
}

export default ResetPassword