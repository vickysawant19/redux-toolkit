import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { increment,decrement,reset,incrementByAmount } from './CounterSlice'

const Counter = () => {

    const dispatch = useDispatch()

    const count = useSelector(state => state.counter.count)

    const [number , setNumber] = useState(0)

    const incNumber = Number(number) || 0


  return (
    <>
        <div className=' text-center text-5xl p-4 '>
            {count}
        </div>
       <div className='flex gap-4 items-center justify-center mt-10'>
       <button 
       onClick={()=>{dispatch(increment())}}
       className='w-32 bg-green-400 p-4 rounded-full hover:text-gray-300 shadow-xl'>
            Increment
        </button>
        <button 
        onClick={()=>{dispatch(decrement())}}
        className='w-32 bg-green-400 p-4 rounded-full hover:text-gray-300 shadow-xl'>
           Decrement
        </button>
        <button 
        onClick={()=>{dispatch(reset())}}
        className='w-32 bg-red-400  transition duration-300 p-4 rounded-full hover:text-gray-300 shadow-xl'>
           Reset
        </button>

       </div>
       <div className='flex items-center justify-center m-4 '>
        <input 
        onChange={(e)=>{setNumber(e.target.value)}}
        className=' p-2 text-center rounded-l-full text-2xl outline-none shadow-xl'
        type="text" />

        <button 
        onClick={()=>{dispatch(incrementByAmount(incNumber))}}
        className='bg-blue-200 p-3 rounded-r-full shadow-xl hover:transition-color hover:bg-blue-950 hover:text-white duration-300 ease-in-out '>
            Increment By
        </button>
       
       </div>
    
    
    </>
  )
}

export default Counter