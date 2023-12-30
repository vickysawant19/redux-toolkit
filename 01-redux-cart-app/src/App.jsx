import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

import CartPage from './components/CartPage'
import { useDispatch } from 'react-redux'
import { fetchCart } from './features/cartSlice'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCart())

  },[])

  return (
    <>
      <div>
        <Navbar/>
        <CartPage/>

      </div>
    </>
  )
}

export default App
