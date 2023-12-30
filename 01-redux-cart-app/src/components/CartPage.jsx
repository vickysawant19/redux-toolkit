import React, { useEffect, useState } from 'react'
import Item from './ItemRender'

import { useDispatch,useSelector } from 'react-redux'
import { getLoading, removeAllItems, selectAllCart } from '../features/cartSlice'
import { FaTrash } from 'react-icons/fa'
import RemoveModal from './RemoveModal'
import { selectModalStatus, toggleOpen } from '../features/modalSlice'






const CartPage = () => {

 

  const [totalAmount ,setTotalAmount] = useState(0)
  
  const cartItems = useSelector(selectAllCart)
  const loading = useSelector(getLoading)
  const isOpen = useSelector(selectModalStatus)

  const dispatch = useDispatch()


  useEffect(()=>{
    let tamount = 0;
    cartItems.map((item)=>{
      tamount += Number(item.price*item.amount);
    })
    tamount= tamount.toFixed(2)
    setTotalAmount(tamount)

  },[cartItems])

  function handleRemoveAll(){
    dispatch(toggleOpen())
    
    
  }
  
  
  return (
    <>
<div className='flex justify-center w-full h-screen bg-purple-100 relative'>
  { isOpen ? <RemoveModal/>: "" }
<div className={`bg-white  rounded-xl w-96 h-fit overflow-hidden mt-4 mb-24 ${isOpen ? 'opacity-10':''}`}>
    {loading ?<div className='flex items-center justify-center my-10'> Loading... </div>:
<div>
{cartItems?.map((item)=>{ 
   return <Item key={item.id} {...item}/>
   
})}
  <hr />
 {cartItems.length > 0 ? <div> 
   <button 
   onClick={handleRemoveAll}
    className='w-full my-2 text-red-600 font-semibold flex items-center justify-center gap-2 hover:text-red-700'>Clear Cart<FaTrash/>
    </button> 
    <hr />
  <div className='flex justify-between items-center m-4'> 
     <div className='mx-2 text-center font-semibold'>
      <h1 className='flex items-center flex-col'>Total Amount <span className='text-xl opacity-70'>{`$${totalAmount}`}</span> </h1>
      
   </div>
       <button className='p-2 rounded-full font-bold text-white bg-orange-400 hover:bg-orange-600' >
   Go to Payment
       </button>
    
   </div>
   </div>
   : <div className='text-center my-10'> No items in Cart</div>}
  </div>
  
   
}
   </div>
</div>
    
    </>
  )
}

export default CartPage