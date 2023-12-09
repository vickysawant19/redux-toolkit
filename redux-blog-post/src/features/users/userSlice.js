import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1, name:'vicky sawant',
    },
    {
        id:2,name:'michale jackson'
    },
    {
        id:3, name:'rohit kumar'
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const {} = userSlice.actions;

export const selectAllUser = (state) => state.users;

export default userSlice.reducer