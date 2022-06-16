import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../components/cart/cartSlice';
import shopItemsReducer from '../components/list/shopItemsSlice';
import pagingReducer from '../components/list/pagingSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopItemsReducer,
        paging: pagingReducer,
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
