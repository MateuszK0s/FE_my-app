import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import IComments from '../entities/IComments';

export const commentsAdapter = createEntityAdapter<IComments>({});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState(),
    reducers: {
        setComments: (state, { payload }: { payload: Array<IComments> }) => {
            commentsAdapter.setAll(state, payload);

            return state;
        },
    },
})

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;