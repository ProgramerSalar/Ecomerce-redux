import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import { Avatar, Button } from 'react-native-paper'
import ProductCard from '../component/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions/productAction'
import { Image } from 'react-native'




const categories = [
  { category: "footbal", _id: "1" },
  { category: "ball", _id: "2" },
  { category: "baT", _id: "3" },
  { category: "copy", _id: "4" },
  { category: "book", _id: "5" },
  { category: "bag", _id: "6" },
  { category: "mobile", _id: "7" },
]



const Home = () => {

  


  const [category, setCategory] = useState("")
  const categoryButtonHandler = (id) => {
    setCategory(id)
  }

  const { products } = useSelector((state) => state.product);
  // console.log(products)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllProducts())
 
  // }, [dispatch])


  

  

  
  return (
    <>
      <View style={{
        flex:1,
        backgroundColor:'green'
      }}>

        {/* search  */}
        <View style={{
          flexDirection:'row',
          justifyContent:'flex-end',
          padding:10
        }}>
          <Avatar.Icon icon={'magnify'} />

        </View>

        {/* categories  */}
        <View style={{
          flexDirection: 'row',
          height: 80
        }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ alignItems: 'center' }}>
            {
              categories.map((item, index) => (
                <Button
                  key={item._id}
                  style={{
                    backgroundColor: category === item._id ? 'blue' : 'white',
                    borderRadius: 100,
                    margin: 5
                  }}
                  onPress={() => categoryButtonHandler(item._id)}>
                  <Text style={{
                    fontSize: 12,
                    color: category === item._id ? 'white' : "gray"
                  }}>

                  </Text>
                  {item.category}
                </Button>
              ))
            }
          </ScrollView>

        </View>
       



        {/* products  */}
        <View style={{
          flex:1
        }}>
          <ScrollView 
          horizontal showsHorizontalScrollIndicator={false}
          style={{
            
          }}
          >

          {
              products.map((item, index) => (
                <ProductCard
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]?.url}
                  id={item._id}
                  key={item._id}
                  i={index}
                  

                />
              ))
            }
          </ScrollView>


          

        </View>




        
        <View>
          {/* <Text>{products.name}</Text> */}
          {/* <Text>"product", {products.name}</Text> */}
          <Text>Hello world</Text>
          <Image 
          style={{
            height:100,
            width:100
          }}
          
          />
        </View>



      






    </View>
    <Footer />
    </>
   
  
  )
}

export default Home