import { createSlice, nanoid } from "@reduxjs/toolkit";

import { sub } from 'date-fns'


const initialState = [
    {id:1, 
    title:"Learning redux toolkit" , 
    content: "Here we learn Somthing new today",
    userId:1,
    postTime:  sub(new Date(), {minutes : 10}).toISOString(),
    reactions:{
        thumbsup: 0,
        wow:0,
        heart:0
    }
},
    {id:2, 
    title:"Learning redux toolkit slice" , 
    content: "Here we learn Somthing new today, The more Slice i say , The more i want pizza ",
    userId:3,
    postTime: sub(new Date(), {minutes : 5}).toISOString(),
    reactions:{
        thumbsup: 0,
        wow:0,
        heart:0
    }
}

]


export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded: {
            reducer(state,action){
            state.push(action.payload)
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content,
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
            const exsistingPost = state.find(post=> post.id === postId)
            if (exsistingPost){
                exsistingPost.reactions[reaction]++
            }
    }

    }

})


export const {postAdded, reactionAdded} = postSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer