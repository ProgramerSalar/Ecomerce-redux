import axios from "axios";
import { server } from "../store";







export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "loginRequest",
      });
  
      // Axios here
      const { data } = await axios.post(
        `${server}/user/login`,
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
        `${server}/user/signup`,
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
        `${server}/user/forgetpassword`,
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
        `${server}/user/forgetpassword`,
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

    const {data} = await axios.get(`${server}/user/me`, {
      withCredentials:true,
    })
    // console.log(data)

    dispatch({
      type:"loadUserSuccess",
      payload: data.user
    })
    // console.log("payload",a)

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

    const {data} = await axios.get(`${server}/user/logout`, {
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
    const {data} = await axios.put(`${server}/user/changepassword`,{
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





export const updateProfile = (name, email,address,
  city,
  country,
  pinCode ) => async(dispatch) => {

  try{

    dispatch({
      type:"updateProfileRequest"
    })

    const {data} = await axios.put(`${server}/user/updateProfile`, 
    {
      name, 
      email,
      address,
      city,
      country,
      pinCode
    },
    {
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    }
    )

    dispatch({
      type:"updateProfileSuccess",
      payload:data.message
    })

  }catch(error){
    dispatch({
      type:"updateProfileFail",
      payload:error.response.data.message
    })

    
  }
} 


