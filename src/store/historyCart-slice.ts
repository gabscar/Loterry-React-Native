import { createSlice } from '@reduxjs/toolkit';


const initialCartState = {
    items:[]
}

const historyCartSlice =  createSlice({
    name: 'HistoryCart',
    initialState: initialCartState,
    reducers:{
        buyGames(state,action){
            const newItem = action.payload;
            state.items= state.items.concat(newItem);
        }
    }
})


export const HistoryCartActions = historyCartSlice.actions;

export default historyCartSlice;