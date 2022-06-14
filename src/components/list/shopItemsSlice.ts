export interface ShopItemsState {
    shopItems: Array<Item>;
}

const initialState = {
    shopItems: [
        { uid: '1', name: 'test 1', price: '100 zł', imagePath: 'test.webp' },
        { uid: '2', name: 'test 2', price: '200 zł', imagePath: 'test2.webp' },
        { uid: '3', name: 'test 3', price: '300 zł', imagePath: 'test3.webp' },
    ],
} as ItemsState;

const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
