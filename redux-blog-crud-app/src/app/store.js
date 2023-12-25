import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/postSlice'
import userReducer from '../features/users/userSlice'



export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: userReducer,
    }
})