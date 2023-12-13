import { View, Text } from 'react-native'
import React from 'react'
import Loader from '../../component/Loader'
import ButtonBox from '../../component/ButtonBox'
import { useNavigation } from '@react-navigation/native'

const AdminPanel = () => {
    const loading = false
    const navigation = useNavigation()
    const navigationHandler = (text) => {
        switch(text){
            case "Product":
                navigation.navigate("newProduct")
                break;

            case "All Orders":
                navigation.navigate("allOrders")
                break;

            case "Category":
                navigation.navigate("newCategory")
                break;
        }
    }
  return (
    <>
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>
        {
            loading ? (
                <Loader />
            ) : (
                <>
                <View style={{
                    alignSelf:'center',
                    
                }}>
                    <View style={{
                        height:150,
                        width:400,
                        backgroundColor:'white',
                        borderRadius:10,
                        margin:10,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        padding:20
                    }}>
                       
                        <ButtonBox icon={'card-plus'} text={'Product'} handler={navigationHandler} />
                        <ButtonBox icon={'stack-exchange'} text={'All Orders'} handler={navigationHandler} />
                        <ButtonBox icon={'plus'} text={'Category'} handler={navigationHandler} />
                    </View>
                </View>
                </>
            )
        }
    </View>
    </>
 
  )
}

export default AdminPanel