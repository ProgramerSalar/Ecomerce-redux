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
    .addCase("logoutRequest", (state) => {
        state.loading = true
    })
    .addCase("changepasswordRequest", (state) => {
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
    .addCase("logoutSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.message = action.payload
        state.user = null
    })
    .addCase("changePasswordSuccess", (state, action) => {
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
    .addCase("logoutFail", (state, action) => {
        state.loading =false
        state.isAuthenticated = true
        state.error = action.payload
    })
    .addCase("changePasswordFail", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
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