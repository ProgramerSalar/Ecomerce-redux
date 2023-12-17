import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Loader from '../../component/Loader';
import ButtonBox from '../../component/ButtonBox';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ProductListItem from '../../component/ProductListItem';
import { useAdminProducts, useMessageAndErrorOther } from '../../utils/hooks';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/otherAction';
import { getAdminProducts } from '../../redux/actions/productAction';



const AdminPanel = () => {
  // const loading = false;
  const navigation = useNavigation();
  const navigationHandler = text => {
    switch (text) {
      case 'Product':
        navigation.navigate('newProduct');
        break;

      case 'All Orders':
        navigation.navigate('adminorders');
        break;

      case 'Category':
        navigation.navigate('newCategory');
        break;
    }
  };
  

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id))

  }



  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const {loading, products, inStock, outofStock} = useAdminProducts(
    dispatch,
    isFocused
  )

  const loadingDelete = useMessageAndErrorOther(
    dispatch,
    null,
    null,
    getAdminProducts
  )
  


  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <View
                style={{
                  height: 150,
                  width: 400,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  margin: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 20,
                }}>
                <ButtonBox
                  icon={'card-plus'}
                  text={'Product'}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={'stack-exchange'}
                  text={'All Orders'}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={'plus'}
                  text={'Category'}
                  handler={navigationHandler}
                />
              </View>
              <View style={{
            backgroundColor:'white',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            borderRadius:10,
            margin:10,
        }}>
            <Text style={{ fontWeight:'bold' }}>Image</Text>
            <Text style={{ fontWeight:'bold' }}>Name</Text>
            <Text style={{ fontWeight:'bold' }}>Price</Text>
            <Text style={{ fontWeight:'bold' }}>Category</Text>
            <Text style={{ fontWeight:'bold' }}>Stock</Text>
        </View>
              <ScrollView>
                { !loadingDelete &&
                    products.map((item, index) => (
                        <ProductListItem  
                        id={item._id}
                        key={item._id}
                        i={index}
                        name={item.name}
                        stock={item.stock}
                        category={item.category?.category}
                        price={item.price}
                        imgSrc={item.images[0].url}
                        deleteHandler={deleteHandler}
                        navigation = {navigation}
                        />
                    ))
                }
              </ScrollView>



            </View>
          </>
        )}
      </View>
    </>
  );
};

export default AdminPanel;
