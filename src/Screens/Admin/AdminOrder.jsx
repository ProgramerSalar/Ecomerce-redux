import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useGetOrders, useMessageAndErrorOther } from '../../utils/hooks';
import { processOrder } from '../../redux/actions/otherAction';
import Loader from '../../component/Loader';
import OrderItem from '../../component/OrderItem';
import { Headline } from 'react-native-paper';

const AdminOrder = ({ navigation }) => {


  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const { loading, orders } = useGetOrders(isFocused, true);

  const processOrderLoading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "adminpanel"
  );

  const updateHandler = (id) => {
    dispatch(processOrder(id));
  };
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
                admin={true}
                updateHandler={updateHandler}
                loading={processOrderLoading}
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

export default AdminOrder