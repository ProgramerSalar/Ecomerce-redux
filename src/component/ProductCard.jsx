import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductCard = ({
    name,
    price,
    image,
    id,
    i
}) => {

    const productHandler = (id) => {
        console.log(id)
    }







  return (
    <View style={{
    
    }}>
        <TouchableOpacity style={{
            backgroundColor:'blue',
            height:200,
            borderRadius:10,
            margin:1
        }} onPress={() => productHandler(id)}>
            <Image 
            source={{
                uri:image,
            }}
            style={{
                width:100,
                height:150,
                margin:5,
                borderRadius:10
                
                
            }}
              />

              <Text style={{
                color:'white',
                alignSelf:'center'
              }}>{name}</Text>
              <Text style={{
                color:'white',
                alignSelf:'center'
              }}>${price}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductCard