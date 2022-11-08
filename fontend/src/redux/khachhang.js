import { createSlice } from "@reduxjs/toolkit";

const khachhang = createSlice({
    name: "khachhang",
    initialState:{
        login:{
            currentUser:null,
            isFetching: false,
            error:false
        },
        register:{
            isFetching: false,
            error:false,
            success:false
        },
        // lienhe:{
        //     isFetching: false,
        //     error:false,
        //     success:false
        // },
    },
    reducers:{
        loginStart: (state) =>{
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) =>{
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        logOutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logOutFailed: (state) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },
        logOutStart: (state) =>{
            state.login.isFetching = true;
        },
        // LienheStart: (state) =>{
        //     state.lienhe.isFetching = true;
        // },
        // LienheSuccess: (state) => {
        //     state.lienhe.isFetching = false;
        //     state.lienhe.error = false;
        //     state.lienhe.success = true;
        // },
        // LienheFailed: (state) =>{
        //     state.lienhe.isFetching = false;
        //     state.lienhe.error = true;
        //     state.lienhe.success = false;
        // },
       
    }
});



export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed,
    // LienheStart,
    // LienheSuccess,
    // LienheFailed,
} = khachhang.actions;

export default khachhang.reducer;