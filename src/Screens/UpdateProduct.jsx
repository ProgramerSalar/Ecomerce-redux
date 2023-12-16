import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Loader from '../component/Loader';
import SelectComponent from '../component/SelectComponent';
import { useMessageAndErrorOther, useSetCategories } from '../utils/hooks';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/actions/otherAction';
import { getProductDetails } from '../redux/actions/productAction';


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
    const [categories, setCategories] = useState([]);

    const isFocused = useIsFocused()
    useSetCategories(setCategories, isFocused)
    const {product, loading} = useSelector((state) => state.product)

    const submitHandler = () => { 
        dispatch(updateProduct(id, name, description, price, stock, categoryID));
    }


    const dispatch = useDispatch()
    const loadingOther = useMessageAndErrorOther(
        dispatch,
        navigation,
        "adminpanel"
        
    )

    useEffect(() => {
        dispatch(getProductDetails(id));
      }, [dispatch, id, isFocused]);
    
      useEffect(() => {
        if (product) {
          setName(product.name);
          setDescription(product.description);
          setPrice(String(product.price));
          setStock(String(product.stock));
          setCategory(product.category?.category);
          setCategoryID(product.category?._id);
        }
      }, [product]);


  




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
                                        images:product.images
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
                                    margin:30,
                                    fontWeight:'bold',
                                    color:'black'
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