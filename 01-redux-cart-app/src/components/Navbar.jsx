import React from 'react'

const Navbar = () => {

    const cartItems = 0
  return (
   <nav>
    <div className='bg-purple-950 w-full h-20 flex justify-between items-center'> 
    <div className='text-white mx-4 border-2 p-2'>
       <h1 className='text-2xl'>
       AMMX<span className='text-yellow-300 font-semibold text-sm'>BUY</span>
       </h1>
    </div>
    <div className='text-white mx-4 border p-2 rounded-full'>
        CART {cartItems}
    </div>
    
    </div>
   </nav>
  )
}

export default Navbar