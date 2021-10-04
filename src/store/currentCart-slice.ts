import { createSlice } from '@reduxjs/toolkit';
import { FormattedData } from '../utils/utils';

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
            let newCart = state.items.filter((item, index) => index !== removedItem);
            state.items = newCart;
        },
        ClearCart(state){
            state.items=[];
        },
        setDate(state,action){
            const newItem = action.payload;
           state.items=state.items.map((item)=>item.date = FormattedData())
        }
    }
})


export const CurrentCartActions = currentCartSlice.actions;

export default currentCartSlice;