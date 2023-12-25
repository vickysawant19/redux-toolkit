import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { sub } from 'date-fns'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts:  [],
    status: 'idle',
    error: null
}

 
export const fetchPosts = createAsyncThunk( 'posts/fetchPosts', async () => {
            try {
                
                const response = await axios.get(POST_URL)
                return (response.data)

            }
            catch(error){
                return error.message;

            }
            
        }

)

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialState)=>{
    try {
        const response = await axios.post(POST_URL, initialState)
        // console.log(response.data);
        return response.data
    } catch (error) {
        return error.message
        
    }

})


export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded: {
            reducer(state,action){
            state.posts.push(action.payload)
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        body:content,
                        userId,
                        postTime : new Date().toISOString(),
                        reactions: {
                            thumbsup: 0,
                            wow:0,
                            heart:0
                        }

                    }
                }
                        
            }
    
        },

        reactionAdded(state,action) {
            const {postId , reaction} = action.payload
            const exsistingPost = state.posts.find(post=> post.id === postId)
            if (exsistingPost){
                exsistingPost.reactions[reaction]++
            }
    }

    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state,action)=> {
                state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action )=> {
            state.status = 'succeeded'

            let min = 1;
            const loadedPosts = action.payload.map(post => {
                post.postTime = sub(new Date(), {minutes: min++}).toISOString();
                post.reactions= {
                    thumbsup: 0,
                    wow:0,
                    heart:0
                }
                return post;
            });
            // state.posts = state.posts.concat(loadedPosts)
            state.posts = [...loadedPosts];
            
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled,(state,action)=>{
            action.payload.id = nanoid();
            action.payload.userId = Number(action.payload.userId)
            action.payload.postTime = new Date().toISOString();
            action.payload.reactions = {
                thumbsup: 0,
                wow:0,
                heart:0
            }
            console.log(action.payload)
            state.posts.push(action.payload)
        })

    }

})


export const {postAdded, reactionAdded} = postSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postSlice.reducer