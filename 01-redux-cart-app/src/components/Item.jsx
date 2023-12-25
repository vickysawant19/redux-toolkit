import React from 'react'

const Item = ({id,title,price,img,amount}) => {
  return (
    <>
   <section className='flex justify-between mr-2 items-center border-b '>
   <div className='bg-white  flex py-4 px-2'>
        <img 
        className='w-20'
        src={img} alt="title" />
       <div className=''>
       <h1>{title}</h1>
       <h4 className='opacity-40 '>{`$${price}`}</h4>
       </div>
    </div>
    <div className=' w-7 text flex flex-col justify-center items-center border p-1 rounded-full'>
        <button>+</button>
        <div className='text-xl'>
        {amount}
        </div>
       <button>-</button>
    </div>
   </section>
    
    </>
  )
}

export default Item