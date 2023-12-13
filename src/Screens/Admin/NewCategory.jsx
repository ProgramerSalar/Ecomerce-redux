import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CategoryCard from '../../component/CategoryCard';
import {Button, TextInput} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { addCategory, deleteCategory } from '../../redux/actions/otherAction';
import { useMessageAndErrorOther, useSetCategories } from '../../utils/hooks';



const NewCategory = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([])


  // delete Category
  const deleteHandler = (id) => {
    dispatch(deleteCategory(id))
  };


  const dispatch = useDispatch()
  const navigation = useNavigation()

  const loading = useMessageAndErrorOther(dispatch, navigation, "newCategory")

  // get the category
  const isFocused = useIsFocused()
  useSetCategories(setCategories, isFocused)

  

  

  const submitHandler = () => {
    dispatch(addCategory(category))
    
  };

//   const loading = false;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: 'green',
            padding: 20,
            minHeight: 400,
          }}>
          {categories.map(i => (
            <CategoryCard
              name={i.category}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          height: 250,
          width: 400,
          backgroundColor: 'green',
        }}>
        <TextInput
          style={{
            borderRadius: 10,
          }}
          placeholder="Enter Category"
          value={category}
          onChangeText={setCategory}
        />
        <TouchableOpacity
          style={{
            top: 40,
          }}
          onPress={submitHandler}>
          <Button
            style={{
              backgroundColor: 'blue',
              padding: 10,
              margin: 10,
            }}
            loading={loading}
            disabled={!category}>
            Add Category
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCategory;
