import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types';

export interface CartState {
    cartItems: Array<Item>;
    displayCount: number;
    showCart?: boolean;
    totalPrice?: number;
}

const initialState = {
    cartItems: [],
    displayCount: 0,
    showCart: false,
    totalPrice: 0,
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartVisibility: (
            state,
            action: PayloadAction<{ show: boolean }>
        ) => {
            state.showCart = action.payload.show;
        },
        addToCart: (state, action: PayloadAction<Item>) => {
            let dupe = false;
            state.cartItems.forEach((item, idx) => {
                if (item.uid === action.payload.uid) {
                    state.cartItems[idx].quantity += 1;
                    state.displayCount += 1;
                    state.totalPrice! += item.priceInPLN;
                    dupe = true;
                }
            });
            if (dupe) {
                return;
            }
            const newCartLen = state.cartItems.push(action.payload);
            state.displayCount = newCartLen;
            // recalculate display count
            let totalDisplay = 0;
            state.cartItems.forEach((item) => {
                totalDisplay += item.quantity;
            });
            state.displayCount = totalDisplay;
            // recalculate total cart value
            let total = 0;
            state.cartItems.forEach((item) => {
                total += item.priceInPLN * item.quantity;
            });
            state.totalPrice = total;
        },
        setItemQuantity: (
            state,
            action: PayloadAction<{ uid: string; quantity: number }>
        ) => {
            const idx = state.cartItems.findIndex((item) => {
                return item.uid === action.payload.uid;
            });
            if (idx === -1 || idx === NaN) {
                return;
            }
            state.cartItems[idx].quantity = action.payload.quantity;
            // recalculate display count
            let totalDisplay = 0;
            state.cartItems.forEach((item) => {
                totalDisplay += item.quantity;
            });
            state.displayCount = totalDisplay;
            // recalculate total cart value
            let total = 0;
            state.cartItems.forEach((item) => {
                total += item.priceInPLN * item.quantity;
            });
            state.totalPrice = total;
        },
        removeFromCart: (state, action: PayloadAction<{ uid: string }>) => {
            const filtered = state.cartItems.filter((item) => {
                return item.uid !== action.payload.uid;
            });
            state.cartItems = filtered;
            state.displayCount = filtered.length;
            // recalculate display count
            let totalDisplay = 0;
            state.cartItems.forEach((item) => {
                totalDisplay += item.quantity;
            });
            state.displayCount = totalDisplay;
            // recalculate total cart value
            let total = 0;
            state.cartItems.forEach((item) => {
                total += item.priceInPLN * item.quantity;
            });
            state.totalPrice = total;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.displayCount = 0;
            state.totalPrice = 0;
        },
    },
});

export const {
    addToCart,
    setItemQuantity,
    removeFromCart,
    toggleCartVisibility,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
