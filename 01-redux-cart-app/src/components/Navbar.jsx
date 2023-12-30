import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../features/cartSlice'


const Navbar = () => {

    const cartItems = useSelector(selectAllCart)

  return (
   <nav>
    <div className='bg-purple-950 w-full h-20 flex justify-between items-center'> 
    <div className='text-white mx-4 border-2 p-2'>
       <h1 className='text-2xl'>
       AMMX<span className='text-yellow-300 font-semibold text-sm'>BUY</span>
       </h1>
    </div>
    <div className='text-2xl relative mr-4'>
        🛒<div className=' font-semibold opacity-80 -top-2 -right-3 absolute flex items-center justify-center text-sm bg-white w-6 h-6 rounded-full'>
          {cartItems.length}
        </div>
    </div>
    
    </div>
   </nav>
  )
}

export default Navbar