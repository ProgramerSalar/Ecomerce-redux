import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CartItem from '../component/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';




const Cart = () => {

  const {cartItems } = useSelector((state) => state.cart)

    const navigate = useNavigation()
    const dispatch = useDispatch()




    const decrementHandler = (id, name, price, image, stock, quantity) => {
      const newQty = quantity - 1;
  
      if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });
  
      dispatch({
        type: "addToCart",
        payload: {
          product: id,
          name,
          price,
          image,
          stock,
          quantity: newQty,
        },
      });
    };


    const incrementHandler = (id, name, price, image, stock, quantity) => {
      const newQty = quantity + 1;
      if (stock <= quantity)
        return Toast.show({
          type: "error",
          text1: "Maximum value added",
        });
      dispatch({
        type: "addToCart",
        payload: {
          product: id,
          name,
          price,
          image,
          stock,
          quantity: newQty,
        },
      });
    };
    return (
        <View style={{
            
          flex:1,
          backgroundColor:'green'
        }}>

          

            <View
                style={{
                    paddingVertical: 20,
                    flex: 1,

                }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    { 

                     cartItems.map((i, index) => (
                      <CartItem
                          key={i.product}
                          id={i.product}
                          name={i.name}
                          stock={i.stock}
                          amount={i.price}
                          imgSrc={i.image}
                          index={index}
                          qty={i.quantity}
                          incrementhandler={incrementHandler}
                          decrementHandler={decrementHandler}



                      />) 
                 

                  )
                    }

                </ScrollView>


            </View>
            <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
          backgroundColor:'white',
          height:50,
          width:400,
          borderRadius:10,
          flexDirection:'row',
          justifyContent:'space-between',
          alignSelf:'center',
          textAlign:'center'
          

        }}
      >
        <Text style={{alignSelf:'center', fontWeight:'bold', color:'black'}}>{cartItems.length} Items</Text>
        <Text style={{alignSelf:'center', textAlign:'center', fontWeight:'bold', color:'black'}}>
          ₹
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text>
      </View>



            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}>
              

            </View>

            <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: 'blue',
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={'white'}
        >
          Checkout
        </Button>
      </TouchableOpacity>






        </View>
    )
}



export default Cart