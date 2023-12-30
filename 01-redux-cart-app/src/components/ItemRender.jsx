import React, { useEffect, useState } from 'react'
import { decraseAmount, incraseAmount, removeItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

import {FaTrash} from 'react-icons/fa'

const Item = ({id,title,price,img,amount}) => {

   const dispatch = useDispatch()
   

   

   function removeCartItem (){
    dispatch(removeItem(id))
   }

   function increase(){
    dispatch(incraseAmount(id))
    
   }

   function decrease(){
    if( amount > 1){
    dispatch(decraseAmount(id))
   }else{
     dispatch(removeItem(id))

   }
    
   }




  return (
    <>
   <section className='flex justify-between h-auto mr-2 items-center border-b '>
   <div className='bg-white  flex py-4 px-2'>
        <img 
        className='w-20 h-20'
        src={img} alt="title" />
       <div className=''>
       <h1>{title}</h1>
       <h4 className='opacity-40 '>{`$${price}`}</h4>
       <button 
       onClick={removeCartItem}
       className='text-red-700 text-sm hover:scale-105'>Remove</button>
       </div>
    </div>
    <div className='w-10 text flex flex-col justify-center items-center border p-1 rounded-full'>
        <button 
        onClick={increase}
        className='hover:scale-125 hover:font-bold'>+</button>
        <div className='text-sm w-6 h-6 text-center rounded-full'>
        {amount}
        </div>
       <button 
       onClick={decrease}
       className='hover:scale-125 hover:font-bold w-7 h-7 flex items-center justify-center'>
        {amount < 2 ? <FaTrash className='opacity-80 m-2'/>:"-"}
       </button>
    </div>
   </section>
    
    </>
  )
}

export default Item