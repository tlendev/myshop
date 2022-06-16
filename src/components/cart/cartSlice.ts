import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types';

export interface CartState {
    cartItems: Array<Item>;
    displayCount: number;
}

const initialState = {
    cartItems: [],
    displayCount: 0,
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const newCartLen = state.cartItems.push(action.payload);
            state.displayCount = newCartLen;
        },
        removeFromCart: (state, action: PayloadAction<{ uid: string }>) => {
            const filtered = state.cartItems.filter(
                (item) => item.uid !== action.payload.uid
            );
            state.cartItems = filtered;
            state.displayCount = filtered.length;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
