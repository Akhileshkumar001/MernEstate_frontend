// src/Redux/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null; // Reset any previous errors
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload; // Store the user data
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store the error message
    },
    updateUserStart:(state)=>{
        state.loading=true;
        state.error=null
    },
    updateUserSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      updateUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      deleteUserStart: (state) => {
        state.loading = true;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      signOutUserStart: (state) => {
        state.loading = true;
      },
      signOutUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      signOutUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
    },
  });
  
  export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart,
  } = userSlice.actions;
  
  export default userSlice.reducer;
  