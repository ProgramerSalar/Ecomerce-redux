import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getProductDetails } from '../redux/actions/productAction';
import Carousel from 'react-native-snap-carousel';



const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ProductDetails = ({route:{params}}) => {

  const {
    product: { name, price, stock, description},
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);


  const isCarousel = useRef(null);

  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>

        <View>
            {/* Carousel */}
      {/* <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      /> */}
        </View>
         
        <Text style={{
          color:'white'
        }}>{name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
        <Text>{stock}</Text>
        
    








    </View>

  )
}

const CarouselCardItem = ({item, index}) => {
<View key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
}

const style = StyleSheet.create({
    container: {
    //   backgroundColor: 'blue',
      width: ITEM_WIDTH,
      paddingVertical: 40,
      height: 380,
    },
    image: {
      width: 600,
      resizeMode: "contain",
      height: 250,
    },
    quantity: {
    //   backgroundColor: colors.color4,
      height: 25,
      width: 25,
      textAlignVertical: "center",
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 5,
    //   borderColor: colors.color5,
    },
  
    btn: {
    //   backgroundColor: colors.color3,
      borderRadius: 100,
      padding: 5,
      marginVertical: 35,
    },
  });

export default ProductDetails