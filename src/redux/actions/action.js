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