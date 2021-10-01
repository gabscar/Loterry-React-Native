import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import currentCartSlice from './currentCart-slice';
import historyCartSlice from './historyCart-slice';




const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cartHistory: historyCartSlice.reducer,
        currentCart: currentCartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;