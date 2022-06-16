import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PagingState {
    page: number;
    maxPage?: number;
}

const initialState = {
    page: 1,
    maxPage: Math.ceil(34 / 5) - 1, // max 6 items per page
} as PagingState;

const pagingSlice = createSlice({
    name: 'paging',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<PagingState>) => {
            if (
                action.payload.page > 0 &&
                action.payload.page <= state.maxPage!
            ) {
                state.page = action.payload.page;
            }
        },
    },
});

export const { changePage } = pagingSlice.actions;

export default pagingSlice.reducer;
