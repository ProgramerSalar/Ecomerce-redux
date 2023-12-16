import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Loader from '../component/Loader';
import SelectComponent from '../component/SelectComponent';


const UpdateProduct = ({ route, navigation }) => {

    // console.log(route.params)
    const [visible, setVisible] = useState(false);

    const [id] = useState(route.params.id);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([
        {"_id":"1", category:"laptop"},
        {"_id":"2", category:"laptop"},
        {"_id":"3", category:"laptop"},
        {"_id":"4", category:"laptop"},
        {"_id":"5", category:"laptop"},
    ]);

    const loading = false
    const loadingOther = false
    const submitHandler = () => { 
        console.log(name,description,price,stock,categoryID)
    }

    const images = [
        {
         
          url: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
          _id: '1',
        },
        {
          _id: '2',
          url: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          _id: '3',
          url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
      ]


    return (
        <>

            <View style={{
                flex:1,
                backgroundColor:'green'
            }}
            >


                {loading ? (
                    <Loader />
                ) : (
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                        style={{
                            padding: 20,
                            elevation: 10,
                            borderRadius: 10,
                            // backgroundColor: colors.color3,
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                height: 650,
                            }}
                        >
                            <Button
                                onPress={() =>
                                    navigation.navigate("productimages", {
                                        id,
                                        images:images,
                                    })
                                }
                                textColor='red'
                            >
                                Manage Images
                            </Button>

                            <TextInput
                        
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                            />
                            <TextInput
                            
                                placeholder="Description"
                                value={description}
                                onChangeText={setDescription}
                            />

                            <TextInput
                                
                                placeholder="Price"
                                keyboardType="number-pad"
                                value={price}
                                onChangeText={setPrice}
                            />
                            <TextInput
                                
                                placeholder="Stock"
                                value={stock}
                                keyboardType="number-pad"
                                onChangeText={setStock}
                            />
                            <TouchableOpacity>
                            <Text
                                style={{
                                    backgroundColor:'white',
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                    borderRadius: 3,
                                    height:50,
                                    margin:30
                                }}
                                onPress={() => setVisible(true)}
                            >
                                {category}
                            </Text>
                            </TouchableOpacity>

                           

                            <Button
                            
                                style={{
                                    backgroundColor: 'blue',
                                    margin: 20,
                                    padding: 6,
                                }}
                                onPress={submitHandler}
                                loading={loadingOther}
                                disabled={loadingOther}
                            >
                                Update
                            </Button>
                        </View>
                    </ScrollView>
                )}



            </View>

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

export default UpdateProduct



// /product/admin`