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
    .addCase("forgotPasswordRequest", (state) => {
        state.loading = true
    })
    .addCase("resetPasswordRequest", (state) => {
        state.loading = true
    })
    .addCase("loadUserRequest", (state) => {
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
    .addCase("forgotPasswordSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
    })
    .addCase("resetPasswordSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
    })
    .addCase("loadUserSuccess",(state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload
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
    .addCase("forgotPasswordFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })
    .addCase("resetPasswordFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    })
    .addCase("loadUserFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
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