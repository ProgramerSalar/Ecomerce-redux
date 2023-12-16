import {createReducer} from "@reduxjs/toolkit"



export const productReducer = createReducer({
    products:[],
    product:{},
}, (builder) => {


    // Request 
    builder
    .addCase("getAllProductRequest", (state) => {
        state.loading = true
    })
    .addCase("getProductDetailsRequest", (state) => {
        state.loading = true
    })
    .addCase("getAdminProductsRequest", (state) => {
        state.loading = true;
      })



    // Success 
    builder
    .addCase("getAllProductSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase("getProductDetailsSuccess", (state, action) => {
        state.loading = false
        state.product = action.payload
    })
    .addCase("getAdminProductsSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })



    // Fail
    builder
    .addCase("getAllProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("getProductDetailsFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("getAdminProductsFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    


})