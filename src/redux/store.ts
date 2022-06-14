import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../components/cart/cartSlice';
import shopItemsSlice from '../components/list/shopItemsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopItemsSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
