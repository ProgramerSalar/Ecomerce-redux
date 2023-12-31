import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home from './src/Screens/Home'
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup'
import CameraComponent from './src/Screens/CamerComponent'
import ForgotPassword from './src/Screens/ForgotPassword'
import ResetPassword from './src/Screens/ResetPassword'
import Profile from './src/Screens/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './src/redux/actions/action'
import ChangePassword from './src/Screens/ChangePassword'
import UpdateProfile from './src/Screens/UpdateProfile'
import AdminPanel from './src/Screens/Admin/AdminPanel'
import NewProduct from './src/Screens/NewProduct'
import NewCategory from './src/Screens/Admin/NewCategory'
import { getAllProducts } from './src/redux/actions/productAction'
import ProductDetails from './src/Screens/ProductDetails'
import UpdateProduct from './src/Screens/UpdateProduct'
import ProductImages from './src/Screens/Admin/ProductImages'
import Cart from './src/Screens/Cart'
import ConfirmOrder from './src/Screens/ConfirmOrder'
import Payment from './src/Screens/Payment'
import Orders from './src/Screens/Orders'
import AdminOrder from './src/Screens/Admin/AdminOrder'



const Main = () => {

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(loadUser())
    
  },[dispatch])
  // console.log("loadUser",loadUser())

  const { products } = useSelector((state) => state.product);

  // const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
 
  }, [dispatch])





  


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signUp' component={Signup} />
          <Stack.Screen name='cameraComponent' component={CameraComponent} />
          <Stack.Screen name='forgotpassword' component={ForgotPassword} />
          <Stack.Screen name='resetPassword' component={ResetPassword} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='changepassword' component={ChangePassword} />
          <Stack.Screen name='updateprofile' component={UpdateProfile} />
          <Stack.Screen name='adminpanel' component={AdminPanel} />
          <Stack.Screen name='newProduct' component={NewProduct} />
          <Stack.Screen name='newCategory' component={NewCategory} />
          <Stack.Screen name='Productdetails' component={ProductDetails} />
          <Stack.Screen name='updateproduct' component={UpdateProduct} />
          <Stack.Screen name='productimages' component={ProductImages} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='confirmorder' component={ConfirmOrder} />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='order' component={Orders} />
          <Stack.Screen name='adminorders' component={AdminOrder} />

        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main