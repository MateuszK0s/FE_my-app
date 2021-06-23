import { createAction, createEntityAdapter, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ILayout from '../entities/ILayout';
import { Layout } from '../entities/Layout';

const initialState: ILayout ={
    layoutMode: Layout.DEFAULT
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        changeLayout: (state, action) => {
            state.layoutMode = action.payload;
        },
    },
})

export const { changeLayout } = layoutSlice.actions;
export default layoutSlice.reducer;