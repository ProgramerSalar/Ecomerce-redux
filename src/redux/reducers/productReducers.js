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

    


})