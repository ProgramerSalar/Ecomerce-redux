import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import mime from "mime"
import { deleteProductImage, updateProductImage } from '../../redux/actions/otherAction';
import { useMessageAndErrorOther } from '../../utils/hooks';
import ImageCard from '../../component/ImageCard';

const ProductImages = ({navigation, route}) => {

    const [images] = useState(route.params.images);
    const [productId] = useState(route.params.id);
    const [image, setImage] = useState(null);
    const [imageChanged, setImageChanged] = useState(false);
  
    const dispatch = useDispatch();
  
    const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel");
  
    
  
    const submitHandler = () => {
      const myForm = new FormData();
  
      myForm.append("file", {
        uri: image,
        type: mime.getType(image),
        name: image.split("/").pop(),
      });
  
      dispatch(updateProductImage(productId, myForm));
    };
  
    useEffect(() => {
      if (route.params?.image) {
        setImage(route.params.image);
        setImageChanged(true);
      }
    }, [route.params]);


    const deleteHandler = (imageId) => {
      dispatch(deleteProductImage(productId, imageId));
    };

    
  return (
    <View
      style={{
        
        backgroundColor: 'green',
      }}
    >

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.url}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: 'green',
        }}
      >
        <Image
          style={{
            backgroundColor: 'white',
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("cameraComponent", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              style={{
                backgroundColor: 'white',
                margin: 10,
              }}
              size={30}
              color='blue'
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{
            backgroundColor: 'blue',
            padding: 6,
          }}
          textColor={'white'}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          Add
        </Button>
      </View>
    </View>
  )
}

export default ProductImages