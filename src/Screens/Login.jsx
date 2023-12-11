import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/action';
import Toast from 'react-native-toast-message';


const Login = () => {

    const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


    const dispatch = useDispatch()
    // loading = true
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
      navigation.navigate("home")
        Toast.show({
            type:"success",
            text1:message
        })
        dispatch({
          type:"clearMessage"
        })
    }

    
  },[error,message, dispatch])


  const submitHandler = () => {
    dispatch(login(email,password))
  };





  
 

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
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
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
          }}>Login</Button>
        </TouchableOpacity>
      </View>
      <View style={{
        margin:10,
        marginTop:10,
        top:50,
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
        <Text>SignUp?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgetPassword")}>
        <Text>ForgetPassword?</Text>
      </TouchableOpacity>

      </View>
     
      
    </View>
  );
};



export default Login;
