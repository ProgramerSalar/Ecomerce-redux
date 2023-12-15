
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { otherReducer } from "./reducers/otherReducers";
import { productReducer } from "./reducers/productReducers";






export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer,
        product:productReducer,
        

      
    }
})










export const server = "https://auth-1-gdgn.onrender.com/api/v1"