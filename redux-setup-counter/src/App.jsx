import { useState } from 'react'

import './App.css'
import Counter from './features/counter/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-center bg-red-300 shadow-xl p-2 font-semibold text-fuchsia-800'>Counter using redux</h1>
      <Counter/>
      
    </>
  )
}

export default App
