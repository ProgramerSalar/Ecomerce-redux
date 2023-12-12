import axios from "axios";
import { server } from "../store";







export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "loginRequest",
      });
  
      // Axios here
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true,
        }
      );
  
      dispatch({
          type:"loginSuccess",
          payload:data.message,
      })
  
    } catch (error) {
      dispatch({
          type:"loginFail",
          payload:error.response.data.message,
      })
  
    }
  };




export const register = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "registerRequest",
      });
  
      // Axios here
      const { data } = await axios.post(
        `${server}/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials:true,
        }
      );
  
      dispatch({
          type:"registerSuccess",
          payload:data.message,
      })
  
    } catch (error) {
      dispatch({
          type:"registerFail",
          payload:error.response.data.message,
      })
  
    }
  };





  export const forgotPassword = (email) => async (dispatch) => {
    try {
      dispatch({
        type: "forgotPasswordRequest",
      });
  
      // Axios here
      const { data } = await axios.post(
        `${server}/forgetpassword`,
        {
          email,
      
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true,
        }
      );
  
      dispatch({
          type:"forgotPasswordSuccess",
          payload:data.message,
      })
  
    } catch (error) {
      dispatch({
          type:"forgotPasswordFail",
          payload:error.response.data.message,
      })
  
    }
  };




  export const resetPassword = (otp, password) => async (dispatch) => {
    try {
      dispatch({
        type: "resetPasswordRequest",
      });
  
      // Axios here
      const { data } = await axios.put(
        `${server}/forgetpassword`,
        {
          otp,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true,
        }
      );
  
      dispatch({
          type:"resetPasswordSuccess",
          payload:data.message,
      })
  
    } catch (error) {
      dispatch({
          type:"resetPasswordFail",
          payload:error.response.data.message,
      })
  
    }
  };




export const loadUser = () => async(dispatch) => {

  try{
    dispatch({
      type:"loadUserRequest"
    })

    const {data} = await axios.get(`${server}/me`, {
      withCredentials:true,
    })

    dispatch({
      type:"loadUserSuccess",
      payload: data.user
    })
  }catch(error){
    dispatch({
      type:"loadUserFail",
      payload:error.response.data.message
    })
  }


}


export const logout = () => async(dispatch) => {

  try{

    dispatch({
      type:"logoutRequest"
    })

    const {data} = await axios.get(`${server}/logout`, {
      withCredentials:true
    })

    dispatch({
      type:"logoutSuccess",
      payload:data.message
    })

  }catch(error){
    dispatch({
      type:"logoutFail",
      payload:error.response.data.message
    })
    
  }
}




export const changePassword = (oldPassword, newPassword) => async(dispatch) => {

  try{

    dispatch({
      type:"changepasswordRequest",
      
    })
    const {data} = await axios.put(`${server}/changepassword`,{
      oldPassword,
      newPassword
    },
    {
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    }
    )


    dispatch({
      type:"changePasswordSuccess",
      payload:data.message,
    })

  }catch(error){
    dispatch({
      type:"changePasswordFail",
      payload:error.response.data.message
    })
  }
}