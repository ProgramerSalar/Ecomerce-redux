import axios from "axios";
import { server } from "../store";




export const updatePic = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePicRequest",
      });
  
      const { data } = await axios.put(`${server}/user/updatepic`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
  
      dispatch({
        type: "updatePicSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePicFail",
        payload: error.response.data.message,
      });
    }
  };


export const createProduct = (formData) => async(dispatch) => {

  try{
    dispatch({
      type:"addProductRequest"
    })


    const {data} = await axios.post(
      `${server}/products/new`, 
      formData,
      {
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true,
      }
    )



    dispatch({
      type:"addProductSuccess",
      payload:data.message,
    })



  }catch(error){
    dispatch({
      type:"addProductFail",
      payload:error.response.data.message
    })
  }
}



export const addCategory = (category) => async(dispatch) => {

  try{
    dispatch({
      type:"addCategoryRequest"
    })

    const {data} = await axios.post(
      `${server}/products/category`, {
        category,
      },{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
      }
    )

    dispatch({
      type:"addCategorySuccess",
      payload:data.message
    })
    
  }catch(error){
    dispatch({
      type:"addCategoryFail",
      payload: error.response.data.message
    })
  }
}




export const deleteCategory = (id) => async(dispatch) => {

  try{
    dispatch({
      type:"deleteCategoryRequest"
    })

    const {data} = await axios.delete(
      `${server}/products/category/${id}`,{
        withCredentials:true
      }
    )


    dispatch({
      type:"deleteCategorySuccess",
      payload: data.message
    })



  }catch(error){
    dispatch({
      type:"deleteCategoryFail",
      payload: error.response.data.message
    })
  }
  
}