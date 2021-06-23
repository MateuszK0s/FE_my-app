import { configureStore } from '@reduxjs/toolkit';

import usersReducer, { userAdapter } from '../features/usersSlice';
import postsReducer, { postsAdapter } from '../features/postsSlice';
import commentsReducer, { commentsAdapter } from '../features/commentsSlice'
import photosReducer, { photosAdapter } from '../features/photosSlice'
import layoutReducer from '../features/layoutSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
        photos: photosReducer,
        layout: layoutReducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const usersSelectors = userAdapter.getSelectors<RootState>((state) => state.users);
export const postsSelectors = postsAdapter.getSelectors<RootState>((state) => state.posts);
export const commentsSelectors = commentsAdapter.getSelectors<RootState>((state) => state.comments);
export const photosSelectors = photosAdapter.getSelectors<RootState>((state) => state.photos);

export default store;