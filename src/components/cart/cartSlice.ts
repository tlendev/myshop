import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types';

export interface CartState {
    cartItems: Array<Item>;
    displayCount: number;
}

const initialState = {
    cartItems: [
        { uid: '1', name: 'test 1', price: '100 zł', imagePath: 'test.webp' },
        { uid: '2', name: 'test 2', price: '200 zł', imagePath: 'test2.webp' },
        { uid: '3', name: 'test 3', price: '300 zł', imagePath: 'test3.webp' },
    ],
    displayCount: 3,
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
