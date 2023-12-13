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