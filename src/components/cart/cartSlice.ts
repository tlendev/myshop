import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    v: number;
}

const initialState = {
    v: 1,
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addV: (state) => {
            state.v += 1;
        },
        setV: (state, action: PayloadAction<number>) => {
            state.v = action.payload;
        },
    },
});

export const { addV, setV } = cartSlice.actions;

export default cartSlice.reducer;
