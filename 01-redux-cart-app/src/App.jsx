import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

import { cartItems } from './cart'
import CartPage from './components/CartPage'

function App() {
  const [count, setCount] = useState(0)

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
