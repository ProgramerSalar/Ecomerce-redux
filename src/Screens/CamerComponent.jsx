

import { View, Text, TouchableOpacity,Pressable,
  
    StyleSheet } from 'react-native'
  import React, { useState } from 'react'
  
  import { RNCamera } from 'react-native-camera'
  import { useCamera } from 'react-native-camera-hooks'
  import { Avatar } from 'react-native-paper'
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
  import * as ImagePicker from 'react-native-image-picker';
  
  
  
  
  const CameraComponent = ({ navigation, route}) => {
  
    const [{cameraRef}, {takePicture}] = useCamera(null)
    const [type, setType] = useState(RNCamera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
  
  
  // galery
  
  
    const openImagePicker = async () => {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
  
      const data = await launchImageLibrary(options);
      console.log(data)
  
  
      if (route.params?.newProduct)   // if newProduct condition is  right
      return navigation.navigate("newproduct", {     // then come to newproduct page
          image: data.assets[0].uri,  // with image 
          
      });
      if (route.params?.updateproduct)
              return navigation.navigate("productimages", {
                  image: data.assets[0].uri,
              });
          if (route.params?.updateProfile)
              return navigation.navigate("profile", {
                  image: data.assets[0].uri,
              });
          else
              return navigation.navigate("signUp", {
                  image: data.assets[0].uri,
              });
  
  
  
  
  
    };
  

    // click photo 
  
  
    const clickPicture = async() => {
  
      
      const data = await takePicture()
      console.log(data)
  
      if (route.params?.newProduct)
      return navigation.navigate("newproduct", {
          image: data.uri,
      });
  
  if (route.params?.updateproduct)
      return navigation.navigate("productimages", {
          image: data.uri,
      });
  if (route.params?.updateProfile)
      return navigation.navigate("profile", {
          image: data.uri,
      });
  else
      return navigation.navigate("signUp", {
          image: data.uri,
      });
  
  
  
    }
  
  
  
    return (
      <View style={{
        flex:1
      }}>
        <RNCamera 
        ref={cameraRef}
        type={type}
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'flex-end'
        }}
        >
  
          
  
          <View
          style={{
            flexDirection:'row',
            bottom:10,
            width:'100%',
            justifyContent:'space-evenly',
        
          }}
          >
            <TouchableOpacity onPress={() => openImagePicker()}>
            <Avatar.Icon icon={'image'}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={clickPicture}>
            <Avatar.Icon icon={'camera'}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setType(prevType => prevType === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back)
            }} >
            <Avatar.Icon icon={'camera-flip'}  />
            </TouchableOpacity>
  
          </View>
  
  
  
  
  
          
  
  
          
  
  
  
          
  
        </RNCamera>
      
      </View>
    )
  }
  
  
  const MyIcon = (icon) => {
  
    <TouchableOpacity>
      <Avatar.Icon icon={icon}  />
    </TouchableOpacity>
  }
  
  
  
  
  
  
  
  
  
  export default CameraComponent

// export default CameraComponent