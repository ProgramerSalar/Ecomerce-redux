import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ConfirmOrderItem from '../component/ConfirmOrderItem';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ConfirmOrder = () => {

    const {cartItems} = useSelector((state) => state.cart)
    const navigate = useNavigation()

    const [itemsPrice] = useState(
        cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
      );
      const [shippingCharges] = useState(itemsPrice > 10000 ? 0 : 200);
      const [tax] = useState(Number((0.18 * itemsPrice).toFixed()));
      const [totalAmount] = useState(itemsPrice + shippingCharges + tax);









  return (
    <View 
    style={{
        flex:1,
        backgroundColor:'grey'
    }}>
    

    <View
      style={{
        paddingVertical: 20,
        flex: 1,
      }}
    >
      <ScrollView>
        {cartItems.map((i) => (
          <ConfirmOrderItem
            key={i.product}
            price={i.price}
            image={i.image}
            name={i.name}
            quantity={i.quantity}
          />
        ))}
      </ScrollView>
    </View>
    <View style={{
        backgroundColor:'white',
        fontWeight:'bold',
        borderRadius:10
    }}>

    <PriceTag heading={"Subtotal"} value={itemsPrice} />
    <PriceTag heading={"Shipping"} value={shippingCharges} />
    <PriceTag heading={"Tax"} value={tax} />
    <PriceTag heading={"Total"} value={totalAmount} />
    </View>


    <TouchableOpacity
      onPress={() =>
        navigate.navigate("payment", {
          itemsPrice,
          shippingCharges,
          tax,
          totalAmount,
        })
      }
    >
      <Button
        style={{
          backgroundColor: 'blue',
          borderRadius: 100,
          padding: 5,
          margin: 10,
        }}
        textColor='white'
        icon={"chevron-right"}
      >
        Payment
      </Button>
    </TouchableOpacity>
  </View>
);
};
const PriceTag = ({ heading, value }) => (
<View
  style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  }}
>
  <Text style={{ fontWeight: "800" }}>{heading}</Text>
  <Text>₹{value}</Text>
</View>
);



export default ConfirmOrder;