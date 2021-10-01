import { createSlice } from '@reduxjs/toolkit';


const initialCartState = {
    items:[]
}

const currentCartSlice =  createSlice({
    name: 'CurrentCart',
    initialState: initialCartState,
    reducers:{
        AddToCart(state,action){
            const newItem = action.payload;
            state.items= state.items.concat(newItem);
        },
        RemoveToCart(state,action){
            const removedItem = action.payload;
            let newCart = state.items.filter((item, index) => index !== removedItem.id);
            state.items = newCart;
        }
    }
})


export const CurrentCartActions = currentCartSlice.actions;

export default currentCartSlice;