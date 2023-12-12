import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/action';
import Toast from 'react-native-toast-message';
import { useMessageAndErrorUser } from '../utils/hooks';


const Login = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation, dispatch, "home")
    


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
        <Text style={{
          color:'white'
        }}>SignUp?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgotpassword")}>
        <Text style={{
          color:'white'
        }}>ForgetPassword?</Text>
      </TouchableOpacity>

      </View>
     
      
    </View>
  );
};



export default Login;
