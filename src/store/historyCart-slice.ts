import { createSlice } from '@reduxjs/toolkit';

import { Game } from '../screens/NewGame/NewGame';
import { FormattedData } from '../utils/utils';

const initialCartState = {
    items:[]
}

export interface cart{
    gameSelected:Game;
    selectedNumbers:number[];
}

const historyCartSlice =  createSlice({
    name: 'HistoryCart',
    initialState: initialCartState,
    reducers:{
        buyGames(state,action){
            const newItem = action.payload;
            let teste =newItem.map((item:cart)=>{return ({...item,date:FormattedData()}) })
            state.items= state.items.concat(teste);

            
        }
    }
})


export const HistoryCartActions = historyCartSlice.actions;

export default historyCartSlice;