import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAllItems } from '../features/cartSlice'
import { toggleOpen } from '../features/modalSlice'

const RemoveModal = () => {
    const dispatch = useDispatch()

    function handleClear(){
        dispatch(removeAllItems())
        dispatch(toggleOpen())
    }


  return (
    <>
    <div className='absolute z-10 h-fit flex  justify-center w-full top-20'>
       <div className='bg-white border m-2 rounded-xl flex flex-col gap-2 p-4 opacity-100'>
       Are You want to Clear all items in Cart? 
    <div className=" flex justify-between mx-auto gap-4">
    <button
    onClick={handleClear}
    className='border p-2 bg-red-400 text-white font-semibold rounded-xl w-20'> Yes </button>
     <button  
     onClick={()=> {dispatch(toggleOpen())}}
     className='border p-2 bg-green-400 text-white font-semibold rounded-xl w-20'>Cancel</button>
    </div>

       </div>
    </div>
    </>
)}

export default RemoveModal