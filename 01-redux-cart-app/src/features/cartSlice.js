import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
 import axios from 'axios'

const initialState = {
    cartList: [],
    loading : false,
    error : null

}

const url = 'https://course-api.com/react-useReducer-cart-project'

export const fetchCart = createAsyncThunk('cart/fetchCart',async()=>{
    try{
        const res = await axios(url)
        return res.data
 
    //  const response = await fetch(url).then((res) => res.json())
    // return response;
     
    }catch(err){
        return err;
    }

})

export const cartSlice = createSlice({
    name : 'cartList',
    initialState,
    reducers:{
        removeAllItems: (state) => {
            state.cartList = []
        },

        removeItem : (state , {payload}) => {
            state.cartList = state.cartList.filter((item)=> item.id !== payload)
        },
        incraseAmount : ( state ,{payload}) =>{
            
            state.cartList = state.cartList.map((item)=>{
                if(item.id === payload){
                    return {...item , amount: item.amount+1 }
                }
                return item
            })

        },
        decraseAmount : ( state ,{payload}) =>{
            
            state.cartList = state.cartList.map((item)=>{
                if(item.id === payload){
                    return {...item , amount: item.amount-1 }
                }
                return item
            })

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending , (state) =>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchCart.fulfilled, (state, action) =>{
            state.loading = false;
            state.cartList= action.payload;
            
        }).addCase(fetchCart.rejected,(state,action) =>{
            state.loading = false;
            state.error =action.error.message;
        })
    }
 
})


export const {removeAllItems, removeItem,  incraseAmount, decraseAmount} = cartSlice.actions

export const selectAllCart = (state) => state.cart.cartList 
export const getLoading = (state) => state.cart.loading
export const getError = (state) => state.cart.error

export default cartSlice.reducer

