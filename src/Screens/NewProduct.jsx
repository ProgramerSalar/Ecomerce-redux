import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../component/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import SelectComponent from '../component/SelectComponent'
import mime from "mime"
import { useDispatch, useSelector } from 'react-redux'

import Toast from 'react-native-toast-message'
import { createProduct } from '../redux/actions/otherAction'
import { useMessageAndErrorOther } from '../utils/hooks'



const NewProduct = () => {

    const [visible, setVisible] = useState(false)

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("Choose Category")
    const [categoryID, setCategoryID] = useState("")


    const [categories, setCategories] = useState([
        
        
    ])

    const navigation = useNavigation()
    const route = useRoute()
    useEffect(() => {
        if (route.params?.image) setImage(route.params.image)
          // dispatch update image 
      }, [route.params])   // only one 

    // const loading = false
    const dispatch = useDispatch()


    const submitHandler = () => {
       
        const myForm = new FormData()
    
        myForm.append("name", name)
        myForm.append("description", description)
        myForm.append("price", price)
        myForm.append("stock", stock)
        myForm.append("file", {
            uri:image,
            type:mime.getType(image),
            name: image.split("/").pop()
        })

        dispatch(createProduct(myForm))
        

        
        
    }



    useEffect(() => {
        if (route.params?.image) setImage(route.params.image);
      }, [route.params]);


    const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel")
    
  
    


    
  return (
    <>
    {
        loading ? (
            <Loader />
        ) : (
            <ScrollView style={{
                flex:1,
                backgroundColor:'green',
                
            }}>
                

                {/* Images  */}
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center'
                }}>
        <Avatar.Image
          style={{
            
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          size={80}
          source={{
            uri: image ? image : null
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('cameraComponent', {newProduct:true})}>
        <Avatar.Icon
        icon={'camera'}
        size={50}
        color={'blue'}
        style={{
            backgroundColor:'transparent',
            alignSelf:'center',

            position:'absolute',
            bottom:-10,
            right:-5
        }}
        />
        </TouchableOpacity>
      </View>

                {/* textinput  */}
                <View style={{
                    margin:10,
                    padding:10
                }}>
                    <TextInput value={name} onChangeText={setName} placeholder='Enter Product Name' />
                    <TextInput value={description} onChangeText={setDiscription} placeholder='Enter Product description' />
                    <TextInput value={price} onChangeText={setPrice} placeholder='Enter Product Price' />
                    <TextInput value={stock} onChangeText={setStock} placeholder='Enter Product Stock' />
                   
                </View>

                {/* category  */}
                <View
                style={{
                    backgroundColor:'white',
                    height:50,
                    width:400,
                    justifyContent:'center',
                    alignSelf:'center',
                    borderRadius:10
                }}
                >
                    <TouchableOpacity  onPress={() => setVisible(true) }>
                    <Text
                    style={{
                        alignSelf:'center',
                        fontWeight:'bold',
                        color:'blue'
                    }}
                    >{category}</Text>
                    </TouchableOpacity>
                    

                </View>


                <TouchableOpacity onPress={submitHandler}>
                    <Button 
                    loading={loading}
                    style={{
                        backgroundColor:'blue',
                        padding:10,
                        margin:10,

                    }}
                    >Add Product</Button>
                </TouchableOpacity>






            </ScrollView>
        )
    }

    <SelectComponent
    categories={categories}
    setCategoryID={setCategoryID}
    setCategory={setCategory}
    visible={visible}
    setVisible={setVisible}
    />



    </>
  )
}

export default NewProduct