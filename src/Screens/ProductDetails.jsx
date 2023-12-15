import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {getProductDetails} from '../redux/actions/productAction';
import Carousel from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ProductDetails = ({route: {params}}) => {
  const {
    product: {name, price, stock, description, images},
  } = useSelector(state => state.product);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  const isCarousel = useRef(null);


  const addToCartHandler = () => {
    console.log('hello world')

  }

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
        <Text>{price}</Text>
        <Text>{description}</Text>
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
