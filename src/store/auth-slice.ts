import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    isLoggedin: false,
    user :{
        name: '',
        email:'',
        password:'',
        administrator: false
    }
}

const authSlice = createSlice({
    name : 'authentication',
    initialState: initialUserState,
    reducers :{
        login(state,action){
            state.isLoggedin = true;
            state.user = action.payload;
        },
        logOut(state){
            state.isLoggedin = false;
            state.user = {
                name: '',
                email:'',
                password:'',
                administrator: false
            }
            
        }
    }
})


export const AuthActions = authSlice.actions;

export default authSlice;