import { configureStore } from  '@reduxjs/toolkit'
import { User } from '../models/user.type';
import { userReducer } from './slices';

export interface AppStore{
    user: User;
}

const store = configureStore<AppStore>({
    reducer:{
        user: userReducer,
    }
})
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch