
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { otherReducer } from "./reducers/otherReducers";
import { productReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";






export const store = configureStore({
    reducer:{
        user:userReducer,
        other:otherReducer,
        product:productReducer,
        cart:cartReducer

      
    }
})










export const server = "https://auth-1-gdgn.onrender.com/api/v1"