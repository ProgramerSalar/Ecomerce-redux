
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { otherReducer } from "./reducers/otherReducers";




export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer,
      
    }
})










export const server = "https://auth-1-gdgn.onrender.com/api/v1/user"