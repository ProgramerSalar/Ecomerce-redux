import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {getProductDetails} from '../redux/actions/productAction';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;















const ProductDetails = ({route: {params}}) => {

  const [quantity, setQuantity] = useState(1)

  const {
    product: {name, price, stock, description, images},
  } = useSelector(state => state.product);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  const isCarousel = useRef(null);



  const navigation = useNavigation()

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: params.id,
        name,
        price,
        image: images[0]?.url,
        stock,
        quantity,
      },
    });
    
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
    return navigation.navigate("cart")

  }


  const incrementQty = () => {
    if(stock <= quantity)
    return Toast.show({
  type:"error",
  text1:`Maximum ${stock} quantity of item`
})
    setQuantity((prev) => prev + 1)
  
  };
  const decrementQty = () => {
    if(quantity <= 1) return
    setQuantity((prev) => prev - 1)

  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
        <ScrollView>
        <View>
        <Carousel
          layout="tinder"
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />
      </View>

      <View style={{
        backgroundColor:'white',
        margin:10,
        padding:10,
        borderRadius:10
      }}>
        <Text>{name}</Text>
        <Text>${price}</Text>
        <Text>{stock}</Text>
        <Text>{description}</Text>
      </View>

      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: "100",
            }}
          >
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} size={30} style={{
                right:20
              }}/>
            </TouchableOpacity>

            <Text style={
              {
                backgroundColor:'white',
                color:'black',
                fontWeight:'bold',
                right:10
                
                
              }
            }>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      
      <TouchableOpacity onPress={addToCartHandler}>
        <Button 
        style={{
          backgroundColor:"blue",
padding:10,
margin:50,
top:10,

        }}
        >Add To Cart</Button>
      </TouchableOpacity>

        </ScrollView>
       
      
    </View>
  );
};

const CarouselCardItem = ({item, index}) => (
  <View style={style.container} key={index}>
    <Image source={{uri: item.url}} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    paddingVertical: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: 'contain',
    height: 250,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default ProductDetails;
