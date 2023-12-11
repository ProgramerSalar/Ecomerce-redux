
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";




export const store = configureStore({
    reducer:{
        user:userReducer,
      
    }
})










export const server = "https://auth-1-gdgn.onrender.com/api/v1/user"