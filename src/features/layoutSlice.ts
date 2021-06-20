import { createAction, createEntityAdapter, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ILayout from '../entities/ILayout';

const initialState: ILayout ={
    Default: true,
    FullScreen: true
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        toggleDefault: (state, action) => {
            state.Default = action.payload;
        },
        toggleFullScreen: (state, action) => {
            state.FullScreen = action.payload;
        },
    },
})

export const { toggleDefault, toggleFullScreen } = layoutSlice.actions;
export default layoutSlice.reducer;