import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import friendProductReducer from './features/productSlice';
import authReducer from './features/authSlice';
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    friendProduct: friendProductReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch