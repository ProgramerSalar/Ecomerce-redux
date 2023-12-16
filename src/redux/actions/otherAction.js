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




export const deleteProduct = (productId) => async (dispatch) => {

  try{
    dispatch({
      type:"deleteProductRequest"
    })

    const {data} = await axios.delete(`${server}/products/single/${productId}`,
    {
      withCredentials:true,
    }
    )

    dispatch({
      type:"deleteProductSuccess",
      payload:data.message
    })




  }catch(error){
    dispatch({
      type:"deleteProductFail"
    })
  }
}




export const updateProduct = (id, name, description, price, stock, category) => async(dispatch) => {
  try{
    dispatch({
      type:"updateProductRequest"
    })

    const {data} = await axios.put(
      `${server}/products/single/${id}`,
      {
        name,
        description,
        price,
        stock,
        category
      },
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      }
    )


    dispatch({
      type:"updateProductSuccess",
      payload: data.message
    })



  }catch(error){
    dispatch({
      type:"updateProductFail",
      payload:error.response.data.message
    })
  }
}



export const updateProductImage = (productId, formData) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProductImageRequest",
    });

    const { data } = await axios.post(
      `${server}/products/images/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "updateProductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateProductImageFail",
      payload: error.response.data.message,
    });
  }
};





export const deleteProductImage = (productId, imageId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductImageRequest",
    });

    const { data } = await axios.delete(
      `${server}/products/images/${productId}?id=${imageId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductImageFail",
      payload: error.response.data.message,
    });
  }
};