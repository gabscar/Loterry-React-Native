import { createSlice } from '@reduxjs/toolkit';


const initialCartState = {
    items:[]
}

const cartSlice =  createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers:{
        buyGames(state,action){
            const newItem = action.payload;
            state.items= state.items.concat(newItem);
        }
    }
})


export const CartActions = cartSlice.actions;

export default cartSlice;