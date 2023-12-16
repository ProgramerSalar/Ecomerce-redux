import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MyModal from './MyModal'

const ProductListItem = ({
    name,id, i, stock, category, price, imgSrc, 
    deleteHandler,
    navigation
}) => {

    const [openModal, setOpenModal] = useState(false)
 

  return (
    <>
    {
        openModal && (
            <MyModal  
            id={id}
            deleteHandler={deleteHandler}
            navigation={navigation}
            setOpenModal={setOpenModal}
            />
        )
    }


    <TouchableOpacity 
    activeOpacity={0.9}
    onPress={() => setOpenModal((prev) => !prev)}
    >

      



        <View style={{
            padding:10,
            backgroundColor:'white',
            margin:10,
            borderRadius:10,
            flexDirection:'row',
            justifyContent:'space-between'



        }}>
    
        <Image source={{ uri: imgSrc }} style={{ height:40, width:40}} />
        <Text style={{alignSelf:'center', fontWeight:'bold'}}>{name}</Text>
        <Text style={{alignSelf:'center', fontWeight:'bold'}}>${price}</Text>
        <Text style={{alignSelf:'center', fontWeight:'bold'}}>{category}</Text>
        <Text style={{alignSelf:'center', fontWeight:'bold'}}>{stock}</Text>


        </View>
    </TouchableOpacity>
    </>
  )
}

export default ProductListItem