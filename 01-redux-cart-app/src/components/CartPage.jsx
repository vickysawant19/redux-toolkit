import React from 'react'
import { cartItems } from '../cart'
import Item from './item'

const CartPage = () => {
  return (
    <>
    <div className='flex justify-center w-full bg-purple-100 '>
     <div className='bg-white rounded-xl w-96 overflow-hidden mt-4 mb-24'>
     {cartItems.map((item)=>{ 
        return <Item key={item.id} {...item}/>
        
    })}
       <hr />
       <div className='flex justify-between items-center m-4'>
       <div className='mx-2 text-center font-semibold'>
        <h1>Total Amount <span className='text-2xl opacity-70'>$1000</span> </h1>
        
       </div>
       <button className='p-2 rounded-full font-bold text-white bg-orange-400 hover:bg-orange-600' >
        Go to Payment
       </button>
         
       </div>
    
     </div>

    
    </div>
   
    </>
  )
}

export default CartPage