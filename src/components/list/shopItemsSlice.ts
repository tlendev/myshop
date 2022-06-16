import { createSlice } from '@reduxjs/toolkit';
import { DetailedItem } from '../../types';
import { generateMock } from '../../util/generateList';

export interface ShopItemsState {
    shopItems: Array<DetailedItem>;
}

const initialState = {
    shopItems: generateMock(34),
} as ShopItemsState;

const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {},
});

// export const {} = shopItemsSlice.actions;

export default shopItemsSlice.reducer;
