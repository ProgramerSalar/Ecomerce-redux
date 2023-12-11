import {createReducer} from "@reduxjs/toolkit"



export const userReducer = createReducer({}, (builder) => {


    // Request
    builder
    .addCase("loginRequest", (state) => {
        state.loading = true
    })
    .addCase("registerRequest", (state) => {
        state.loading = true
    })





    // Success
    builder
    .addCase("loginSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
    })
    .addCase("registerSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
    })
    



    // Fail 
    builder
    .addCase("loginFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })
    .addCase("registerFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })
   



    builder.addCase("clearError", (state) => {
        state.error = null;
      });
      builder.addCase("clearMessage", (state) => {
        state.message = null;
      });


})