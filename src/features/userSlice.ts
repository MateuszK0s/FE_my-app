import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import IUser from '../entities/IUser';

export const userAdapter = createEntityAdapter<IUser>({});

export const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState(),
    reducers: {
        setUser: (state, { payload }: { payload: IUser[] }) => {
            userAdapter.setAll(state, payload);
            
            return state;
        },
    },
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;