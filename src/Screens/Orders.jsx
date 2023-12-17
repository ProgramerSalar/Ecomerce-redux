import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderItem from '../component/OrderItem'
import { useGetOrders } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import Loader from '../component/Loader'
import { Headline } from 'react-native-paper'

const Orders = () => {

    const isFocused = useIsFocused()
    const { loading, orders} = useGetOrders(isFocused)



  return (
    <View
      style={{
        flex:1,
        backgroundColor:'green'
      }}
    >
     

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  )
}

export default Orders