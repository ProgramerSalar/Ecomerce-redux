import {createReducer} from "@reduxjs/toolkit"



export const otherReducer = createReducer({}, (builder) => {


    // Request
    builder
    .addCase("updatePicRequest", (state) => {
        state.loading = true
    })
    .addCase("addProductRequest", (state) => {
        state.loading = true
    })
    .addCase("addCategoryRequest", (state) => {
        state.loading = true
    })
    .addCase("deleteCategoryRequest", (state) => {
        state.loading = true
    })
    .addCase("deleteProductRequest", (state) => {
        state.loading = true
    })





    // Success
    builder
    .addCase("updatePicSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("addProductSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("addCategorySuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("deleteCategorySuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("deleteProductSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
  
   

















    // Fail 
    builder
    .addCase("updatePicFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("addProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("addCategoryFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("deleteCategoryFail", (state,action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("deleteProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })














   



    builder
    .addCase("clearError", (state) => {
        state.error = null;
      });
      builder.addCase("clearMessage", (state) => {
        state.message = null;
      });


})