import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false 
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleOpen:(state)=>{
            state.isOpen = !state.isOpen

        }
    }
})

export const {toggleOpen} = modalSlice.actions
 
export const selectModalStatus = (state) => state.modal.isOpen

export default modalSlice.reducer
