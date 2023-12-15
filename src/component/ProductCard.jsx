import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({
    name,
    price,
    image,
    id,
    i
}) => {
  const navigation = useNavigation()

    const productHandler = (id) => {
      navigation.navigate("Productdetails", {id})
        
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