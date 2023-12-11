import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home from './src/Screens/Home'
import Login from './src/Screens/Login'








const Main = () => {


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='login' component={Login} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main