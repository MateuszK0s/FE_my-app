import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import IPhotos from '../entities/IPhotos';

export const photosAdapter = createEntityAdapter<IPhotos>({});

export const photosSlice = createSlice({
    name: 'photos',
    initialState: photosAdapter.getInitialState(),
    reducers: {
        setPhotos: (state, { payload }: { payload: Array<IPhotos> }) => {
            photosAdapter.setAll(state, payload);

            return state;
        },
    },
})

export const { setPhotos } = photosSlice.actions;

export default photosSlice.reducer;