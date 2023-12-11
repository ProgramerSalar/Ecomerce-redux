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